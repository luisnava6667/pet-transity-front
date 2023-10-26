'use client'

import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../assets/logo.svg'
import mercado from '../../assets/mercadoPago.png'
import { useSession } from 'next-auth/react'

const Donar = () => {
  const { data } = useSession()

  return (
    <main className='bg-[#CCC4BB] h-screen'>
      <div className='h-full pt-10'>
        <div className='grid justify-items-center mb-10'>
          <Link className='block text-teal-600 md:mb-5' href='/'>
            <Image className='' width={427} height={90} alt='logo' src={logo} />
          </Link>
          <h2 className='text-center text-4xl text-white mt-5'>
            Hacé tus donaciones a través de
          </h2>
          <Image
            className='mt-5  md:my-10'
            width={100}
            height={100}
            alt='logo'
            src={mercado}
          />
        </div>
        <div className='grid gap-5 justify-items-center  md:items-center md:flex md:px-12 mb-10 md:mb-20'>
          <Link
            href='https://mpago.la/2BPmUos'
            target='_blank'
            className='w-1/2 md:w-1/4 bg-white rounded-lg grid text-center  h-20 items-center hover:animate-pulse font-bold text-xl'>
            Donar $1000
          </Link>
          <Link
            href='https://mpago.la/1nAP6hd'
            target='_blank'
            className='w-1/2 md:w-1/4 bg-white rounded-lg grid text-center h-20 items-center hover:animate-pulse font-bold text-xl '>
            Donar $2000
          </Link>

          <Link
            href='https://mpago.la/1imuKqt'
            target='_blank'
            className='w-1/2 md:w-1/4 bg-white rounded-lg grid text-center h-20 items-center hover:animate-pulse font-bold text-xl '>
            Donar $5000
          </Link>
          <Link
            href='https://link.mercadopago.com.ar/pettransity'
            target='_blank'
            className='w-1/2 md:w-1/4 bg-white rounded-lg grid text-center h-20 items-center hover:animate-pulse font-bold text-xl'>
            Donacion Libre
          </Link>
        </div>
        {/* Volvemos al home */}
        <div className='flex justify-center'>
          <Link
            href={data?.user.token ? '/dashboard' : '/'}
            className='flex w-1/2 md:w-1/3 h-14 text-2xl items-center justify-center rounded-md bg-[#E59D1C] px-3 py-1.5 text-white font-semibold leading-6 shadow-sm '>
            {data?.user.token ? 'Dashboard' : 'Home'}
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Donar
