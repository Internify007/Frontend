'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function BlogDetailPage() {
  const params = useParams();
  const blogId = params.id;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8081/api/blog-posts/${blogId}`);
      const data = await response.json();
      console.log("Blog Data of id: ", blogId, " : ", data);
      setBlog(data);
      setLoading(false);  // Ensure loading state is set to false once the data is fetched
    };
    fetchData();
  }, [blogId]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-blue-600"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-900">Article not found</h1>
        <Link href="/blogs" className="mt-4 text-blue-600 hover:underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  const renderContent = (content) => {
    return content.map((item, index) => {
      switch (item.type) {
        case 'heading1':
          return (
            <h1 key={index} className="text-3xl font-bold mt-6">
              {item.value}
            </h1>
          );
        case 'coverimage':
          return (
            <img
              key={index}
              src={item.src}
              alt={item.alt}
              className="rounded-lg mt-4 w-full h-auto"
            />
          );
        case 'paragraph':
          return (
            <p key={index} className="text-gray-700 mt-2">
              {item.value}
            </p>
          );
        default:
          return null;
      }
    });
  };


    return (
      <main className="min-h-screen bg-gray-50">

  
        <section className="container mx-auto px-4 py-12">
         
              <div
                key={blog.id}
                className="mb-8 rounded-lg bg-white p-6 shadow-md"
              >
                {/* Content Rendering */}
                <div className="mt-6">
                  {renderContent(blog.content)}
                </div>
  
                {/* Author Info */}
                <div className="mt-4 text-gray-600">
                  <span>By {blog.author}</span> |{' '}
                  <span>{new Date(blog.date).toDateString()}</span>
                </div>
              </div>
            
        </section>
      </main>
  );
}
