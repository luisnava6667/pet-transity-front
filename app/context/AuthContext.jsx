'use client'
import { createContext, useState, useEffect } from 'react'
import clienteAxios from '../config/clienteAxios'
import { useRouter } from 'next/navigation'

const AuthContext = createContext()
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({})
  const [cargando, setCargando] = useState(true)
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false)
  const router = useRouter()
  useEffect(() => {
    const autenticarUsuario = async () => {
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
        setCargando(false)
      } catch (error) {
        setAuth({})
      }
    }
    autenticarUsuario()
  }, [])
  const cerrarSesionAuth = () => {
    setAuth({})
    localStorage.removeItem('token')
    router.push('/login')
  }

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        cargando,
        cerrarSesionAuth,
        cuentaConfirmada,
        setCuentaConfirmada
      }}>
      {children}
    </AuthContext.Provider>
  )
}
export { AuthProvider }

export default AuthContext
