'use client'
import { createContext, useState, useEffect } from 'react'
import clienteAxios from '../config/clienteAxios'
import { useRouter } from 'next/navigation'
import useAuth from '../hooks/useAuth'

const RefugioContext = createContext()

const RefugioProvider = ({ children }) => {
  const [refugios, setRefugios] = useState([])

  const { auth } = useAuth()
  useEffect(() => {
    if (auth) {
      const getRefugios = async () => {
        try {
          const { data } = await clienteAxios.get('/refugio/all')
          setRefugios(data)
        } catch (error) {
          console.log(error)
        }
      }
      getRefugios()
    }
  }, [auth])
  return (
    <RefugioContext.Provider value={{ refugios }}>
      {children}
    </RefugioContext.Provider>
  )
}

export { RefugioProvider }
export default RefugioContext