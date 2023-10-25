'use client'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import TopBar from '../components/TopBar'
import Sidebar from '../components/Sidebar'
import clienteAxios from '../config/clienteAxios'
import axios from 'axios'
const Page = () => {
  const [user, setUser] = useState([])
  const { data, status } = useSession()

  useEffect(() => {
    const userInfo = async () => {
      try {
        const url = `${process.env.NEXT_PUBLIC_URL}/usuarios/perfil`
        const response = await axios.get(url, {
          headers: {
            'Authorization': `Bearer ${data?.token}`,
            'Content-Type': 'application/json'
          }
        })
        return setUser(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    userInfo()
  }, [data])

  if (status === 'loading') {
    return <div>Cargando...</div>
  }
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex flex-col w-full bg-[#CCC4BB]'>
        <TopBar />
        <div className='w-full flex flex-col items-center justify-center'>
          <div className='flex w-[65.4rem] gap-4 '>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
