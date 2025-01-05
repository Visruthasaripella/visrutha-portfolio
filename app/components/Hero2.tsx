import Image from 'next/image'
export default function Hero2() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
            <div className="container mx-auto px-6 py-24 text-center">
                <Image
                    src="/Logo.png"
                    width={500}
                    height={600}
                    alt="Logo for the software engineer portfolio"
                    className="mx-auto mb-8 border-4 border-white shadow-lg"
                />
                <h1 className="text-5xl font-bold mb-4 animate-fade-in-down">&quot;Who Am I ?&quot; - A Software Engineer for Today

                </h1>
                <p className="text-2xl mb-8 animate-fade-in-up">In the contemporary digital era, I exemplify the evolving role of a software engineer who transcends conventional coding paradigms. By mastering Cloud Computing for scalable and resilient architectures, Artificial Intelligence and Machine Learning for crafting adaptive, data-driven solutions, and Full Stack Development for seamless integration of user interfaces and backend systems, I embody the indispensable competencies essential to innovate, adapt, and thrive in today&apos;s tech-driven world. Learning these critical skills is not just an advantage but a necessity, enabling me to solve complex challenges and contribute meaningfully to the relentless evolution of technology.</p>

            </div>
        </section>
    )
}