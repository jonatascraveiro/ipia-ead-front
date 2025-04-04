import Cookies from 'js-cookie'
import React, { createContext, useContext, useEffect, useState } from 'react'

type AuthContextType = {
	user: UserType | null
	login: (token: string, callback: VoidFunction) => void
	logout: (callback: VoidFunction) => void
	isAuthenticated: boolean
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

	const updateUserFromToken = (token: string) => {
		try {
			// const decodedUser = jwtDecode(token) as UserType
			console.log(token)
			setUser({ id: 2, email: 'email@email.com', nome: 'User Teste' })
		} catch (error) {
			console.error('Failed to decode token:', error)
			setUser(null)
		}
	}

	useEffect(() => {
		const storedToken = Cookies.get('token')
		if (storedToken) {
			setToken(storedToken)
			updateUserFromToken(storedToken)
		}
	}, [])

	const login = (token: string, callback: VoidFunction) => {
		Cookies.set('token', token, { expires: 1, secure: true })
		setToken(token)
		updateUserFromToken(token)
		callback()
	}

	const logout = (callback: VoidFunction) => {
		Cookies.remove('token')
		setToken(null)
		setUser(null)

		callback()

	}

	const isAuthenticated = !!token

	const value: AuthContextType = {
		user,
		login,
		logout,
		isAuthenticated,
	}

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export type UserType = {
	id: number
	nome: string
	email: string
}
