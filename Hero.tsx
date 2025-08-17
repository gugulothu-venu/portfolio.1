import { Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass-card p-12 rounded-3xl">
          {/* Profile Image */}
          <div className="relative mb-8">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-secondary opacity-80"></div>
              </div>
            </div>
            <div className="absolute inset-0 w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse"></div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 glow-text bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            GUGULOTHU VENU NAYAK
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
            Full Stack Developer & Problem Solver
          </h2>

          {/* Specialization */}
          <div className="flex items-center justify-center mb-8">
            <span className="text-lg text-foreground/80">Specialized in:</span>
            <span className="ml-2 text-lg text-primary font-semibold">Web Development</span>
            <span className="ml-1 text-primary animate-pulse">|</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="glass-button bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/80 hover:to-secondary/80"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-button border-primary/30 text-primary hover:bg-primary/10"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;