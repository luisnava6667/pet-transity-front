import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/logo.svg'

export default function Home() {
  return (
    <main className='bg-[#CCC4BB] h-screen'>
      <div className='flex flex-1 items-center justify-end md:justify-between'>
        <Link className='block text-teal-600' href='/'>
          <Image className='' width={427} height={90} alt='logo' src={logo} />
        </Link>
        <div className='flex items-center gap-4'>
          <div className='sm:flex sm:gap-4 px-auto'>
            <Link className={``} href=''>
              <Image className='' width={50} height={50} alt='logo' src={``} />
              {``}
            </Link>
          </div>

          <button className='block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden'>
            <span className='sr-only'>Toggle menu</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <div className='flex flex-col items-center justify-center h-full'>
          <h1 className='text-4xl font-bold text-center text-gray-600'>
            Welcome to PetTransity
          </h1>
          <p className='text-center text-gray-600'>
            A pet transition app for pet owners
          </p>
          <div>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
