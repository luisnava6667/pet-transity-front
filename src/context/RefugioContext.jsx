/* eslint-disable react/prop-types */

import { createContext, useState, useEffect } from 'react'
import clienteAxios from '../config/clienteAxios'


const RefugioContext = createContext()

const RefugioProvider = ({ children }) => {
  const [refugios, setRefugios] = useState([])

  useEffect(() => {
    const getRefugios = async () => {
      try {
        const { data } = await clienteAxios.get('/refugio/all')
        setRefugios(data)
      } catch (error) {
        console.log(error)
      }
    }
    getRefugios()
  }, [])
  return (
    <RefugioContext.Provider value={{ refugios }}>
      {children}
    </RefugioContext.Provider>
  )
}

export { RefugioProvider }
export default RefugioContext
