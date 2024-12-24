'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun, Download } from 'lucide-react'

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-300">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">VS</a>
        <div className="flex items-center space-x-4">
          <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">About</a>
          <a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Skills</a>
          <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Projects</a>
          <a href="#experience" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Experience</a>
          <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Contact</a>
          <a
            href="/visruta-saripella-resume.pdf"
            download
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full flex items-center transition duration-300"
          >
            <Download size={16} className="mr-2" />
            Resume
          </a>
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>
    </header>
  )
}

