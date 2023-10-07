'use client'
import { createContext, useState, useEffect } from 'react'
import clienteAxios from '../config/clienteAxios'

const PetContext = createContext()

const PetProvider = ({ children }) => {
  return <PetContext.Provider value={{}}>{children}</PetContext.Provider>
}

export { PetProvider }
export default PetContext
