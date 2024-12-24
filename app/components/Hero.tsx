import Image from 'next/image'
import { Download } from 'lucide-react'
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <div className="container mx-auto px-6 py-24 text-center">
        <Image
          src="/visruta-red.jpg"
          alt="Visruta Saripella"
          width={200}
          height={200}
          className="rounded-full mx-auto mb-8 border-4 border-white shadow-lg"
        />
        <h1 className="text-5xl font-bold mb-4 animate-fade-in-down">Visruta Saripella</h1>
        <p className="text-2xl mb-8 animate-fade-in-up">Empowering Solutions with Full-Stack Expertise</p>
        <a 
          href="#contact" 
          className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-purple-100 transition duration-300 animate-bounce"
        >
          Get in Touch
        </a>
      </div>
    </section>
  )
}

