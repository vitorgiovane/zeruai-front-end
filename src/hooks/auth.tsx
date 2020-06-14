import React, { createContext, useCallback, useState, useContext } from 'react'
import api from '../services/api'

export interface SignInCredentials {
  email: string
  password: string
}

interface AuthProps {
  user: object
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void
}

interface AuthState {
  token: string
  user: object
}

const AuthContext = createContext<AuthProps>({} as AuthProps)

export const AuthProvider: React.FC = ({ children }) => {
  const [AuthData, setAuthData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Zeruai:token')
    const user = localStorage.getItem('@Zeruai:user')

    if (token && user) {
      return { token, user: JSON.parse(user) }
    }

    return {} as AuthState
  })

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', { email, password })

    const { token, user } = response.data
    localStorage.setItem('@Zeruai:token', token)
    localStorage.setItem('@Zeruai:user', JSON.stringify(user))

    setAuthData({ token, user })
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@Zeruai:token')
    localStorage.removeItem('@Zeruai:user')

    setAuthData({} as AuthState)
  }, [])

  return (
    <AuthContext.Provider value={{ user: AuthData.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthProps {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
