import { AuthProvider } from './context/AuthContext'
import { PetProvider } from './context/PetContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PetTransity',
  description: 'Animal transition app for pet owners'
}

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <PetProvider>
        <html lang='en'>
          <body className={inter.className}>{children}</body>
        </html>
      </PetProvider>
    </AuthProvider>
  )
}
