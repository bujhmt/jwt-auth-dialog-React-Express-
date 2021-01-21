import { createContext } from 'react'

const empty: () => any = () => {
    return
}

export const AuthContext = createContext({
    accessToken: null,
    refreshToken: null,
    expiresAt: null,
    login: empty,
    logout: empty,
    isAuthenticated: false,
})
