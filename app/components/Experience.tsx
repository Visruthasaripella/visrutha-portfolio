import { Briefcase } from 'lucide-react'

const experiences = [
  {
    company: "Deloitte",
    position: "Software Engineer",
    period: "2023 - Present",
    description: "Developing cloud-native applications and implementing DevOps practices for enterprise clients."
  },
  {
    company: "Virginia Tech",
    position: "Graduate Research Assistant",
    period: "2020 - 2022",
    description: "Conducted research on AI-driven cybersecurity solutions and assisted in teaching advanced programming courses."
  },
  {
    company: "Micron Technology",
    position: "Software Development Intern",
    period: "Summer 2021",
    description: "Contributed to the development of internal tools for improving semiconductor manufacturing processes."
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row">
              <div className="md:w-1/4">
                <div className="flex items-center mb-4 md:mb-0">
                  <Briefcase size={24} className="text-indigo-600 dark:text-indigo-400 mr-2" />
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{exp.period}</p>
              </div>
              <div className="md:w-3/4">
                <h4 className="text-lg font-semibold mb-2">{exp.position}</h4>
                <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

