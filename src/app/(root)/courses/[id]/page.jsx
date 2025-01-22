'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function CourseDetailPage() {
  const params = useParams()
  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulated course data fetch
    const courseData = {
      id: params.id,
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
      category: 'Web Development',
      description: 'Master web development from the ground up. This comprehensive bootcamp covers everything from HTML basics to advanced React applications.',
      updatedAt: 'December 2023',
      whatYouWillLearn: [
        'Build responsive websites using HTML5, CSS3, and JavaScript',
        'Master modern frontend frameworks like React',
        'Develop backend APIs using Node.js and Express',
        'Work with databases including MongoDB and SQL',
        'Deploy full-stack applications to the cloud',
        'Implement authentication and authorization',
        'Write clean, maintainable code following best practices',
        'Create real-world projects for your portfolio'
      ],
      requirements: [
        'Basic computer knowledge',
        'No prior programming experience required',
        'Willingness to learn and practice regularly',
        'Computer with internet connection'
      ],
      syllabus: [
        {
          title: 'Introduction to Web Development',
          lessons: [
            'Understanding the Internet and Web',
            'Setting up your development environment',
            'Introduction to HTML5'
          ]
        },
        {
          title: 'CSS Fundamentals',
          lessons: [
            'CSS Selectors and Properties',
            'Box Model and Layout',
            'Flexbox and Grid Systems'
          ]
        },
        {
          title: 'JavaScript Essentials',
          lessons: [
            'Variables and Data Types',
            'Control Flow and Functions',
            'DOM Manipulation'
          ]
        }
      ],
      instructor: {
        name: 'Sarah Johnson',
        title: 'Senior Web Developer',
        company: 'Tech Solutions Inc.',
        experience: '10+ years',
        bio: 'Sarah is a passionate web developer with over a decade of experience in building scalable web applications. She has worked with Fortune 500 companies and has trained hundreds of developers throughout her career.',
        expertise: ['Frontend Development', 'React', 'Node.js', 'Web Performance']
      }
    }

    setTimeout(() => {
      setCourse(courseData)
      setLoading(false)
    }, 500)
  }, [params.id])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-blue-600"></div>
      </div>
    )
  }

  if (!course) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-900">Course not found</h1>
        <Link href="/courses" className="mt-4 text-blue-600 hover:underline">
          Back to Courses
        </Link>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                {course.title}
              </h1>
              <p className="mt-4 text-xl text-blue-100">{course.description}</p>
              
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1 font-medium">{course.rating}</span>
                  <span className="ml-1 text-blue-100">
                    ({course.reviews.toLocaleString()} reviews)
                  </span>
                </div>
                <div className="flex items-center">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {course.duration}
                </div>
                <div className="flex items-center">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {course.students.toLocaleString()} students
                </div>
                <div className="flex items-center">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  {course.lectures} lectures
                </div>
              </div>

              <div className="mt-8">
                <button className="rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 shadow-lg transition-all hover:bg-blue-50">
                  Enroll Now for ${course.price}
                </button>
              </div>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-xl">
              <img
                src={course.image}
                alt={course.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* What You'll Learn */}
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">
                What You'll Learn
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {course.whatYouWillLearn.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <svg
                      className="mr-3 h-5 w-5 flex-shrink-0 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Content */}
            <div className="mt-8 rounded-xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">
                Course Content
              </h2>
              <div className="mt-6 space-y-4">
                {course.syllabus.map((section, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-gray-200 p-4"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      {section.title}
                    </h3>
                    <div className="mt-4 space-y-2">
                      {section.lessons.map((lesson, lessonIndex) => (
                        <div
                          key={lessonIndex}
                          className="flex items-center text-gray-600"
                        >
                          <svg
                            className="mr-3 h-5 w-5 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {lesson}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="mt-8 rounded-xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">Requirements</h2>
              <ul className="mt-6 list-inside list-disc space-y-3 text-gray-600">
                {course.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Instructor */}
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">
                Your Instructor
              </h2>
              <div className="mt-6">
                <div className="flex items-center">
                  <img
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                      course.instructor.name
                    )}&background=random`}
                    alt={course.instructor.name}
                    className="h-16 w-16 rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">
                      {course.instructor.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {course.instructor.title} at {course.instructor.company}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-600">{course.instructor.bio}</p>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900">Expertise</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {course.instructor.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
