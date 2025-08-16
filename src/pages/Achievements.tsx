import { Award, Trophy, Calendar, ExternalLink, BookOpen, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Achievements = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SA-2023-001",
      level: "Associate",
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-PD-2023-042",
      level: "Professional",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Meta Frontend Developer Professional",
      issuer: "Meta (Facebook)",
      date: "2022",
      credentialId: "META-FE-2022-187",
      level: "Professional",
      color: "from-blue-600 to-purple-600"
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2022",
      credentialId: "MDB-DEV-2022-298",
      level: "Associate",
      color: "from-green-500 to-teal-500"
    }
  ];

  const hackathons = [
    {
      event: "TechCrunch Disrupt Hackathon",
      position: "1st Place",
      year: "2023",
      project: "EcoTrack - Carbon Footprint Tracker",
      description: "Built an AI-powered app to help users track and reduce their carbon footprint",
      team: "4 members",
      tech: ["React Native", "Python", "TensorFlow", "Firebase"]
    },
    {
      event: "Stanford TreeHacks",
      position: "2nd Place",
      year: "2023",
      project: "HealthMind - Mental Wellness Platform",
      description: "Created a comprehensive mental health platform with peer support features",
      team: "3 members",
      tech: ["Next.js", "Node.js", "PostgreSQL", "WebRTC"]
    },
    {
      event: "Google Developer Challenge",
      position: "Top 10 Finalist",
      year: "2022",
      project: "SmartStudy - AI Learning Assistant",
      description: "Developed an AI-powered study companion for personalized learning",
      team: "2 members",
      tech: ["React", "Python", "OpenAI API", "MongoDB"]
    }
  ];

  const awards = [
    {
      title: "Outstanding Student Developer",
      organization: "Stanford Computer Science Department",
      year: "2023",
      description: "Recognized for exceptional academic performance and innovative projects"
    },
    {
      title: "Best UI/UX Design",
      organization: "Bay Area Developer Conference",
      year: "2022",
      description: "Awarded for portfolio website design and user experience"
    },
    {
      title: "Open Source Contributor Award",
      organization: "GitHub",
      year: "2022",
      description: "Acknowledged for significant contributions to open source projects"
    }
  ];

  const blogPosts = [
    {
      title: "Building Scalable React Applications: Best Practices for 2024",
      platform: "Medium",
      date: "Jan 2024",
      views: "15.3K",
      link: "#"
    },
    {
      title: "The Future of Web Development: Why WebAssembly Matters",
      platform: "Dev.to",
      date: "Dec 2023",
      views: "8.7K",
      link: "#"
    },
    {
      title: "Mastering TypeScript: Advanced Patterns and Techniques",
      platform: "Hashnode",
      date: "Nov 2023",
      views: "12.1K",
      link: "#"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-subtle">
      {/* Header */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl font-playfair font-bold text-primary mb-6">
              Achievements & Recognition
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A collection of certifications, awards, and recognitions that showcase my 
              commitment to continuous learning and excellence in web development.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="h-8 w-8 text-accent" />
              <h2 className="text-3xl font-playfair font-bold text-primary">
                Professional Certifications
              </h2>
            </div>
            <p className="text-muted-foreground">
              Industry-recognized credentials demonstrating technical expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="card-elevated hover-lift group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary">{cert.title}</h3>
                    <p className="text-accent font-medium">{cert.issuer}</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {cert.date}
                    </div>
                    <Badge variant="secondary">{cert.level}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono">
                    ID: {cert.credentialId}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathons */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trophy className="h-8 w-8 text-accent" />
              <h2 className="text-3xl font-playfair font-bold text-primary">
                Hackathon Victories
              </h2>
            </div>
            <p className="text-muted-foreground">
              Competitive programming achievements and innovative project recognition
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {hackathons.map((hackathon, index) => (
              <div
                key={index}
                className="card-gradient hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        {hackathon.position}
                      </div>
                      <div className="text-muted-foreground text-sm">{hackathon.year}</div>
                    </div>
                    <h3 className="font-semibold text-xl text-primary">{hackathon.event}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Users className="h-4 w-4" />
                      {hackathon.team}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 space-y-4">
                    <div>
                      <h4 className="font-semibold text-accent text-lg">{hackathon.project}</h4>
                      <p className="text-muted-foreground">{hackathon.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {hackathon.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-playfair font-bold text-primary mb-4">
              Awards & Recognition
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {awards.map((award, index) => (
              <div
                key={index}
                className="card-elevated hover-lift text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-accent rounded-full flex items-center justify-center">
                    <Trophy className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-2">{award.title}</h3>
                    <p className="text-accent font-medium">{award.organization}</p>
                    <p className="text-sm text-muted-foreground">{award.year}</p>
                  </div>
                  <p className="text-muted-foreground text-sm">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="h-8 w-8 text-accent" />
              <h2 className="text-3xl font-playfair font-bold text-primary">
                Technical Publications
              </h2>
            </div>
            <p className="text-muted-foreground">
              Sharing knowledge through technical writing and community contributions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="card-elevated hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-2 leading-tight">
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="text-accent font-medium">{post.platform}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{post.views} views</span>
                    <Button variant="ghost" size="sm" className="text-accent hover:text-accent-foreground hover:bg-accent">
                      Read More
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;