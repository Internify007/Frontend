'use client'

import { useState } from 'react'

export default function Skills({ data, onChange, onAIGenerate }) {
  const [newSkill, setNewSkill] = useState('')

  const handleAdd = (e) => {
    e.preventDefault()
    if (newSkill.trim()) {
      onChange([...data, newSkill.trim()])
      setNewSkill('')
    }
  }

  const handleRemove = (index) => {
    onChange(data.filter((_, i) => i !== index))
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleAdd(e)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Skills</h3>
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

      {/* Add Skill Form */}
      <form onSubmit={handleAdd} className="flex gap-2">
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a skill (e.g., JavaScript, Project Management)"
          className="flex-1 rounded-md border border-gray-300 p-2 text-sm"
        />
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Add
        </button>
      </form>

      {/* Skills List */}
      <div className="flex flex-wrap gap-2">
        {data.map((skill, index) => (
          <div
            key={index}
            className="group flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm"
          >
            <span>{skill}</span>
            <button
              onClick={() => handleRemove(index)}
              className="ml-2 hidden rounded-full p-1 text-red-500 hover:bg-red-100 group-hover:inline-block"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {/* Suggested Skills */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">Suggested Skills</h4>
        <div className="flex flex-wrap gap-2">
          {[
            'JavaScript',
            'React',
            'Node.js',
            'Python',
            'Project Management',
            'Team Leadership',
            'Communication',
            'Problem Solving'
          ].map((skill) => (
            !data.includes(skill) && (
              <button
                key={skill}
                onClick={() => onChange([...data, skill])}
                className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700 hover:bg-blue-100"
              >
                + {skill}
              </button>
            )
          ))}
        </div>
      </div>
    </div>
  )
}
