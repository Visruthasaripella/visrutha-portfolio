'use client'

import { useState } from 'react'
import { Mail, Phone, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log(formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="md:w-1/2 space-y-4">
            <div className="flex items-center">
              <Mail className="w-6 h-6 mr-2 text-indigo-600 dark:text-indigo-400" />
              <a href="mailto:visruta@example.com" className="hover:text-indigo-600 dark:hover:text-indigo-400">visruta@example.com</a>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 mr-2 text-indigo-600 dark:text-indigo-400" />
              <a href="tel:+11234567890" className="hover:text-indigo-600 dark:hover:text-indigo-400">+1 (123) 456-7890</a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 mr-2 text-indigo-600 dark:text-indigo-400" />
              <a href="https://www.linkedin.com/in/visruta" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400">LinkedIn Profile</a>
            </div>
            <div className="flex items-center">
              <Github className="w-6 h-6 mr-2 text-indigo-600 dark:text-indigo-400" />
              <a href="https://github.com/visruta" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400">GitHub Profile</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

