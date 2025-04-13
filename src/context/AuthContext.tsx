import Cookies from 'js-cookie'
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
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
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

  const login = (
    data: { token: string; nome: string; email: string },
    callback: VoidFunction,
  ) => {
    Cookies.set('token', data.token, { expires: 1, secure: true })
    Cookies.set(
      'user',
      JSON.stringify({ nome: data.nome, email: data.email }),
      { expires: 1, secure: true },
    )
    console.log(data)
    setToken(() => token)
    setUser(() => ({ nome: data.email, email: data.email }))
    callback()
  }

  const logout = (callback: VoidFunction) => {
    Cookies.remove('token')
    Cookies.remove('user')
    setToken(null)
    setUser(null)

    callback()
  }
  console.log(token)
  const isAuthenticated = !!token
  console.log(isAuthenticated)
  const value: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated,
    loading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export type UserType = {
  nome: string
  email: string
}
