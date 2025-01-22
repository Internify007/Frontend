'use client'

import Link from 'next/link'

const ResetForm = () => {
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
        <h1 className="mb-4 text-center text-2xl font-bold text-gray-800">
          Reset Your Password
        </h1>
        <p className="mb-6 text-center text-sm text-gray-600">
          To be emailed a link to reset your password, please enter your email address.
        </p>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="sr-only"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="e.g. john.smith@example.com"
              className="w-full rounded-md border px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Reset password
          </button>
          <div className="text-center">
            <Link
              href="/auth/signin"
              className="text-sm text-blue-600 hover:underline"
            >
              Back to Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ResetForm
