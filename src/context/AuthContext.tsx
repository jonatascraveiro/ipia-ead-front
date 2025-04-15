import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import type React from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
type AuthContextType = {
  user: UserType | null
  login: (
    data: { token: string; nome: string; email: string },
    callback: VoidFunction,
  ) => void
  logout: (callback: VoidFunction) => void
  isAuthenticated: boolean
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserType | null>(null)
  const [token, setToken] = useState<string | null>(() => {
    return Cookies.get('token') as string
  })
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const storedToken = Cookies.get('token')
    if (storedToken) {
      setToken(storedToken)
    }

    const user = JSON.parse(Cookies.get('user') || '{}') as UserType | null

    if (user) {
      setUser(user)
    }

    setLoading(false)
  }, [])

  useEffect(() => {
    setIsAuthenticated(isTokenValid(token))
  }, [token])

  const login = (
    data: { token: string; nome: string; email: string },
    callback: VoidFunction,
  ) => {
    setJwtCookie(data.token)
    Cookies.set(
      'user',
      JSON.stringify({ nome: data.nome, email: data.email }),
      { expires: 1, secure: true },
    )

    setToken(() => token)
    setUser(() => ({ nome: data.email, email: data.email }))
    callback()
  }

  const logout = (callback?: VoidFunction) => {
    Cookies.remove('token')
    Cookies.remove('user')
    setToken(null)
    setUser(null)
    if (callback) callback()
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (!token) return

    const interval = setInterval(() => {
      console.log('verificando token')
      if (!isTokenValid(token)) {
        logout()
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [token])

  const value: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated,
    loading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const isTokenValid = (token: string | null): boolean => {
  if (!token) return false
  try {
    const decoded: { exp: number } = jwtDecode(token)
    return decoded.exp > Date.now() / 1000
  } catch {
    return false
  }
}

const setJwtCookie = (token: string) => {
  const decoded: { exp: number } = jwtDecode(token)
  const expires = new Date(decoded.exp * 1000)
  Cookies.set('token', token, { expires, secure: true, sameSite: 'strict' })
}

export type UserType = {
  nome: string
  email: string
}
