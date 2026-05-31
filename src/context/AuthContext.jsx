import { createContext, useContext, useMemo, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const value = useMemo(() => ({
    user,
    role: user?.role || 'volunteer',
    isAuthenticated: Boolean(user),
    signIn: (email, role = 'volunteer') => setUser({ email, role }),
    signOut: () => setUser(null),
  }), [user])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const value = useContext(AuthContext)
  if (!value) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return value
}
