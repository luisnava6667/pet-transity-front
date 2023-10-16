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
          <Link href='/login'>Login</Link>
          <Link href='/donar'>Donar</Link>
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
