import { Award, Book, Coffee } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-lg mb-4">
              I'm a passionate full-stack developer and cloud enthusiast with a knack for creating innovative solutions. 
              With a strong foundation in computer science and years of hands-on experience, I strive to build scalable 
              and efficient applications that make a difference.
            </p>
            <p className="text-lg">
              My journey in tech has been driven by curiosity and a desire to continuously learn and grow. 
              I'm always excited to take on new challenges and collaborate on projects that push the boundaries of what's possible.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-3 gap-4">
            <div className="text-center">
              <Award size={48} className="mx-auto mb-2 text-indigo-600 dark:text-indigo-400" />
              <h3 className="font-semibold">Certified</h3>
              <p>AWS & Azure</p>
            </div>
            <div className="text-center">
              <Book size={48} className="mx-auto mb-2 text-indigo-600 dark:text-indigo-400" />
              <h3 className="font-semibold">Continuous Learner</h3>
              <p>Always Upskilling</p>
            </div>
            <div className="text-center">
              <Coffee size={48} className="mx-auto mb-2 text-indigo-600 dark:text-indigo-400" />
              <h3 className="font-semibold">Coffee Lover</h3>
              <p>Fuel for Coding</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

