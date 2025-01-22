'use client'

export default function ControlPanel({ settings, onSettingsChange, activeSection, onSectionChange }) {
  const sections = [
    { id: 'personalInfo', name: 'Personal Information' },
    { id: 'workExperience', name: 'Work Experience' },
    { id: 'education', name: 'Education' },
    { id: 'skills', name: 'Skills' },
    { id: 'projects', name: 'Projects' },
    { id: 'customSections', name: 'Custom Sections' }
  ]

  const fonts = [
    'Roboto',
    'Lato',
    'Montserrat',
    'Open Sans',
    'Poppins'
  ]

  return (
    <div className="space-y-6">
      {/* Section Navigation */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-900">Sections</h3>
        <div className="flex flex-wrap gap-2">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                activeSection === section.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {section.name}
            </button>
          ))}
        </div>
      </div>

      {/* Resume Settings */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Resume Settings</h3>
        
        {/* Theme Color */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Theme Color
          </label>
          <input
            type="color"
            value={settings.themeColor}
            onChange={(e) => onSettingsChange('themeColor', e.target.value)}
            className="h-10 w-full cursor-pointer rounded border border-gray-200"
          />
        </div>

        {/* Font Family */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Font Family
          </label>
          <select
            value={settings.fontFamily}
            onChange={(e) => onSettingsChange('fontFamily', e.target.value)}
            className="w-full rounded-md border border-gray-300 p-2 text-sm"
          >
            {fonts.map(font => (
              <option key={font} value={font}>
                {font}
              </option>
            ))}
          </select>
        </div>

        {/* Font Size */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Font Size
          </label>
          <select
            value={settings.fontSize}
            onChange={(e) => onSettingsChange('fontSize', e.target.value)}
            className="w-full rounded-md border border-gray-300 p-2 text-sm"
          >
            <option value="compact">Compact</option>
            <option value="standard">Standard</option>
            <option value="large">Large</option>
          </select>
        </div>

        {/* Document Size */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Document Size
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="letter"
                checked={settings.documentSize === 'letter'}
                onChange={(e) => onSettingsChange('documentSize', e.target.value)}
                className="mr-2"
              />
              Letter
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="a4"
                checked={settings.documentSize === 'a4'}
                onChange={(e) => onSettingsChange('documentSize', e.target.value)}
                className="mr-2"
              />
              A4
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
