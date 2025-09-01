import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge} from "@radix-ui/themes";
import { ExternalLink } from 'lucide-react';

const projectData = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product listings, a shopping cart, and a secure checkout process, built with a modern MERN stack.',
    image: 'https://picsum.photos/600/400?random=1',
    imageHint: 'online shopping',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    link: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool that helps teams organize, track, and manage their work with an intuitive drag-and-drop interface.',
    image: 'https://picsum.photos/600/400?random=2',
    imageHint: 'team collaboration',
    technologies: ['Next.js', 'Firebase', 'Tailwind CSS', 'React DnD'],
    link: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my skills and projects, featuring a clean design and smooth animations.',
    image: 'https://picsum.photos/600/400?random=3',
    imageHint: 'web design',
    technologies: ['Next.js', 'TypeScript', 'Shadcn/UI', 'Genkit'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Here are some of the projects I&apos;m proud to have worked on.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden group transition-all duration-300 bg-secondary/50 hover:bg-secondary/80 hover:shadow-2xl hover:-translate-y-2">
              <CardHeader className="p-0">
                <div className="relative h-52 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    data-ai-hint={project.imageHint}
                  />
                </div>
              </CardHeader>
              <div className="flex flex-col flex-1 p-6">
                <CardTitle className="font-display text-2xl mb-2">{project.title}</CardTitle>
                <CardDescription className="flex-1 text-foreground/80">{project.description}</CardDescription>
                <CardFooter className="p-0 pt-6 flex flex-col items-start gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} color="gray" variant="outline" highContrast>{tech}</Badge>
                    ))}
                  </div>
                   <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:underline font-semibold">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                   </a>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
