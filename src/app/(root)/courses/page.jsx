'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function CoursesPage() {
  const [courses] = useState([
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      instructor: 'Sarah Johnson',
      image: '/courses/web-dev.jpg',
      rating: 4.8,
      reviews: 1250,
      students: 15000,
      level: 'Beginner',
      duration: '12 weeks',
      lectures: 150,
      price: 49.99,
      tags: ['HTML', 'CSS', 'JavaScript', 'React'],
      category: 'Web Development',
      updatedAt: 'December 2023'
    },
    {
      id: 2,
      title: 'Machine Learning & Data Science',
      instructor: 'Michael Chen',
      image: '/courses/ml.jpg',
      rating: 4.9,
      reviews: 980,
      students: 12000,
      level: 'Intermediate',
      duration: '10 weeks',
      lectures: 120,
      price: 59.99,
      tags: ['Python', 'TensorFlow', 'Data Analysis'],
      category: 'Data Science',
      updatedAt: 'January 2024'
    },
    {
      id: 3,
      title: 'UI/UX Design Masterclass',
      instructor: 'Emma Wilson',
      image: '/courses/uiux.jpg',
      rating: 4.7,
      reviews: 850,
      students: 9000,
      level: 'All Levels',
      duration: '8 weeks',
      lectures: 90,
      price: 44.99,
      tags: ['Figma', 'Design Systems', 'Prototyping'],
      category: 'Design',
      updatedAt: 'January 2024'
    }
  ])

  const categories = [
    'All Categories',
    'Web Development',
    'Data Science',
    'Design',
    'Mobile Development',
    'Cloud Computing',
    'DevOps'
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Expand Your Skills with Our Courses
          </h1>
          <p className="mt-4 text-xl text-blue-100">
            Learn from industry experts and advance your career
          </p>
          
          {/* Search */}
          <div className="mt-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for courses..."
                className="w-full rounded-lg border-0 bg-white/10 px-6 py-4 text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-white px-6 py-2 font-semibold text-blue-600 hover:bg-blue-50">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b bg-white">
        <div className="container mx-auto overflow-x-auto px-4 py-4">
          <div className="flex space-x-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium ${
                  index === 0
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="group rounded-xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Course Image */}
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-t-xl">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-900 backdrop-blur-sm">
                  {course.category}
                </span>
              </div>

              {/* Course Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {course.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  by {course.instructor}
                </p>

                <div className="mt-4 flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1 font-medium">{course.rating}</span>
                  <span className="mx-1 text-gray-400">•</span>
                  <span className="text-sm text-gray-600">
                    {course.reviews.toLocaleString()} reviews
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                  <span className="flex items-center">
                    <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.duration}
                  </span>
                  <span className="flex items-center">
                    <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    {course.lectures} lectures
                  </span>
                  <span className="flex items-center">
                    <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {course.students.toLocaleString()}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {course.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    ${course.price}
                  </span>
                  <span className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white group-hover:bg-blue-700">
                    Enroll Now
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
