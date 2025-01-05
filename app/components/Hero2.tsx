import Image from 'next/image';

export default function Hero2() {
  return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
        <Image
            src="/Logo.png"
            alt="Logo"
            width={200}
            height={200}
            className="rounded-full mb-8 border-4 border-white shadow-lg"
        />
        <h1 className="text-4xl font-bold mb-6 animate-fade-in-down">Who Am I?</h1>
        <p className="text-xl max-w-2xl text-center animate-fade-in-up">
          A software engineer who's transcended traditional roles, mastering Cloud Computing for scalability,
          AI & ML for intelligent systems, and Full Stack Development for seamless integration. These skills are
          essential to innovate, adapt, and thrive in the ever-evolving digital era.
        </p>
      </section>
  );
}

