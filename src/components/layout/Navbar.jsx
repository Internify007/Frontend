'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import UserDropdown from './UserDropdown'

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const pathname = usePathname()
  const { data: session, status } = useSession()
  const isLoading = status === 'loading'

  const isActive = (path) => pathname === path

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/assests/Internify.png"
              alt="Internify Logo"
              className="h-10 w-auto"
              width={400}
              height={100}
            />
          </Link>

          {/* Search Bar */}
          <div className="hidden flex-1 items-center justify-center px-8 md:flex">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search jobs, internships, blogs..."
                className="w-full rounded-full border border-gray-300 bg-gray-50 py-2 pl-4 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden items-center space-x-6 md:flex">
            <Link
              href="/"
              className={`text-sm font-medium ${
                isActive('/') ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Home
            </Link>
            <Link
              href="/jobs"
              className={`text-sm font-medium ${
                isActive('/jobs') ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Jobs
            </Link>
            <Link
              href="/internships"
              className={`text-sm font-medium ${
                isActive('/internships') ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Internships
            </Link>
            <Link
              href="/blogs"
              className={`text-sm font-medium ${
                isActive('/blogs') ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Blogs
            </Link>

            {/* Authentication */}
            {isLoading ? (
              // Loading skeleton
              <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200" />
            ) : session ? (
              // User is logged in
              <UserDropdown user={session.user} />
            ) : (
              // User is not logged in
              <div className="flex items-center space-x-4">
                <Link
                  href="/auth/signin"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900"
                >
                  Sign in
                </Link>
                <Link
                  href="/auth/signup"
                  className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isDropdownOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isDropdownOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                href="/"
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  isActive('/') ? 'bg-gray-50 text-blue-600' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                Home
              </Link>
              <Link
                href="/jobs"
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  isActive('/jobs') ? 'bg-gray-50 text-blue-600' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                Jobs
              </Link>
              <Link
                href="/internships"
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  isActive('/internships')
                    ? 'bg-gray-50 text-blue-600'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                Internships
              </Link>
              <Link
                href="/blogs"
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  isActive('/blogs') ? 'bg-gray-50 text-blue-600' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                Blogs
              </Link>

              {/* Mobile Authentication */}
              {!session && (
                <>
                  <Link
                    href="/auth/signin"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="block rounded-md bg-blue-600 px-3 py-2 text-base font-medium text-white hover:bg-blue-700"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
