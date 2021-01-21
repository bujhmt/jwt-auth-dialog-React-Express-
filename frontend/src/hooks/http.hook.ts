import { useState, useCallback } from 'react'
import { useAuth } from './auth.hook'

export const useHttp = () => {
    const { auth } = useAuth()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async (url: string, method: string = 'GET', body: any = null, headers: any = {}) => {
        setLoading(true)
        try {

            




            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }

            const response = await fetch(url, {
                method,
                body,
                headers,
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Internal server error')
            }

            setLoading(false)

            return data
        } catch (err) {
            setLoading(false)
            setError(err.message)
            throw err
        }
    }, [])

    const clearError = useCallback(() => setError(null), [])

    return { loading, request, error, clearError }
}
