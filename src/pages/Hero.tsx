import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import professionalHeadshot from '@/assets/professional-headshot.jpg';

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Section - Content */}
          <div className="space-y-12 animate-fade-in">
            <div className="space-y-8">
              <h1 className="text-hero text-primary">
                Full Stack
                <span className="text-gradient block">Developer</span>
              </h1>
              <p className="body-large max-w-lg">
                Crafting exceptional digital experiences with modern technologies. 
                Specializing in MERN stack development, UI/UX design, and digital marketing strategies.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero-primary group">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="btn-hero-secondary group">
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-light text-accent font-playfair">50+</div>
                <div className="text-sm text-muted-foreground font-medium tracking-wide">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-accent font-playfair">3+</div>
                <div className="text-sm text-muted-foreground font-medium tracking-wide">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-accent font-playfair">100%</div>
                <div className="text-sm text-muted-foreground font-medium tracking-wide">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          {/* Right Section - Professional Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-accent rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-700 blur-2xl"></div>
              <div className="relative overflow-hidden rounded-2xl border border-border hover-lift">
                <img
                  src={professionalHeadshot}
                  alt="Professional headshot showcasing expertise in web development"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
              </div>
              {/* Professional Badge */}
              <div className="absolute -bottom-3 -right-3 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium shadow-soft text-sm tracking-wide">
                Available for Work
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;