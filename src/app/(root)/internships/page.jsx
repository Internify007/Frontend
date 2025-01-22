'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function InternshipsPage() {
  const [internships] = useState([
    {
      id: 1,
      title: 'Software Development Intern',
      company: 'TechCorp',
      logo: '/companies/techcorp.png',
      location: 'San Francisco, CA',
      type: 'Full-time',
      duration: '6 months',
      stipend: '$3000/month',
      posted: '2 days ago',
      skills: ['React', 'Node.js', 'TypeScript'],
      applicants: 75,
      deadline: '2024-01-31'
    },
    {
      id: 2,
      title: 'Data Science Intern',
      company: 'DataMinds AI',
      logo: '/companies/dataminds.png',
      location: 'Remote',
      type: 'Full-time',
      duration: '3 months',
      stipend: '$2500/month',
      posted: '1 week ago',
      skills: ['Python', 'Machine Learning', 'SQL'],
      applicants: 120,
      deadline: '2024-02-15'
    },
    {
      id: 3,
      title: 'UX/UI Design Intern',
      company: 'DesignHub',
      logo: '/companies/designhub.png',
      location: 'New York, NY',
      type: 'Part-time',
      duration: '4 months',
      stipend: '$2000/month',
      posted: '3 days ago',
      skills: ['Figma', 'Adobe XD', 'Prototyping'],
      applicants: 45,
      deadline: '2024-02-10'
    }
  ])

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Find Your Dream Internship
          </h1>
          <p className="mt-4 text-xl text-blue-100">
            Kickstart your career with top companies worldwide
          </p>
          
          {/* Search and Filter */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <input
              type="text"
              placeholder="Search by role, company, or skill..."
              className="w-full rounded-lg border-0 bg-white/10 px-6 py-3 text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <select className="w-full rounded-lg border-0 bg-white/10 px-6 py-3 text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50">
              <option value="">Location</option>
              <option value="remote">Remote</option>
              <option value="onsite">On-site</option>
              <option value="hybrid">Hybrid</option>
            </select>
            <select className="w-full rounded-lg border-0 bg-white/10 px-6 py-3 text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50">
              <option value="">Duration</option>
              <option value="1-3">1-3 months</option>
              <option value="3-6">3-6 months</option>
              <option value="6+">6+ months</option>
            </select>
          </div>
        </div>
      </section>

      {/* Internships List */}
      <section className="container mx-auto px-4 py-16">
        <div className="space-y-6">
          {internships.map((internship) => (
            <Link
              key={internship.id}
              href={`/internships/${internship.id}`}
              className="block transform rounded-xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start space-x-4">
                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={internship.logo}
                      alt={internship.company}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      {internship.title}
                    </h2>
                    <p className="mt-1 text-gray-600">{internship.company}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-3">
                      <span className="flex items-center text-sm text-gray-500">
                        <svg className="mr-1.5 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {internship.location}
                      </span>
                      <span className="flex items-center text-sm text-gray-500">
                        <svg className="mr-1.5 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {internship.duration}
                      </span>
                      <span className="flex items-center text-sm text-gray-500">
                        <svg className="mr-1.5 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {internship.stipend}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className={`rounded-full px-3 py-1 text-sm ${
                    internship.type === 'Full-time' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {internship.type}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    Posted {internship.posted} • {internship.applicants} applicants
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
