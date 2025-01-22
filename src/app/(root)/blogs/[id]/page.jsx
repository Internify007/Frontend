'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function BlogDetailPage() {
  const params = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulated blog data fetch
    const blogData = {
      id: params.id,
      title: 'How to Ace Your Technical Interviews: A Complete Guide',
      content: `
        <p class="mb-6">Technical interviews can be daunting, but with the right preparation and mindset, you can significantly improve your chances of success. In this comprehensive guide, we'll cover everything you need to know to ace your next technical interview.</p>

        <h2 class="mb-4 text-2xl font-bold">Understanding the Interview Process</h2>
        <p class="mb-6">Most technical interviews follow a similar structure, typically including:</p>
        <ul class="mb-6 list-disc pl-6">
          <li class="mb-2">Coding challenges and algorithm problems</li>
          <li class="mb-2">System design discussions</li>
          <li class="mb-2">Behavioral questions</li>
          <li class="mb-2">Technical knowledge assessment</li>
        </ul>

        <h2 class="mb-4 text-2xl font-bold">Preparing for Coding Challenges</h2>
        <p class="mb-6">The coding portion of the interview is often the most challenging. Here's how to prepare:</p>
        <ol class="mb-6 list-decimal pl-6">
          <li class="mb-2">Practice common algorithms and data structures</li>
          <li class="mb-2">Solve problems on platforms like LeetCode and HackerRank</li>
          <li class="mb-2">Learn to explain your thought process clearly</li>
          <li class="mb-2">Practice writing clean, efficient code</li>
        </ol>

        <h2 class="mb-4 text-2xl font-bold">System Design Interview Tips</h2>
        <p class="mb-6">For system design questions, focus on:</p>
        <ul class="mb-6 list-disc pl-6">
          <li class="mb-2">Understanding requirements and constraints</li>
          <li class="mb-2">Starting with a high-level design</li>
          <li class="mb-2">Discussing trade-offs and alternatives</li>
          <li class="mb-2">Explaining your design decisions</li>
        </ul>

        <h2 class="mb-4 text-2xl font-bold">Behavioral Interview Preparation</h2>
        <p class="mb-6">Don't underestimate the importance of behavioral questions. Prepare stories about:</p>
        <ul class="mb-6 list-disc pl-6">
          <li class="mb-2">Challenging projects you've worked on</li>
          <li class="mb-2">Conflicts and their resolution</li>
          <li class="mb-2">Leadership experiences</li>
          <li class="mb-2">Technical decisions and their impact</li>
        </ul>
      `,
      image: '/blogs/tech-interview.jpg',
      author: {
        name: 'David Chen',
        avatar: '/authors/david.jpg',
        role: 'Senior Software Engineer',
        bio: 'David has over 8 years of experience in software engineering and has conducted hundreds of technical interviews at top tech companies.'
      },
      category: 'Career Growth',
      readTime: '8 min read',
      publishedAt: '2024-01-05',
      tags: ['Interview Tips', 'Career Advice', 'Technical Skills'],
      relatedPosts: [
        {
          id: 2,
          title: 'The Future of Web Development: Trends to Watch in 2024',
          image: '/blogs/web-dev-trends.jpg',
          category: 'Web Development'
        },
        {
          id: 3,
          title: 'Building Scalable Systems: Lessons from Big Tech',
          image: '/blogs/scalable-systems.jpg',
          category: 'System Design'
        }
      ]
    }

    setTimeout(() => {
      setBlog(blogData)
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

  if (!blog) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-900">Article not found</h1>
        <Link href="/blogs" className="mt-4 text-blue-600 hover:underline">
          Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] bg-gray-900">
        <img
          src={blog.image}
          alt={blog.title}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white">
                {blog.category}
              </span>
              <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
                {blog.title}
              </h1>
              <div className="mt-6 flex items-center justify-center">
                <img
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  className="h-12 w-12 rounded-full"
                />
                <div className="ml-3 text-left">
                  <p className="font-medium text-white">{blog.author.name}</p>
                  <p className="text-sm text-gray-300">
                    {blog.readTime} • {blog.publishedAt}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <article className="lg:col-span-2">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Share */}
            <div className="mt-8 flex items-center gap-4">
              <span className="font-medium text-gray-900">Share this article:</span>
              <button className="rounded-full bg-blue-100 p-2 text-blue-600 hover:bg-blue-200">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </button>
              <button className="rounded-full bg-blue-100 p-2 text-blue-600 hover:bg-blue-200">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button className="rounded-full bg-blue-100 p-2 text-blue-600 hover:bg-blue-200">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </button>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Author */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex items-center">
                <img
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  className="h-16 w-16 rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">
                    {blog.author.name}
                  </h3>
                  <p className="text-sm text-gray-600">{blog.author.role}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{blog.author.bio}</p>
              <button className="mt-4 w-full rounded-lg border border-blue-600 px-4 py-2 font-medium text-blue-600 hover:bg-blue-50">
                Follow
              </button>
            </div>

            {/* Related Posts */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">
                Related Articles
              </h3>
              <div className="mt-6 space-y-6">
                {blog.relatedPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blogs/${post.id}`}
                    className="group flex gap-4"
                  >
                    <div className="aspect-video w-24 flex-shrink-0 overflow-hidden rounded-lg">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-blue-600">
                        {post.category}
                      </span>
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                        {post.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="rounded-xl bg-blue-600 p-6 text-white">
              <h3 className="text-lg font-semibold">Subscribe to our newsletter</h3>
              <p className="mt-2 text-blue-100">
                Get the latest articles and insights delivered to your inbox
              </p>
              <div className="mt-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border-0 bg-white/10 px-4 py-2 text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="mt-2 w-full rounded-lg bg-white px-4 py-2 font-medium text-blue-600 hover:bg-blue-50">
                  Subscribe
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
