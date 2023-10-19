import React from 'react'
import TopBar from '../components/TopBar'
import Sidebar from '../components/Sidebar'

const Page = () => {
  return (
    <main className='min-h-full'>
      <TopBar />
      <div className='flex'>
        <Sidebar />
        <div className='flex w-full'>
          <div className=' w-1/3 bg-[#CCC4BB]'>
            <div className='mb-24'>
              <h2 className='font-extrabold text-4xl pt-8 pl-7 mb-2 '>
                Refugios
              </h2>
              <p className='px-14 text-xl'>
                Encuentra un refugio cerca de tu zona, puedes solicitar hacer
                transito, adoptar un animal o colaborar con un donativo{' '}
              </p>
            </div>
            <div className='grid gap-5 pr-8 pl-4'></div>
          </div>
          <div className=' w-2/3 h-screen'></div>
        </div>
      </div>
    </main>
  )
}

export default Page
