'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function HomePage() {
  const [featuredInternships] = useState([
    {
      id: 1,
      title: 'Software Engineering Intern',
      company: 'Tech Corp',
      location: 'San Francisco, CA',
      type: 'Full-time',
      posted: '2d ago'
    },
    {
      id: 2,
      title: 'Data Science Intern',
      company: 'AI Solutions',
      location: 'New York, NY',
      type: 'Part-time',
      posted: '3d ago'
    },
  ])

  const [featuredCourses] = useState([
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      instructor: 'Jane Smith',
      rating: 4.8,
      students: 12000,
      price: 49.99
    },
    {
      id: 2,
      title: 'Machine Learning A-Z',
      instructor: 'John Doe',
      rating: 4.9,
      students: 15000,
      price: 59.99
    },
  ])

  const [blogPosts] = useState([
    {
      id: 1,
      title: 'How to Ace Your Technical Interview',
      author: 'Sarah Johnson',
      date: 'Jan 5, 2024',
      readTime: '5 min read',
      category: 'Career Tips',
      image: '/blog-1.jpg'
    },
    {
      id: 2,
      title: 'Top Skills for Data Science in 2024',
      author: 'Mike Chen',
      date: 'Jan 3, 2024',
      readTime: '7 min read',
      category: 'Tech Trends',
      image: '/blog-2.jpg'
    },
    {
      id: 3,
      title: 'Building Your Personal Brand',
      author: 'Emma Wilson',
      date: 'Jan 1, 2024',
      readTime: '4 min read',
      category: 'Personal Growth',
      image: '/blog-3.jpg'
    }
  ])

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Grab Your Internship Now with Us!
              </h1>
              <p className="text-lg text-blue-100">
                Build your career with AI-powered tools and discover amazing internship opportunities.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="/internships"
                  className="rounded-full bg-white px-6 py-3 text-blue-600 hover:bg-blue-50"
                >
                  Find Internships
                </Link>
                <Link
                  href="/tools/resume-builder"
                  className="rounded-full border border-white px-6 py-3 text-white hover:bg-white/10"
                >
                  Build Resume
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="/hero-image.svg"
                alt="Career Growth Illustration"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">Our Tools</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Resume Builder Card */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-12 w-12 rounded-full bg-blue-100 p-3">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Resume Builder</h3>
              <p className="mb-4 text-gray-600">Create professional resumes with our AI-powered builder. Stand out from the crowd!</p>
              <Link
                href="/tools/resume-builder"
                className="text-blue-600 hover:text-blue-700"
              >
                Build Your Resume →
              </Link>
            </div>

            {/* Mock Interview Card */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 h-12 w-12 rounded-full bg-purple-100 p-3">
                <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">AI Mock Interview</h3>
              <p className="mb-4 text-gray-600">Practice interviews with our AI interviewer. Get feedback and improve your skills!</p>
              <Link
                href="/tools/mock-interview"
                className="text-purple-600 hover:text-purple-700"
              >
                Start Practice →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Internships */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Featured Internships</h2>
            <Link
              href="/internships"
              className="text-blue-600 hover:text-blue-700"
            >
              View All →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredInternships.map((internship) => (
              <div
                key={internship.id}
                className="rounded-lg border border-gray-200 bg-white p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-semibold">{internship.title}</h3>
                  <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-600">
                    {internship.type}
                  </span>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>{internship.company}</p>
                  <p>{internship.location}</p>
                  <p>Posted {internship.posted}</p>
                </div>
                <Link
                  href={`/internships/${internship.id}`}
                  className="mt-4 block text-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Featured Courses</h2>
            <Link
              href="/courses"
              className="text-blue-600 hover:text-blue-700"
            >
              View All →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map((course) => (
              <div
                key={course.id}
                className="rounded-lg border border-gray-200 bg-white p-6"
              >
                <img
                  src={`/course-${course.id}.jpg`}
                  alt={course.title}
                  className="mb-4 h-48 w-full rounded-lg object-cover"
                />
                <h3 className="mb-2 font-semibold">{course.title}</h3>
                <p className="text-sm text-gray-600">{course.instructor}</p>
                <div className="mb-4 mt-2 flex items-center space-x-2">
                  <span className="text-yellow-400">★</span>
                  <span>{course.rating}</span>
                  <span className="text-gray-400">({course.students} students)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">${course.price}</span>
                  <Link
                    href={`/courses/${course.id}`}
                    className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Latest Blog Posts</h2>
            <Link
              href="/blogs"
              className="text-blue-600 hover:text-blue-700"
            >
              View All →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <div className="mb-2 flex items-center space-x-2 text-sm text-gray-500">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    <Link href={`/blogs/${post.id}`} className="hover:text-blue-600">
                      {post.title}
                    </Link>
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>By {post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
