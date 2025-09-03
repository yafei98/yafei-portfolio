import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown, Briefcase, Mail } from 'lucide-react';
export default function Hero() {
  return (
    <section id="about" className="container mx-auto px-4 py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-primary font-medium">Frontend Developer</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mt-2">
            Yafei
          </h1>
          <p className="mt-4 text-lg text-foreground/80 max-w-xl">
            Frontend Developer with expertise in
            <strong className="font-semibold text-white"> React</strong>,
            <strong className="font-semibold text-white"> Next.js</strong>,
            <strong className="font-semibold text-white"> TypeScript</strong>, and
            <strong className="font-semibold text-white"> Tailwind CSS</strong>. Experienced with
            <strong className="font-semibold text-white"> modern tooling </strong>
            (<strong className="font-semibold text-white">Vite</strong>,
            <strong className="font-semibold text-white"> Webpack</strong>,
            <strong className="font-semibold text-white"> ESLint</strong>,
            <strong className="font-semibold text-white"> Prettier</strong>)
            and building <strong className="font-semibold text-white">CI/CD pipelines</strong> using
            <strong className="font-semibold text-white"> GitLab CI and Vercel</strong>. Strong collaborator
            with designers and backend teams to deliver
            <strong className="font-semibold text-white"> polished user experiences. </strong>
            Focused on
            <strong className="font-semibold text-white"> performance optimization </strong>
            and building
            <strong className="font-semibold text-white"> accessible, responsive interfaces</strong>.
          </p>
          <div className="mt-8 flex gap-4 flex-wrap justify-center md:justify-start">
            <a href="#projects">
              <Button size={"lg"}>
                <Briefcase className="mr-2 h-5 w-5" />
                View My Work
              </Button>
            </a>
            <a href="#contact">
              <Button size={"lg"} variant="outline">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
            </a>
          </div>
        </div>
        <div className="flex justify-center order-first md:order-last">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
            <Image
              src={'/images/profile.jpg'}
              alt="Yafei's Headshot"
              width={300}
              height={300}
              className="object-cover rounded-full shadow-2xl border-4 border-primary/10"
              data-ai-hint="professional headshot"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
