'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function MentorshipDetailPage() {
  const params = useParams()
  const mentorId = params?.id

  const [mentor, setMentor] = useState(null)

  useEffect(() => {
    // In a real app, you would fetch mentor data from an API
    // For now, we'll use mock data
    setMentor({
      id: mentorId,
      name: 'Dr. Sarah Johnson',
      role: 'Senior Software Engineer at Google',
      expertise: ['Web Development', 'System Design', 'Career Growth'],
      experience: '12 years',
      rating: 4.9,
      reviews: 128,
      image: '/mentors/sarah.jpg',
      availability: 'Available',
      price: '$120/hour',
      about: 'With over 12 years of experience in software engineering, I specialize in helping developers master system design and advance their careers. My approach combines practical coding exercises with career strategy sessions.',
      achievements: [
        'Led engineering teams at Google and Amazon',
        'Published author on system design',
        'Mentored 100+ engineers to senior positions',
        'Speaker at major tech conferences'
      ],
      availableSlots: [
        { id: 1, date: '2024-01-15', time: '10:00 AM', duration: '1 hour' },
        { id: 2, date: '2024-01-15', time: '2:00 PM', duration: '1 hour' },
        { id: 3, date: '2024-01-16', time: '11:00 AM', duration: '1 hour' },
        { id: 4, date: '2024-01-16', time: '3:00 PM', duration: '1 hour' }
      ]
    })
  }, [mentorId])

  if (!mentor) {
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
            href="/mentorship"
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
            Back to Mentors
          </Link>
        </div>
      </nav>

      {/* Mentor Profile */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Left Column - Profile Info */}
          <div className="md:col-span-2">
            <div className="rounded-xl bg-white p-6 shadow-md">
              <div className="flex items-start space-x-6">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="h-32 w-32 rounded-lg object-cover"
                />
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{mentor.name}</h1>
                  <p className="mt-1 text-lg text-gray-600">{mentor.role}</p>
                  <div className="mt-4 flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 font-medium">{mentor.rating}</span>
                    <span className="mx-1 text-gray-400">•</span>
                    <span className="text-gray-600">{mentor.reviews} reviews</span>
                    <span className="mx-1 text-gray-400">•</span>
                    <span className="text-gray-600">{mentor.experience} experience</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900">About</h2>
                <p className="mt-4 text-gray-600">{mentor.about}</p>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900">Expertise</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {mentor.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900">Achievements</h2>
                <ul className="mt-4 space-y-2">
                  {mentor.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg
                        className="mr-2 h-5 w-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Booking */}
          <div className="md:col-span-1">
            <div className="sticky top-8">
              <div className="rounded-xl bg-white p-6 shadow-md">
                <h2 className="text-xl font-semibold text-gray-900">
                  Book a Session
                </h2>
                <p className="mt-2 text-gray-600">
                  {mentor.price} / session
                </p>
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700">
                    Select a time slot
                  </label>
                  <div className="mt-2 space-y-2">
                    {mentor.availableSlots.map((slot) => (
                      <button
                        key={slot.id}
                        className="w-full rounded-lg border border-gray-200 p-3 text-left hover:border-blue-500 hover:bg-blue-50"
                      >
                        <div className="font-medium text-gray-900">
                          {slot.date}
                        </div>
                        <div className="text-sm text-gray-600">
                          {slot.time} • {slot.duration}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
                <button className="mt-6 w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
