import { MapPin, Calendar, Coffee, Users, Lightbulb, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import professionalHeadshot from '@/assets/professional-headshot.jpg';

const About = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechVision Solutions",
      period: "2023 - Present",
      description: "Leading frontend development for enterprise-level applications, mentoring junior developers, and implementing modern React patterns.",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupFlow Inc.",
      period: "2022 - 2023",
      description: "Developed end-to-end web applications using MERN stack, collaborated with design teams, and optimized application performance.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"]
    },
    {
      title: "Frontend Developer Intern",
      company: "WebCraft Agency",
      period: "2021 - 2022",
      description: "Built responsive web interfaces, learned modern development practices, and contributed to client projects under senior guidance.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React"]
    }
  ];

  const values = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaboration",
      description: "Believing in the power of teamwork and shared knowledge"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Passion",
      description: "Loving every aspect of the development process"
    }
  ];

  const personalFacts = [
    { icon: <MapPin className="h-5 w-5" />, text: "Based in San Francisco, CA" },
    { icon: <Calendar className="h-5 w-5" />, text: "3+ years of experience" },
    { icon: <Coffee className="h-5 w-5" />, text: "Powered by coffee and curiosity" },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Story */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <h1 className="text-5xl font-playfair font-bold text-primary">
                  About Me
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate full-stack developer who believes technology should be 
                  accessible, beautiful, and meaningful. My journey into web development started 
                  during college when I built my first website for a local nonprofit.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  What began as a simple HTML page sparked a deep fascination with the 
                  intersection of design and functionality. Today, I specialize in creating 
                  digital experiences that not only look stunning but also solve real-world problems.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring the latest design trends, 
                  contributing to open-source projects, or hiking the beautiful trails around 
                  the Bay Area. I believe that diverse experiences fuel creativity and make me 
                  a better developer.
                </p>
              </div>

              {/* Personal Facts */}
              <div className="space-y-4">
                {personalFacts.map((fact, index) => (
                  <div key={index} className="flex items-center gap-3 text-muted-foreground">
                    <div className="text-accent">{fact.icon}</div>
                    <span>{fact.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Image & Values */}
            <div className="space-y-8 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative group mx-auto w-fit">
                <div className="absolute -inset-4 bg-gradient-accent rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
                <div className="relative overflow-hidden rounded-3xl border border-border hover-lift">
                  <img
                    src={professionalHeadshot}
                    alt="Alex Johnson - About Me"
                    className="w-80 h-80 object-cover"
                  />
                </div>
              </div>

              {/* Core Values */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary text-center">Core Values</h3>
                <div className="grid gap-4">
                  {values.map((value, index) => (
                    <div key={value.title} className="card-elevated hover-lift">
                      <div className="flex items-start gap-4">
                        <div className="text-accent mt-1">{value.icon}</div>
                        <div>
                          <h4 className="font-semibold text-primary">{value.title}</h4>
                          <p className="text-sm text-muted-foreground">{value.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Professional Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              My path through the world of web development
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-primary"></div>

              {/* Experience Items */}
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`relative animate-fade-in ${
                      index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8 md:ml-auto'
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-accent rounded-full border-4 border-background shadow-glow flex items-center justify-center">
                      <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                    </div>

                    {/* Content Card */}
                    <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 1 ? 'md:ml-auto' : ''}`}>
                      <Card className="p-6 card-elevated hover-lift">
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                            <p className="text-accent font-medium">{exp.company}</p>
                            <p className="text-sm text-muted-foreground">{exp.period}</p>
                          </div>
                          <p className="text-muted-foreground">{exp.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;