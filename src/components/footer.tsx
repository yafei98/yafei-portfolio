import { Code2, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2 text-xl font-display font-bold text-primary">
            <Code2 className="h-7 w-7" />
            <span>Yafei</span>
          </Link>
          <p className="text-sm text-foreground/60 text-center">
            &copy; {new Date().getFullYear()} Yafei. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="GitHub" className="text-foreground/60 hover:text-primary transition-colors">
              <Github className="h-7 w-7" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-foreground/60 hover:text-primary transition-colors">
              <Linkedin className="h-7 w-7" />
            </a>
            <a href="#" aria-label="Twitter" className="text-foreground/60 hover:text-primary transition-colors">
              <Twitter className="h-7 w-7" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
