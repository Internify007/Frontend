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
    // For now, we'll use mock data
    setInternship({
      id: internshipId,
      title: 'Software Development Intern',
      company: 'TechCorp',
      logo: '/companies/techcorp.png',
      location: 'San Francisco, CA',
      type: 'Full-time',
      duration: '6 months',
      stipend: '$3000/month',
      posted: '2 days ago',
      deadline: '2024-01-31',
      applicants: 75,
      about: 'TechCorp is seeking a talented Software Development Intern to join our innovative team. This is an excellent opportunity to gain hands-on experience in a fast-paced tech environment.',
      responsibilities: [
        'Develop and maintain web applications using React and Node.js',
        'Collaborate with senior developers on feature implementation',
        'Write clean, efficient, and well-documented code',
        'Participate in code reviews and team meetings',
        'Debug and fix software issues'
      ],
      requirements: [
        'Currently pursuing a degree in Computer Science or related field',
        'Strong understanding of JavaScript, HTML, and CSS',
        'Experience with React.js and Node.js',
        'Good problem-solving and analytical skills',
        'Excellent communication and teamwork abilities'
      ],
      perks: [
        'Competitive stipend',
        'Flexible work hours',
        'Mentorship from senior developers',
        'Modern tech stack',
        'Possibility of full-time conversion'
      ],
      skills: ['React', 'Node.js', 'TypeScript', 'Git', 'REST APIs'],
      companyInfo: {
        name: 'TechCorp',
        description: 'TechCorp is a leading technology company specializing in innovative software solutions. We create cutting-edge applications that solve real-world problems.',
        industry: 'Technology',
        size: '500-1000 employees',
        founded: '2015',
        website: 'https://techcorp.com'
      }
    })
  }, [internshipId])

  if (!internship) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

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
                    src={internship.logo}
                    alt={internship.company}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h1 className="text-3xl font-bold text-gray-900">
                    {internship.title}
                  </h1>
                  <p className="mt-1 text-xl text-gray-600">
                    {internship.company}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <span className="flex items-center text-gray-500">
                      <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {internship.location}
                    </span>
                    <span className="flex items-center text-gray-500">
                      <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {internship.duration}
                    </span>
                    <span className="flex items-center text-gray-500">
                      <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {internship.stipend}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="mt-8 rounded-xl bg-white p-6 shadow-md">
              <h2 className="text-xl font-semibold text-gray-900">About the Role</h2>
              <p className="mt-4 text-gray-600">{internship.about}</p>
            </div>

            {/* Responsibilities */}
            <div className="mt-8 rounded-xl bg-white p-6 shadow-md">
              <h2 className="text-xl font-semibold text-gray-900">
                Responsibilities
              </h2>
              <ul className="mt-4 space-y-3">
                {internship.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="mt-8 rounded-xl bg-white p-6 shadow-md">
              <h2 className="text-xl font-semibold text-gray-900">Requirements</h2>
              <ul className="mt-4 space-y-3">
                {internship.requirements.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div className="mt-8 rounded-xl bg-white p-6 shadow-md">
              <h2 className="text-xl font-semibold text-gray-900">
                Required Skills
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {internship.skills.map((skill, index) => (
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
                    Posted {internship.posted}
                  </span>
                  <div className="mt-2 text-sm text-gray-500">
                    {internship.applicants} applicants
                  </div>
                </div>
                <div className="mt-4">
                  <button className="w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700">
                    Apply Now
                  </button>
                </div>
                <div className="mt-4 text-center">
                  <span className="text-sm text-gray-500">
                    Application deadline: {internship.deadline}
                  </span>
                </div>
              </div>

              {/* Company Card */}
              <div className="rounded-xl bg-white p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900">
                  About {internship.companyInfo.name}
                </h3>
                <p className="mt-4 text-sm text-gray-600">
                  {internship.companyInfo.description}
                </p>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Industry</span>
                    <span className="text-gray-900">
                      {internship.companyInfo.industry}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Company size</span>
                    <span className="text-gray-900">
                      {internship.companyInfo.size}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Founded</span>
                    <span className="text-gray-900">
                      {internship.companyInfo.founded}
                    </span>
                  </div>
                </div>
                <a
                  href={internship.companyInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-center text-sm text-blue-600 hover:text-blue-800"
                >
                  Visit website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
