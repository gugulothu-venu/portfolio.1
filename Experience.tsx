import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Ltd.',
      location: 'Hyderabad, India',
      period: '2023 - Present',
      type: 'Full-time',
      description: [
        'Led development of scalable web applications serving 100K+ users',
        'Mentored junior developers and established coding best practices',
        'Architected microservices infrastructure reducing response time by 40%',
        'Collaborated with cross-functional teams to deliver high-impact features',
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL'],
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Inc.',
      location: 'Bangalore, India',
      period: '2022 - 2023',
      type: 'Full-time',
      description: [
        'Developed and maintained e-commerce platforms with 99.9% uptime',
        'Implemented CI/CD pipelines improving deployment efficiency by 60%',
        'Built responsive web applications using modern frameworks',
        'Integrated third-party APIs and payment processing systems',
      ],
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Redis', 'Stripe'],
    },
    {
      title: 'Frontend Developer Intern',
      company: 'StartupTech',
      location: 'Remote',
      period: '2021 - 2022',
      type: 'Internship',
      description: [
        'Created interactive user interfaces for mobile-first applications',
        'Collaborated with design team to implement pixel-perfect designs',
        'Optimized application performance achieving 95+ Lighthouse scores',
        'Participated in agile development process and daily standups',
      ],
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Git', 'Figma'],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-card to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            My journey in software development and technical leadership
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-card border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-4 text-primary mb-2">
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;