'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function MentorshipPage() {
  const [mentors] = useState([
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'Senior Software Engineer at Google',
      expertise: ['Web Development', 'System Design', 'Career Growth'],
      experience: '12 years',
      rating: 4.9,
      reviews: 128,
      image: '/mentors/sarah.jpg',
      availability: 'Available',
      price: '$120/hour'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Data Science Lead at Microsoft',
      expertise: ['Machine Learning', 'Python', 'Data Analysis'],
      experience: '8 years',
      rating: 4.8,
      reviews: 95,
      image: '/mentors/michael.jpg',
      availability: 'Limited',
      price: '$100/hour'
    },
    {
      id: 3,
      name: 'Emma Wilson',
      role: 'Product Manager at Amazon',
      expertise: ['Product Strategy', 'Agile', 'Leadership'],
      experience: '10 years',
      rating: 4.9,
      reviews: 156,
      image: '/mentors/emma.jpg',
      availability: 'Available',
      price: '$150/hour'
    }
  ])

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Find Your Perfect Mentor
          </h1>
          <p className="mt-4 text-xl text-blue-100">
            Connect with industry experts who can guide your career journey
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Search by expertise, industry, or role..."
              className="flex-1 rounded-lg border-0 bg-white/10 px-6 py-3 text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 hover:bg-blue-50">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mentors.map((mentor) => (
            <Link
              key={mentor.id}
              href={`/mentorship/${mentor.id}`}
              className="group rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg"
            >
              <div className="relative mb-4">
                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="object-cover"
                  />
                </div>
                <span className={`absolute right-2 top-2 rounded-full px-3 py-1 text-sm ${
                  mentor.availability === 'Available' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {mentor.availability}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900">{mentor.name}</h3>
              <p className="mt-1 text-sm text-gray-600">{mentor.role}</p>
              
              <div className="mt-4 flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="ml-1 text-sm font-medium">{mentor.rating}</span>
                <span className="mx-1 text-gray-400">•</span>
                <span className="text-sm text-gray-600">{mentor.reviews} reviews</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {mentor.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-900">
                  {mentor.price}
                </span>
                <span className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white group-hover:bg-blue-700">
                  Book Session
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
