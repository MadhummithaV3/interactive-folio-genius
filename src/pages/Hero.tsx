import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import professionalHeadshot from '@/assets/professional-headshot.jpg';

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Section - CTAs */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-hero text-primary-foreground">
                Full Stack
                <span className="text-gradient block">Developer</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-lg leading-relaxed">
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
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">50+</div>
                <div className="text-sm text-primary-foreground/70">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">3+</div>
                <div className="text-sm text-primary-foreground/70">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-primary-foreground/70">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          {/* Right Section - Professional Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-accent rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
              <div className="relative overflow-hidden rounded-3xl border-4 border-primary-foreground/20 hover-lift">
                <img
                  src={professionalHeadshot}
                  alt="Professional headshot"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold shadow-glow animate-bounce">
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