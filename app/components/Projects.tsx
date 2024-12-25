import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "Hokie Event Sphere",
    description: "AI-powered event management platform",
    image: "/hokie-event-sphere.png",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    github: "https://github.com/visruta/hokie-event-sphere",
    live: "https://hokie-event-sphere.vercel.app/"
  },
  {
    title: "Cloud-based Web App Deployment",
    description: "Automated deployment and orchestration solution",
    image: "/cloud-bookstore.jpeg",
    technologies: ["Docker", "Kubernetes", "Jenkins", "AWS"],
    github: "https://github.com/Visruthasaripella/Cloud-Computing",
    live: null
  },
  {
    title: "Bookstore Web Solution",
    description: "Integrated web solution for bookstore operations",
    image: "/web-bookstore.png",
    technologies: ["React", "Express", "PostgreSQL", "Redis"],
    github: "https://github.com/visruta/bookstore-solution",
    live: "https://github.com/Visruthasaripella/webapp"
  },
  {
    title: "DRL-Based Intrusion Response System",
    description: "Deep Reinforcement Learning for network security",
    image: "/intrution.png",
    technologies: ["Python", "TensorFlow", "Scikit-learn"],
    github: "https://github.com/Visruthasaripella/NS-Deep-ReinfoNS-DRL-based-IRS-",
    live: null
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <Image src={project.image} alt={project.title} width={600} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                    <Github size={20} className="mr-1" />
                    GitHub
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                      <ExternalLink size={20} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

