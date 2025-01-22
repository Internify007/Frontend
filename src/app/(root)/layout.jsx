'use client'

import Navbar from '@/components/layout/Navbar'
import { SessionProvider } from 'next-auth/react'

export default function RootLayout({ children }) {
  return (
    <>
      <SessionProvider>
        <Navbar />
        {children}
      </SessionProvider>
    </>
  )
}
