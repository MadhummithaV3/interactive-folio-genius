import { Code, Palette, TrendingUp, GraduationCap, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import professionalHeadshot from '@/assets/professional-headshot.jpg';

const Home = () => {
  const skills = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      description: "React, TypeScript, Tailwind CSS, Next.js",
      level: 95
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Web Design",
      description: "UI/UX Design, Figma, Adobe Creative Suite",
      level: 90
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Digital Marketing",
      description: "SEO, Social Media, Analytics, Content Strategy",
      level: 85
    }
  ];

  const projects = [
    { name: "E-commerce Platform", tech: "React, Node.js, MongoDB", image: "🛒" },
    { name: "Portfolio Website", tech: "Next.js, Tailwind CSS", image: "💼" },
    { name: "Task Management App", tech: "React, Express, PostgreSQL", image: "📋" },
    { name: "Social Media Dashboard", tech: "Vue.js, Python, Django", image: "📱" },
    { name: "Learning Management System", tech: "React, Spring Boot", image: "📚" },
    { name: "Real Estate Platform", tech: "Angular, .NET Core", image: "🏠" }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-8">
                <h1 className="text-display text-primary">
                  Hello, I'm
                  <span className="text-gradient block">Alex Johnson</span>
                </h1>
                <p className="body-large">
                  A passionate Full Stack Developer with over 3 years of experience in creating 
                  innovative web solutions. I specialize in modern JavaScript frameworks, 
                  particularly the MERN stack, and have a keen eye for design and user experience.
                </p>
                <p className="body-regular">
                  My journey began during my Computer Science studies, where I discovered my 
                  love for both the technical and creative aspects of web development. Today, 
                  I combine code craftsmanship with design thinking to build digital experiences 
                  that users love.
                </p>
              </div>

              {/* Education */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-accent" />
                  Education
                </h3>
                <div className="card-elevated">
                  <h4 className="font-semibold text-lg">Bachelor of Science in Computer Science</h4>
                  <p className="text-accent font-medium">Stanford University</p>
                  <p className="text-muted-foreground">2019 - 2023 • GPA: 3.8/4.0</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Specialized in Software Engineering and Human-Computer Interaction
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-accent rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
                <div className="relative overflow-hidden rounded-3xl border border-border hover-lift">
                  <img
                    src={professionalHeadshot}
                    alt="Alex Johnson - Full Stack Developer"
                    className="w-80 h-96 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="heading-primary mb-6">
              Core Specializations
            </h2>
            <p className="body-large max-w-2xl mx-auto">
              Expertise across the full spectrum of modern web development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="card-gradient hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-accent mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-2">{skill.title}</h3>
                <p className="text-muted-foreground mb-4">{skill.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Proficiency</span>
                    <span className="text-accent font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div
                      className="bg-gradient-accent h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Recent Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              A showcase of my latest work and technical achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className="card-elevated hover-lift group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <h3 className="font-semibold text-lg text-primary mb-2">{project.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.tech}</p>
                <div className="flex items-center gap-1 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;