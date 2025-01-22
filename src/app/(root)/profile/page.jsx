'use client'

import { useState } from 'react'

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    personal: {
      name: 'Alex Johnson',
      title: 'Senior Software Engineer',
      location: 'San Francisco Bay Area',
      about: 'Passionate software engineer with 5+ years of experience in full-stack development. Specialized in React, Node.js, and cloud technologies. Strong focus on building scalable applications and mentoring junior developers.',
      email: 'alex.johnson@example.com',
      phone: '+1 (555) 123-4567',
      website: 'www.alexjohnson.dev',
      github: 'github.com/alexjohnson',
      linkedin: 'linkedin.com/in/alexjohnson'
    },
    experience: [
      {
        id: 1,
        company: 'Tech Solutions Inc.',
        title: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        type: 'Full-time',
        startDate: 'Jan 2022',
        endDate: 'Present',
        description: [
          'Led a team of 5 developers in building a cloud-native microservices architecture',
          'Improved application performance by 40% through optimization and caching strategies',
          'Mentored junior developers and conducted technical interviews'
        ]
      },
      {
        id: 2,
        company: 'Innovation Labs',
        title: 'Software Engineer',
        location: 'Seattle, WA',
        type: 'Full-time',
        startDate: 'Jun 2019',
        endDate: 'Dec 2021',
        description: [
          'Developed and maintained multiple React-based web applications',
          'Implemented CI/CD pipelines reducing deployment time by 60%',
          'Collaborated with product teams to define technical requirements'
        ]
      }
    ],
    education: [
      {
        id: 1,
        school: 'University of California, Berkeley',
        degree: 'Master of Science',
        field: 'Computer Science',
        startDate: '2017',
        endDate: '2019',
        activities: 'AI Research Group, Hackathon Club'
      },
      {
        id: 2,
        school: 'Stanford University',
        degree: 'Bachelor of Science',
        field: 'Computer Science',
        startDate: '2013',
        endDate: '2017',
        activities: 'Software Engineering Club, Mathematics Honor Society'
      }
    ],
    skills: [
      { id: 1, name: 'React.js', endorsements: 42 },
      { id: 2, name: 'Node.js', endorsements: 38 },
      { id: 3, name: 'TypeScript', endorsements: 35 },
      { id: 4, name: 'AWS', endorsements: 31 },
      { id: 5, name: 'System Design', endorsements: 28 },
      { id: 6, name: 'Python', endorsements: 25 },
      { id: 7, name: 'Docker', endorsements: 22 },
      { id: 8, name: 'GraphQL', endorsements: 20 }
    ],
    certifications: [
      {
        id: 1,
        name: 'AWS Certified Solutions Architect',
        organization: 'Amazon Web Services',
        issueDate: 'Jan 2023',
        expiryDate: 'Jan 2026',
        credentialId: 'AWS-123456'
      },
      {
        id: 2,
        name: 'Professional Cloud Developer',
        organization: 'Google Cloud',
        issueDate: 'Mar 2022',
        expiryDate: 'Mar 2024',
        credentialId: 'GCP-789012'
      }
    ]
  })

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    // Here you would typically make an API call to save the profile
    setIsEditing(false)
  }

  const handleInputChange = (section, field, value) => {
    setProfile(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }))
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      {/* Cover Image */}
      <div className="relative h-48 bg-gradient-to-r from-blue-600 to-indigo-600 md:h-64">
        {isEditing && (
          <button className="absolute bottom-4 right-4 rounded-lg bg-white px-4 py-2 font-medium text-blue-600 shadow-sm hover:bg-blue-50">
            Change Cover
          </button>
        )}
      </div>

      <div className="container mx-auto max-w-5xl px-4">
        {/* Profile Header */}
        <div className="relative -mt-20 rounded-xl bg-white p-6 shadow-sm">
          <div className="flex flex-col items-start gap-6 md:flex-row">
            {/* Profile Picture */}
            <div className="relative">
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                  profile.personal.name
                )}&size=128&background=random`}
                alt={profile.personal.name}
                className="h-32 w-32 rounded-xl"
              />
              {isEditing && (
                <button className="absolute bottom-2 right-2 rounded-full bg-white p-2 text-blue-600 shadow-sm hover:bg-blue-50">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </button>
              )}
            </div>

            {/* Basic Info */}
            <div className="flex-1">
              {isEditing ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={profile.personal.name}
                    onChange={(e) =>
                      handleInputChange('personal', 'name', e.target.value)
                    }
                    className="block w-full rounded-lg border-gray-300 text-2xl font-bold"
                  />
                  <input
                    type="text"
                    value={profile.personal.title}
                    onChange={(e) =>
                      handleInputChange('personal', 'title', e.target.value)
                    }
                    className="block w-full rounded-lg border-gray-300"
                  />
                  <input
                    type="text"
                    value={profile.personal.location}
                    onChange={(e) =>
                      handleInputChange('personal', 'location', e.target.value)
                    }
                    className="block w-full rounded-lg border-gray-300 text-gray-600"
                  />
                </div>
              ) : (
                <>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {profile.personal.name}
                  </h1>
                  <p className="mt-1 text-lg text-gray-600">
                    {profile.personal.title}
                  </p>
                  <p className="mt-1 text-gray-600">{profile.personal.location}</p>
                </>
              )}

              {/* Contact Info */}
              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  href={`mailto:${profile.personal.email}`}
                  className="flex items-center text-gray-600 hover:text-blue-600"
                >
                  <svg
                    className="mr-2 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {profile.personal.email}
                </a>
                <a
                  href={`tel:${profile.personal.phone}`}
                  className="flex items-center text-gray-600 hover:text-blue-600"
                >
                  <svg
                    className="mr-2 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {profile.personal.phone}
                </a>
              </div>
            </div>

            {/* Edit/Save Button */}
            <div>
              {isEditing ? (
                <button
                  onClick={handleSave}
                  className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700"
                >
                  Save Profile
                </button>
              ) : (
                <button
                  onClick={handleEdit}
                  className="rounded-lg border border-blue-600 px-6 py-2 font-medium text-blue-600 hover:bg-blue-50"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>

        {/* About */}
        <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">About</h2>
          {isEditing ? (
            <textarea
              value={profile.personal.about}
              onChange={(e) =>
                handleInputChange('personal', 'about', e.target.value)
              }
              rows={4}
              className="mt-4 block w-full rounded-lg border-gray-300"
            />
          ) : (
            <p className="mt-4 text-gray-600">{profile.personal.about}</p>
          )}
        </section>

        {/* Experience */}
        <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">Experience</h2>
          <div className="mt-6 space-y-6">
            {profile.experience.map((exp) => (
              <div key={exp.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                    <p className="text-sm text-gray-500">
                      {exp.startDate} - {exp.endDate} • {exp.type}
                    </p>
                    <p className="text-sm text-gray-500">{exp.location}</p>
                  </div>
                  {isEditing && (
                    <button className="text-blue-600 hover:text-blue-700">
                      Edit
                    </button>
                  )}
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            {isEditing && (
              <button className="mt-4 flex items-center text-blue-600 hover:text-blue-700">
                <svg
                  className="mr-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Add Experience
              </button>
            )}
          </div>
        </section>

        {/* Education */}
        <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">Education</h2>
          <div className="mt-6 space-y-6">
            {profile.education.map((edu) => (
              <div key={edu.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {edu.school}
                    </h3>
                    <p className="text-gray-600">
                      {edu.degree} • {edu.field}
                    </p>
                    <p className="text-sm text-gray-500">
                      {edu.startDate} - {edu.endDate}
                    </p>
                    <p className="mt-2 text-gray-600">
                      Activities: {edu.activities}
                    </p>
                  </div>
                  {isEditing && (
                    <button className="text-blue-600 hover:text-blue-700">
                      Edit
                    </button>
                  )}
                </div>
              </div>
            ))}
            {isEditing && (
              <button className="mt-4 flex items-center text-blue-600 hover:text-blue-700">
                <svg
                  className="mr-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Add Education
              </button>
            )}
          </div>
        </section>

        {/* Skills */}
        <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Skills</h2>
            {isEditing && (
              <button className="text-blue-600 hover:text-blue-700">
                Add Skill
              </button>
            )}
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            {profile.skills.map((skill) => (
              <div
                key={skill.id}
                className="flex items-center rounded-lg bg-gray-50 px-4 py-2"
              >
                <span className="font-medium text-gray-900">{skill.name}</span>
                <span className="ml-2 text-sm text-gray-500">
                  • {skill.endorsements} endorsements
                </span>
                {isEditing && (
                  <button className="ml-2 text-gray-400 hover:text-red-600">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">Certifications</h2>
          <div className="mt-6 space-y-6">
            {profile.certifications.map((cert) => (
              <div key={cert.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{cert.name}</h3>
                    <p className="text-gray-600">{cert.organization}</p>
                    <p className="text-sm text-gray-500">
                      Issued {cert.issueDate} • Expires {cert.expiryDate}
                    </p>
                    <p className="text-sm text-gray-500">
                      Credential ID: {cert.credentialId}
                    </p>
                  </div>
                  {isEditing && (
                    <button className="text-blue-600 hover:text-blue-700">
                      Edit
                    </button>
                  )}
                </div>
              </div>
            ))}
            {isEditing && (
              <button className="mt-4 flex items-center text-blue-600 hover:text-blue-700">
                <svg
                  className="mr-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Add Certification
              </button>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}
