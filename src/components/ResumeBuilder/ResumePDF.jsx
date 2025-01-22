'use client'

import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 18,
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  experienceItem: {
    marginBottom: 10,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  skillItem: {
    backgroundColor: '#f3f4f6',
    padding: '4 8',
    borderRadius: 4,
  },
})

export default function ResumePDF({ data }) {
  return (
    <Document>
      <Page 
        size={data.settings.documentSize.toUpperCase()}
        style={styles.page}
      >
        {/* Personal Info */}
        <View style={styles.section}>
          <Text style={styles.heading}>{data.personalInfo.name}</Text>
          <Text style={styles.subHeading}>{data.personalInfo.jobTitle}</Text>
          <View style={styles.contactInfo}>
            <Text style={styles.text}>{data.personalInfo.location}</Text>
            <Text style={styles.text}>{data.personalInfo.phone}</Text>
            <Text style={styles.text}>{data.personalInfo.email}</Text>
            <Text style={styles.text}>{data.personalInfo.website}</Text>
          </View>
        </View>

        {/* Work Experience */}
        {data.workExperience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subHeading}>Work Experience</Text>
            {data.workExperience.map((exp, index) => (
              <View key={index} style={styles.experienceItem}>
                <Text style={[styles.text, { fontWeight: 'bold' }]}>
                  {exp.title} at {exp.company}
                </Text>
                <Text style={styles.text}>
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </Text>
                <Text style={styles.text}>{exp.description}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subHeading}>Education</Text>
            {data.education.map((edu, index) => (
              <View key={index} style={styles.experienceItem}>
                <Text style={[styles.text, { fontWeight: 'bold' }]}>
                  {edu.degree}
                </Text>
                <Text style={styles.text}>{edu.school}</Text>
                <Text style={styles.text}>{edu.date}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subHeading}>Skills</Text>
            <View style={styles.skillsContainer}>
              {data.skills.map((skill, index) => (
                <View key={index} style={styles.skillItem}>
                  <Text style={styles.text}>{skill}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
      </Page>
    </Document>
  )
}
