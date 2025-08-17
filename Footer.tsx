import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/20 bg-gradient-to-r from-card to-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold glow-text text-primary mb-4">VENU</h3>
            <p className="text-muted-foreground">
              Full Stack Developer passionate about creating innovative solutions 
              and building meaningful digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'MongoDB'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" fill="currentColor" />
              <span>and</span>
              <Code className="h-4 w-4 text-primary" />
              <span>by Gugulothu Venu Nayak</span>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <Coffee className="h-4 w-4" />
              <span>© {currentYear} All rights reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;