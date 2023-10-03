'use client'
import { createContext, useState, useEffect } from 'react'
import clienteAxios from '../config/clienteAxios'

const AuthContext = createContext()
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({})
  const [cargando, setCargando] = useState(true)
  useEffect(() => {
    const autenticarUserio = async () => {
      const token = localStorage.getItem('token')
      if (!token) {
        setCargando(false)
        return
      }
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }
      try {
        const { data } = await clienteAxios.get('/usuario/perfil', config)
        setAuth(data)
      } catch (error) {
        setAuth({})
      }
    }
  }, [])
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}
export { AuthProvider }

export default AuthContext
