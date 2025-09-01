'use client';
import { Github, Linkedin, Twitter } from 'lucide-react';
export default function Contact() {
  
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
            
            <div className="flex flex-col justify-center items-center md:items-start space-y-6 pt-10">
                <h3 className="font-display text-3xl font-bold text-primary">Let&apos;s Connect</h3>
                <p className="text-foreground/80 text-center md:text-left">
                    You can also find me on these platforms. I&apos;m always open to connecting with fellow developers and creatives.
                </p>
                <div className="flex space-x-4">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                        <Github className="h-8 w-8" />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                        <Linkedin className="h-8 w-8" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                        <Twitter className="h-8 w-8" />
                        <span className="sr-only">Twitter</span>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
