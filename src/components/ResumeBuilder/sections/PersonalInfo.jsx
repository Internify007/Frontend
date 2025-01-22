'use client'

export default function PersonalInfo({ data, onChange, onAIGenerate }) {
  const handleChange = (field, value) => {
    onChange({
      ...data,
      [field]: value
    })
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
        <button
          onClick={onAIGenerate}
          className="flex items-center rounded-md bg-purple-100 px-3 py-1.5 text-sm font-medium text-purple-700 hover:bg-purple-200"
        >
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          AI Generate
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Name */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="John Doe"
            className="w-full rounded-md border border-gray-300 p-2 text-sm"
          />
        </div>

        {/* Job Title */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Job Title
          </label>
          <input
            type="text"
            value={data.jobTitle}
            onChange={(e) => handleChange('jobTitle', e.target.value)}
            placeholder="Software Engineer"
            className="w-full rounded-md border border-gray-300 p-2 text-sm"
          />
        </div>

        {/* Location */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            value={data.location}
            onChange={(e) => handleChange('location', e.target.value)}
            placeholder="New York, NY"
            className="w-full rounded-md border border-gray-300 p-2 text-sm"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="(555) 123-4567"
            className="w-full rounded-md border border-gray-300 p-2 text-sm"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="john@example.com"
            className="w-full rounded-md border border-gray-300 p-2 text-sm"
          />
        </div>

        {/* Website */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Website
          </label>
          <input
            type="url"
            value={data.website}
            onChange={(e) => handleChange('website', e.target.value)}
            placeholder="https://portfolio.com"
            className="w-full rounded-md border border-gray-300 p-2 text-sm"
          />
        </div>
      </div>
    </div>
  )
}
