'use client'

import clienteAxios from '@/app/config/clienteAxios'
import AuthContext from '@/app/context/AuthContext'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'

export default function Page({ params }) {
  const [token, setToken] = useState(params.token)
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false)

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `/usuarios/confirmar/${params.token}`
        const { data } = await clienteAxios(url)
        setCuentaConfirmada(true)
      } catch (error) {
        console.log(error)
      }
    }
    confirmarCuenta()
  }, [])
  console.log(params.token)
  return (
    <main className='bg-[#CCC4BB] h-screen p-10'>
      <div className='grid justify-center  justify-items-center gap-24'>
        <h2 className='text-white text-4xl uppercase'>
          Gracias por confirmar tu cuenta{' '}
        </h2>

        <div className='mt-20 md:mt-10 shadow-lg px-5 py-10 rounded-xl bg-white'>
          {cuentaConfirmada ? (
            <Link
              className='block text-center my-5 text-slate-500 uppercase text-sm'
              href='/login'>
              Inicia Sesión
            </Link>
          ) : (
            <div>
              <p className='text-center my-5 text-slate-500 uppercase text-sm'>
                Ingresaste un token inválido
              </p>
              <Link
                className='block text-center my-5 text-slate-500 uppercase text-sm'
                href='/'>
                Regresar al inicio
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
