'use client'

import { useState } from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import PersonalInfo from './sections/PersonalInfo'
import WorkExperience from './sections/WorkExperience'
import Education from './sections/Education'
import Skills from './sections/Skills'
import ResumePDF from './ResumePDF'
import ControlPanel from './ControlPanel'

const initialState = {
  personalInfo: {
    name: '',
    jobTitle: '',
    location: '',
    phone: '',
    email: '',
    website: ''
  },
  objective: '',
  workExperience: [],
  education: [],
  projects: [],
  skills: [],
  customSections: [],
  settings: {
    themeColor: '#0066cc',
    fontFamily: 'Roboto',
    fontSize: 'standard',
    documentSize: 'letter'
  }
}

export default function ResumeBuilder() {
  const [resumeData, setResumeData] = useState(initialState)
  const [activeSection, setActiveSection] = useState('personalInfo')

  const handleUpdateData = (section, data) => {
    setResumeData(prev => ({
      ...prev,
      [section]: data
    }))
  }

  const handleSettingsChange = (setting, value) => {
    setResumeData(prev => ({
      ...prev,
      settings: {
        ...prev.settings,
        [setting]: value
      }
    }))
  }

  const handleAIGenerate = async (section) => {
    // Implement AI generation logic here
    console.log('Generating content for', section)
  }

  const handleSave = async () => {
    // Implement save logic here
    console.log('Saving resume data', resumeData)
  }

  return (
    <div className="container mx-auto min-h-screen p-4">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Controls Section */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Resume Editor</h2>
          
          <div className="space-y-6">
            <ControlPanel 
              settings={resumeData.settings}
              onSettingsChange={handleSettingsChange}
              activeSection={activeSection}
              onSectionChange={setActiveSection}
            />

            {/* Section Content */}
            <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
              {activeSection === 'personalInfo' && (
                <PersonalInfo
                  data={resumeData.personalInfo}
                  onChange={(data) => handleUpdateData('personalInfo', data)}
                  onAIGenerate={() => handleAIGenerate('personalInfo')}
                />
              )}
              {activeSection === 'workExperience' && (
                <WorkExperience
                  data={resumeData.workExperience}
                  onChange={(data) => handleUpdateData('workExperience', data)}
                  onAIGenerate={() => handleAIGenerate('workExperience')}
                />
              )}
              {activeSection === 'education' && (
                <Education
                  data={resumeData.education}
                  onChange={(data) => handleUpdateData('education', data)}
                  onAIGenerate={() => handleAIGenerate('education')}
                />
              )}
              {activeSection === 'skills' && (
                <Skills
                  data={resumeData.skills}
                  onChange={(data) => handleUpdateData('skills', data)}
                  onAIGenerate={() => handleAIGenerate('skills')}
                />
              )}
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Preview</h2>
            <div className="flex space-x-4">
              <button
                onClick={handleSave}
                className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
              >
                Save
              </button>
              <PDFDownloadLink
                document={<ResumePDF data={resumeData} />}
                fileName="resume.pdf"
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                {({ loading }) =>
                  loading ? 'Generating PDF...' : 'Download PDF'
                }
              </PDFDownloadLink>
            </div>
          </div>

          <div className="aspect-[1/1.4142] w-full rounded-lg border border-gray-200 bg-white p-8 shadow-inner">
            {/* Live Preview */}
            <div
              style={{
                fontFamily: resumeData.settings.fontFamily,
                fontSize: resumeData.settings.fontSize === 'compact' ? '0.875rem' : 
                         resumeData.settings.fontSize === 'large' ? '1.125rem' : '1rem',
                color: resumeData.settings.themeColor
              }}
            >
              {/* Personal Info Preview */}
              {resumeData.personalInfo.name && (
                <h1 className="mb-2 text-3xl font-bold">{resumeData.personalInfo.name}</h1>
              )}
              {resumeData.personalInfo.jobTitle && (
                <h2 className="mb-4 text-xl">{resumeData.personalInfo.jobTitle}</h2>
              )}
              
              {/* Contact Info */}
              <div className="mb-6 flex flex-wrap gap-4 text-sm">
                {resumeData.personalInfo.location && (
                  <span>{resumeData.personalInfo.location}</span>
                )}
                {resumeData.personalInfo.phone && (
                  <span>{resumeData.personalInfo.phone}</span>
                )}
                {resumeData.personalInfo.email && (
                  <span>{resumeData.personalInfo.email}</span>
                )}
                {resumeData.personalInfo.website && (
                  <span>{resumeData.personalInfo.website}</span>
                )}
              </div>

              {/* Other Sections */}
              {/* Work Experience */}
              {resumeData.workExperience.length > 0 && (
                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-bold">Work Experience</h3>
                  {resumeData.workExperience.map((exp, index) => (
                    <div key={index} className="mb-4">
                      <h4 className="font-bold">{exp.title}</h4>
                      <p>{exp.company}</p>
                      <p className="text-sm text-gray-600">{exp.date}</p>
                      <p>{exp.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Education */}
              {resumeData.education.length > 0 && (
                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-bold">Education</h3>
                  {resumeData.education.map((edu, index) => (
                    <div key={index} className="mb-4">
                      <h4 className="font-bold">{edu.degree}</h4>
                      <p>{edu.school}</p>
                      <p className="text-sm text-gray-600">{edu.date}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Skills */}
              {resumeData.skills.length > 0 && (
                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-bold">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-gray-100 px-3 py-1 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
