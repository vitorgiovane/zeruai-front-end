import React, { createContext, useCallback } from 'react'
import api from '../services/api'

export interface SignInCredentials {
  email: string
  password: string
}

interface AuthProps {
  name: string
  signIn(credentials: SignInCredentials): Promise<void>
}

export const AuthContext = createContext<AuthProps>({} as AuthProps)

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', { email, password })
    console.log(response)
  }, [])

  return (
    <AuthContext.Provider value={{ name: 'Vitor', signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
