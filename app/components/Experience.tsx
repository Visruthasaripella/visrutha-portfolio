import { Briefcase } from 'lucide-react'

const experiences = [
  {
    company: "Virginia Tech",
    position: "Software Developer",
    period: "February 2024 – Present",
    description: `Developing a production-grade AI assistant using LLMs and RAG for real-time, personalized student guidance. 
Implemented real-time status tracking using Angular, Spring Boot, and MongoDB for dynamic workflows. 
Deployed scalable, highly available solutions on AWS with Docker/Kubernetes, reducing response time to sub-150ms and increasing student engagement by 40%.`
  },
  {
    company: "Virginia Tech",
    position: "Research Assistant",
    period: "September 2023 – December 2024",
    description: `Architected a Kafka-based event streaming pipeline processing 200K+ traffic events/min. 
Designed fault-tolerant Java microservices with circuit-breaking patterns, achieving 99.95% uptime. 
Improved Spark-based data processing latency from 12s to 300ms. 
Unified 7 transportation APIs via a GraphQL federation layer, reducing integration issues by 87%.`
  },
  {
    company: "LTIMindtree",
    position: "Software Engineer",
    period: "May 2021 – July 2023",
    description: `Built scalable microservices handling 2M+ daily requests with optimized performance via Oracle/MySQL tuning. 
Led development of Extended Care Management and CSOS validation systems, contributing over $1M in revenue. 
Developed React-Redux dashboards in TypeScript, improving user engagement by 40%. 
Implemented CI/CD with AWS, Docker, and Kubernetes for zero-downtime deployments and 70% faster releases. 
Enhanced observability using ELK stack.`
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

