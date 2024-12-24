import { Linkedin, Github, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Visruta Saripella. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://linkedin.com/in/visruta" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/visruta" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
              <Github size={24} />
            </a>
            <a href="https://twitter.com/visruta" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

