'use client'

import Link from 'next/link'
import { useState } from 'react'

const SignUpForm = () => {
  const [showPasswordRequirements, setShowPasswordRequirements] = useState(false)

  const togglePasswordRequirements = () => {
    setShowPasswordRequirements(!showPasswordRequirements)
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      {/* Back to Home Button */}
      <Link
        href="/"
        className="absolute left-8 top-8 flex items-center text-gray-600 hover:text-gray-900"
      >
        <svg
          className="mr-2 h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to Home
      </Link>

      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-center text-3xl font-bold text-gray-800">
          Internify
        </h1>
        <p className="mb-6 text-center text-lg text-gray-600">
          Create Your Account
        </p>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              className="mt-1 w-full rounded-md border px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Create a password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="mt-1 w-full rounded-md border px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={togglePasswordRequirements}
              className="mt-1 text-sm text-blue-600 hover:underline"
            >
              Show password requirements
              <span className={`ml-1 ${showPasswordRequirements ? "rotate-180" : ""}`}>
                ⬇️
              </span>
            </button>
            {showPasswordRequirements && (
              <ul className="mt-2 space-y-1 text-sm text-gray-500">
                <li>• At least 8 characters</li>
                <li>• One uppercase letter</li>
                <li>• One number or symbol</li>
              </ul>
            )}
          </div>
          <button
            type="submit"
            className="w-full cursor-not-allowed rounded-md bg-gray-300 py-2 text-sm font-semibold text-gray-500"
            disabled
          >
            Continue →
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/auth/signin"
            className="font-semibold text-blue-600 hover:underline"
          >
            Log In here
          </Link>
        </p>
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">or</span>
          </div>
        </div>
        <div className="space-y-3">
          <button className="flex w-full items-center justify-center rounded-md border border-gray-300 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
            <img
              src="https://img.icons8.com/color/24/null/google-logo.png"
              alt="Google Logo"
              className="mr-2 h-5 w-5"
            />
            Sign Up with Google
          </button>
          <button className="flex w-full items-center justify-center rounded-md border border-gray-300 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
            <img
              src="https://img.icons8.com/ios-filled/50/0077B5/linkedin.png"
              alt="LinkedIn Logo"
              className="mr-2 h-5 w-5"
            />
            Sign Up with LinkedIn
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUpForm
