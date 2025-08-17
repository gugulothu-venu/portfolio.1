import { ExternalLink, Github, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with modern UI/UX, secure payment integration, and real-time inventory management.',
      image: '/placeholder.svg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'JWT'],
      featured: true,
      githubUrl: 'https://github.com/',
      liveUrl: 'https://example.com/',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/placeholder.svg',
      tags: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      featured: false,
      githubUrl: 'https://github.com/',
      liveUrl: 'https://example.com/',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts, historical data visualization, and severe weather alerts.',
      image: '/placeholder.svg',
      tags: ['Vue.js', 'Chart.js', 'OpenWeather API', 'PWA'],
      featured: false,
      githubUrl: 'https://github.com/',
      liveUrl: 'https://example.com/',
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Comprehensive social media analytics platform with sentiment analysis, engagement tracking, and automated reporting.',
      image: '/placeholder.svg',
      tags: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Celery'],
      featured: true,
      githubUrl: 'https://github.com/',
      liveUrl: 'https://example.com/',
    },
    {
      id: 5,
      title: 'Cryptocurrency Tracker',
      description: 'Real-time cryptocurrency tracking application with portfolio management, price alerts, and market analysis tools.',
      image: '/placeholder.svg',
      tags: ['React Native', 'Redux', 'CoinGecko API', 'SQLite'],
      featured: false,
      githubUrl: 'https://github.com/',
      liveUrl: 'https://example.com/',
    },
    {
      id: 6,
      title: 'AI Chatbot Platform',
      description: 'Intelligent chatbot platform with natural language processing, multi-language support, and custom training capabilities.',
      image: '/placeholder.svg',
      tags: ['Python', 'TensorFlow', 'Flask', 'WebSocket', 'NLP'],
      featured: true,
      githubUrl: 'https://github.com/',
      liveUrl: 'https://example.com/',
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my best work in web development, mobile apps, and AI/ML projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card group">
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-xl mb-4">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-secondary opacity-60"></div>
                </div>
                {project.featured && (
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-primary/80 text-primary-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 glass-button border-primary/30 text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/80 hover:to-secondary/80"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="glass-button border-primary/30 text-primary hover:bg-primary/10"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;