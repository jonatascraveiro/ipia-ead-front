import { useAuth } from '@/context/AuthContext'
import type React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

export function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, loading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated && !loading) {
      navigate('/login')
    }
  }, [isAuthenticated, loading, navigate])

  return isAuthenticated && !loading ? children : null
}
