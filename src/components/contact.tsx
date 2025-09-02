'use client';
import { Github, Linkedin, Phone, Mail } from 'lucide-react';
export default function Contact() {

  return (
    <section id="contact" className="py-20 md:py-26">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center space-y-6 pt-10">
          <h3 className="font-display text-3xl font-bold text-primary">Let&apos;s Connect</h3>
          <p className="text-foreground/80 text-center md:text-left">
            You can also find me on these platforms. I&apos;m always open to connecting with fellow developers and creatives.
          </p>
          <div className="flex space-x-4 items-center justify-center">
            <a href="https://github.com/yafei98" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Github className="h-8 w-8" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/mira-li-327565288/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Linkedin className="h-8 w-8" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a onClick={() => alert("📞 089 230 2085")} target="" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Phone className="h-8 w-8" />
              <span className="sr-only">Phone</span>
            </a>
            <a
              href="mailto:yafei.dev@gmail.com"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Mail className="h-8 w-8" />
              <span className="sr-only">Mail</span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
