'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8081/api/blog-posts');
      const data = await response.json();
      setBlogs(data); // Assuming the data is an array of blog posts
    };
    fetchData();
  }, []);

  const renderContent = (content) => {
    return content.map((item, index) => {
      switch (item.type) {
    
        case 'coverimage':
          return (
            <img
              key={index}
              src={item.src}
              alt={item.alt}
              className="rounded-lg mt-4 w-full h-auto"
            />
          );
        case 'desc':
          return (
            <p key={index} className="text-gray-700 mt-2">
              {item.value.slice(0, 100)}...
            </p>
          );
        default:
          return null;
      }
    });
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold leading-tight">Tech Blog</h1>
          <p className="mt-4 text-xl text-blue-100">
            Insights, tutorials, and career advice from industry experts
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        {blogs.length === 0 ? (
          <p className="text-center text-gray-600">Loading blogs...</p>
        ) : (
          blogs.map((blog) => (
            <div
              key={blog.id}
              className="mb-8 rounded-lg bg-white p-6 shadow-md"
            >
              {/* Heading with Link */}
              
              <Link  key={blog.id}
              href={`/blogs/${blog.id}`}>
                <h2 className="text-2xl font-bold text-gray-900 cursor-pointer">
                  {blog.title}
                </h2>
              
              <img src='img2/img.png'/>

              {/* Content Rendering */}
              <div className="mt-6">
                {blog.description}
              </div>

              {/* Author Info */}
              <div className="mt-4 text-gray-600">
                <span>By {blog.author}</span> |{' '}
                <span>{new Date(blog.date).toDateString()}</span>
              </div>
              </Link>
            </div>
            
          ))
        )}
      </section>
    </main>
  );
}
