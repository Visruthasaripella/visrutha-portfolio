import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Visruta Saripella - Full-Stack Developer',
  description: 'Portfolio of Visruta Saripella, a full-stack developer and cloud enthusiast.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 text-gray-800 dark:text-gray-200`}>{children}</body>
    </html>
  )
}

