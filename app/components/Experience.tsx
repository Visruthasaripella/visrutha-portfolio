import { Briefcase } from 'lucide-react'

const experiences = [
  {
    company: "Reality AI",
    position: "AI Software Developer",
    period: "Present",
    description: "Develop and optimize AI models, integrate machine learning solutions, and support real-time data processing for innovative applications."
  },
  {
    company: "Virginia Tech",
    position: "AWS Admin",
    period: "2023 - 2024",
    description: "Managed cloud infrastructure, optimized costs, and ensured security compliance.."
  },
  {
    company: "Deloitte",
    position: "Software Developer intern",
    period: "June 2024 - August 2024",
    description: "Built scalable backend services, optimized deployment pipelines, and enhanced user interfaces.."
  },
  {
    company: "Micron Technology",
    position: "Software Engineer",
    period: "July 2022 - July 2023",
    description: "Streamlined cloud operations, automated tasks, and optimized deployments using AWS and Kubernetes.."
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

