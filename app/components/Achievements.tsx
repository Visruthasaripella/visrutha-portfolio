import { Award, Medal, Trophy } from 'lucide-react'

const achievements = [
  {
    title: "Swimming Gold Medals",
    description: "Two time consecutive gold medalist in national swimming competition",
    icon: <Medal className="w-12 h-12 text-yellow-400" />
  },
  {
    title: "Indian Social Impact Award",
    description: "Recognized for contributions to social welfare through technology",
    icon: <Trophy className="w-12 h-12 text-indigo-600" />
  },
  {
    title: "AWS Certified Solutions Architect",
    description: "Professional certification in cloud architecture",
    icon: <Award className="w-12 h-12 text-blue-500" />
  },
  {
    title: "AWS Certified Developer Architect",
    description: "Professional certification in cloud architecture",
    icon: <Award className="w-12 h-12 text-blue-500" />
  }
]

export default function Achievements() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

