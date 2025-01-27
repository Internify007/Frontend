'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function InternshipDetailPage() {
  const params = useParams()
  const internshipId = params?.id

  const [internship, setInternship] = useState(null)

  useEffect(() => {
    // In a real app, you would fetch internship data from an API
    // For now, we'll use mock data, you can replace it with an API call
    const fetchData = async()=>{
      console.log("Hello:- ",internshipId);
      const response =await fetch(`http://localhost:8081/api/jobs/${internshipId}`)
      const data = await response.json();
      console.log("Internship Data:- ",data);
      setInternship(data);
    }
    fetchData();
  }, [internshipId])


  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/internships"
            className="flex items-center text-gray-600 hover:text-gray-900"
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
            Back to Internships
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Main Content */}
          <div className="md:col-span-2">
            {/* Header */}
            <div className="rounded-xl bg-white p-6 shadow-md">
              <div className="flex items-start space-x-6">
                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={`/companies/${internship?.company.toLowerCase()}.png`}  // Assuming the logo is named after the company
                    alt={internship?.company}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h1 className="text-3xl font-bold text-gray-900">
                    {internship?.title}
                  </h1>
                  <p className="mt-1 text-xl text-gray-600">
                    {internship?.company}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <span className="flex items-center text-gray-500">
                      <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {internship?.location}
                    </span>
                    <span className="flex items-center text-gray-500">
                      <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {internship?.duration} months
                    </span>
                    <span className="flex items-center text-gray-500">
                      <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      ${internship?.salary}/month
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="mt-8 rounded-xl bg-white p-6 shadow-md">
              <h2 className="text-xl font-semibold text-gray-900">About the Role</h2>
              <p className="mt-4 text-gray-600">{internship?.description}</p>
            </div>

            {/* Skills */}
            <div className="mt-8 rounded-xl bg-white p-6 shadow-md">
              <h2 className="text-xl font-semibold text-gray-900">
                Required Skills
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {internship?.skills && internship?.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Apply Card */}
              <div className="rounded-xl bg-white p-6 shadow-md">
                <div className="text-center">
                  <span className="text-sm text-gray-500">
                    Posted {internship?.posted} days ago
                  </span>
                </div>
                <div className="mt-4">
                  <button className="w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
