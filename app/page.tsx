import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero2 from "@/app/components/Hero2";
import { Analytics } from "@vercel/analytics/react"


export default function Home() {
  return (
    <main className="min-h-screen">
        <Analytics/>
      <Header />
      <Hero />
      <Hero2 />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}

