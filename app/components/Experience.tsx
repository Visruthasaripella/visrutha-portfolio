import { Briefcase } from 'lucide-react'

const experiences = [
  {
    company: "Virginia Tech",
    position: "Software Developer",
    period: "February 2024 – Present",
    description: "Developing an AI assistant for real-time student guidance. Built dynamic workflows with visual tracking and deployed scalable solutions, improving responsiveness and user engagement."
  },
  {
    company: "Virginia Tech",
    position: "Research Assistant",
    period: "September 2023 – December 2024",
    description: "Designed a high-throughput event streaming system and resilient services for traffic data. Improved data processing speed and unified multiple data sources to enhance reliability and access."
  },
  {
    company: "Corp Team Solutions - LTIMindtree",
    position: "Software Engineer",
    period: "May 2021 – July 2023",
    description: "Led development of large-scale systems supporting millions of daily requests. Delivered impactful business solutions, improved system performance, and reduced release times through automation."
  }
];

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

