'use client'

export default function Education({ data, onChange, onAIGenerate }) {
  const handleAdd = () => {
    onChange([
      ...data,
      {
        degree: '',
        school: '',
        location: '',
        startDate: '',
        endDate: '',
        current: false,
        description: ''
      }
    ])
  }

  const handleUpdate = (index, field, value) => {
    const newData = [...data]
    newData[index] = {
      ...newData[index],
      [field]: value
    }
    onChange(newData)
  }

  const handleRemove = (index) => {
    onChange(data.filter((_, i) => i !== index))
  }

  const handleMove = (index, direction) => {
    if (
      (direction === 'up' && index === 0) ||
      (direction === 'down' && index === data.length - 1)
    ) {
      return
    }

    const newData = [...data]
    const newIndex = direction === 'up' ? index - 1 : index + 1
    ;[newData[index], newData[newIndex]] = [newData[newIndex], newData[index]]
    onChange(newData)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Education</h3>
        <div className="flex space-x-2">
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
          <button
            onClick={handleAdd}
            className="flex items-center rounded-md bg-blue-100 px-3 py-1.5 text-sm font-medium text-blue-700 hover:bg-blue-200"
          >
            Add Education
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {data.map((education, index) => (
          <div
            key={index}
            className="relative rounded-lg border border-gray-200 bg-white p-4"
          >
            <div className="absolute right-2 top-2 flex space-x-1">
              <button
                onClick={() => handleMove(index, 'up')}
                disabled={index === 0}
                className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
              >
                ↑
              </button>
              <button
                onClick={() => handleMove(index, 'down')}
                disabled={index === data.length - 1}
                className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
              >
                ↓
              </button>
              <button
                onClick={() => handleRemove(index)}
                className="rounded p-1 text-red-400 hover:bg-red-100 hover:text-red-600"
              >
                ×
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {/* Degree */}
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Degree
                </label>
                <input
                  type="text"
                  value={education.degree}
                  onChange={(e) => handleUpdate(index, 'degree', e.target.value)}
                  placeholder="Bachelor of Science in Computer Science"
                  className="w-full rounded-md border border-gray-300 p-2 text-sm"
                />
              </div>

              {/* School */}
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  School
                </label>
                <input
                  type="text"
                  value={education.school}
                  onChange={(e) => handleUpdate(index, 'school', e.target.value)}
                  placeholder="University Name"
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
                  value={education.location}
                  onChange={(e) => handleUpdate(index, 'location', e.target.value)}
                  placeholder="City, State"
                  className="w-full rounded-md border border-gray-300 p-2 text-sm"
                />
              </div>

              {/* Dates */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Start Date
                  </label>
                  <input
                    type="month"
                    value={education.startDate}
                    onChange={(e) => handleUpdate(index, 'startDate', e.target.value)}
                    className="w-full rounded-md border border-gray-300 p-2 text-sm"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    End Date
                  </label>
                  <input
                    type="month"
                    value={education.endDate}
                    onChange={(e) => handleUpdate(index, 'endDate', e.target.value)}
                    disabled={education.current}
                    className="w-full rounded-md border border-gray-300 p-2 text-sm disabled:bg-gray-100"
                  />
                </div>
              </div>

              {/* Current Student */}
              <div className="col-span-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={education.current}
                    onChange={(e) => handleUpdate(index, 'current', e.target.checked)}
                    className="rounded border-gray-300"
                  />
                  <span className="text-sm text-gray-700">I am currently studying here</span>
                </label>
              </div>

              {/* Description */}
              <div className="col-span-2">
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  value={education.description}
                  onChange={(e) => handleUpdate(index, 'description', e.target.value)}
                  placeholder="Describe your academic achievements, relevant coursework, etc..."
                  rows={4}
                  className="w-full rounded-md border border-gray-300 p-2 text-sm"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
