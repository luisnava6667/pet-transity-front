import Head from 'next/head'
import { PetProvider } from './context/PetContext'
import { RefugioProvider } from './context/RefugioContext'
import './globals.css'
import { Inter } from 'next/font/google'
import SessionAuthProvider from './context/SessionAuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PetTransity',
  description: 'Animal transition app for pet owners'
}

export default function RootLayout({ children }) {
  return (
   
      <SessionAuthProvider>
        <RefugioProvider>
          <PetProvider>
            <html lang='en'>
              <Head>
                <script
                  async
                  defer
                  src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
                />
              </Head>
              <body className={inter.className}>{children}</body>
            </html>
          </PetProvider>
        </RefugioProvider>
      </SessionAuthProvider>
   
  )
}
