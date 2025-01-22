import './globals.css'

import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Internify - Your Career Growth Platform',
  description: 'Find internships, build your resume, and practice interviews with AI-powered tools.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
    </html>
  )
}
