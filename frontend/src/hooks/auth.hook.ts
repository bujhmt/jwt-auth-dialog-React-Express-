import { useCallback, useState, useEffect } from 'react'

interface IAuth {
    accessToken: string | null,
    refreshToken: string | null,
    expiresAt: number | null
}

const storageName: string = process.env.REACT_APP_LOCAL_STORAGE_NAME || ''

export const useAuth = () => {
    const [auth, setAuth] = useState<IAuth>({accessToken: null, refreshToken: null, expiresAt: null})

    const login = useCallback((auth: IAuth) => {
        setAuth(auth)
        localStorage.setItem(storageName, JSON.stringify(auth))
    }, [])

    const logout = useCallback(() => {
        setAuth({accessToken: null, refreshToken: null, expiresAt: null})
        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        const data: IAuth = JSON.parse(localStorage.getItem(storageName)!)

        if (data) {
            login(data)
        }
    }, [login])

    return { login, logout, auth}
}
