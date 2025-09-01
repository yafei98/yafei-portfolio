import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Settings, TerminalSquare, Wind } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Skill {
  name: string;
  icon: LucideIcon;
}

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code,
    skills: [
      { name: 'React', icon: Wind },
      { name: 'Next.js', icon: Wind },
      { name: 'TypeScript', icon: Code },
      { name: 'Tailwind CSS', icon: Wind },
      { name: 'HTML5 & CSS3', icon: Code },
    ],
  },
  {
    title: 'Backend',
    icon: Database,
    skills: [
      { name: 'Node.js', icon: TerminalSquare },
      { name: 'Express', icon: TerminalSquare },
      { name: 'Firebase', icon: Database },
      { name: 'PostgreSQL', icon: Database },
      { name: 'REST APIs', icon: TerminalSquare },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: Settings,
    skills: [
      { name: 'Git & GitHub', icon: Settings },
      { name: 'Docker', icon: Settings },
      { name: 'Vercel', icon: Wind },
      { name: 'Genkit AI', icon: TerminalSquare },
      { name: 'Zod', icon: Code },
    ],
  },
];

const SkillItem = ({ name, icon: Icon }: Skill) => (
  <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg transition-transform hover:scale-105 hover:bg-background">
    <Icon className="h-6 w-6 text-primary" />
    <span className="font-medium text-foreground/90">{name}</span>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="bg-secondary/50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold">My Tech Stack</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            A selection of technologies and tools I use to bring ideas to life.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.title} className="bg-secondary/50 hover:bg-secondary/80 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="flex-row items-center gap-4">
                <category.icon className="h-8 w-8 text-primary" />
                <CardTitle className="font-display text-2xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.skills.map((skill) => (
                    <SkillItem key={skill.name} {...skill} />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
