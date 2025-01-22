'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function BlogsPage() {
  const [blogs] = useState([
    {
      id: 1,
      title: 'How to Ace Your Technical Interviews: A Complete Guide',
      excerpt: 'Master the art of technical interviews with our comprehensive guide covering algorithms, system design, and behavioral questions.',
      image: '/blogs/tech-interview.jpg',
      author: {
        name: 'David Chen',
        avatar: '/authors/david.jpg',
        role: 'Senior Software Engineer'
      },
      category: 'Career Growth',
      readTime: '8 min read',
      publishedAt: '2024-01-05',
      tags: ['Interview Tips', 'Career Advice', 'Technical Skills']
    },
    {
      id: 2,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Explore the latest web development trends including AI integration, WebAssembly, and the rise of edge computing.',
      image: '/blogs/web-dev-trends.jpg',
      author: {
        name: 'Sarah Miller',
        avatar: '/authors/sarah.jpg',
        role: 'Tech Lead'
      },
      category: 'Web Development',
      readTime: '6 min read',
      publishedAt: '2024-01-03',
      tags: ['Web Development', 'Technology Trends', 'Innovation']
    },
    {
      id: 3,
      title: 'Building Scalable Systems: Lessons from Big Tech',
      excerpt: 'Learn the architectural principles and best practices used by tech giants to build highly scalable systems.',
      image: '/blogs/scalable-systems.jpg',
      author: {
        name: 'Alex Kumar',
        avatar: '/authors/alex.jpg',
        role: 'Systems Architect'
      },
      category: 'System Design',
      readTime: '10 min read',
      publishedAt: '2024-01-01',
      tags: ['System Design', 'Architecture', 'Scalability']
    }
  ])

  const categories = [
    'All',
    'Career Growth',
    'Web Development',
    'System Design',
    'Machine Learning',
    'Mobile Development',
    'DevOps',
    'Cybersecurity'
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Tech Blog
            </h1>
            <p className="mt-4 text-xl text-blue-100">
              Insights, tutorials, and career advice from industry experts
            </p>
          </div>

          {/* Search */}
          <div className="mx-auto mt-8 max-w-xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
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

      {/* Featured Article */}
      <section className="container mx-auto px-4 py-12">
        <Link
          href={`/blogs/${blogs[0].id}`}
          className="group block overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative aspect-video md:aspect-auto">
              <img
                src={blogs[0].image}
                alt={blogs[0].title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="p-8">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                {blogs[0].category}
              </span>
              <h2 className="mt-4 text-2xl font-bold text-gray-900 group-hover:text-blue-600">
                {blogs[0].title}
              </h2>
              <p className="mt-4 text-gray-600">{blogs[0].excerpt}</p>
              <div className="mt-6 flex items-center">
                <img
                  src={blogs[0].author.avatar}
                  alt={blogs[0].author.name}
                  className="h-10 w-10 rounded-full"
                />
                <div className="ml-3">
                  <p className="font-medium text-gray-900">
                    {blogs[0].author.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {blogs[0].readTime} • {blogs[0].publishedAt}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Article Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(1).map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.id}`}
              className="group rounded-xl bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                  {blog.category}
                </span>
                <h3 className="mt-4 text-xl font-bold text-gray-900 group-hover:text-blue-600">
                  {blog.title}
                </h3>
                <p className="mt-2 text-gray-600">{blog.excerpt}</p>
              </div>
              <div className="mt-6 flex items-center">
                <img
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  className="h-10 w-10 rounded-full"
                />
                <div className="ml-3">
                  <p className="font-medium text-gray-900">{blog.author.name}</p>
                  <p className="text-sm text-gray-600">
                    {blog.readTime} • {blog.publishedAt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white">
              Stay up to date with the latest tech insights
            </h2>
            <p className="mt-4 text-blue-100">
              Get weekly updates on technology trends, career tips, and industry news
            </p>
            <div className="mt-8 flex items-center justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full max-w-sm rounded-l-lg border-0 px-6 py-3 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="rounded-r-lg bg-gray-900 px-6 py-3 font-semibold text-white hover:bg-gray-800">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
