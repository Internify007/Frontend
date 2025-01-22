'use client'

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from 'react-hot-toast';

const LoginForm = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const res = await signIn("credentials", {
      identifier,
      password,
      redirect: false, // Important for handling errors
    });

    if (res?.error) {
      setError(res.error);
    } else {
      router.push("/"); // Redirect after successful login
      toast.success('Welcome back!', {
        duration: 4000, // 3 seconds
        position: 'top-right',
      });
    }
  };



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
          Welcome back!
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
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
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="mt-1 w-full rounded-md border px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-md border px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="text-right">
            <Link
              href="/auth/reset"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot my password
            </Link>
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>

        {/* Error message (if any) */}
        {error && <p style={{ color: "red" }}>{error}</p>}
        
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
            Sign In with Google
          </button>
          <button className="flex w-full items-center justify-center rounded-md border border-gray-300 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
            <img
              src="https://img.icons8.com/ios-filled/50/0077B5/linkedin.png"
              alt="LinkedIn Logo"
              className="mr-2 h-5 w-5"
            />
            Sign In with LinkedIn
          </button>
        </div>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            href="/auth/signup"
            className="font-semibold text-blue-600 hover:underline"
          >
            Create a free account
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginForm
