'use client'

import ResumeBuilder from '@/components/ResumeBuilder/ResumeBuilder'

export default function ResumeBuilderPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Resume Builder</h1>
        <p className="mt-2 text-gray-600">
          Create a professional resume with our AI-powered builder
        </p>
      </div>
      <ResumeBuilder />
    </div>
  )
}
