import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Header from '@/components/header';
import Hero from '@/components/hero';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
export default function Home() {
  return (
    <Theme>
					<div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Projects />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
		</Theme>
    
  );
}