import { motion } from 'framer-motion';
import { ExternalLink, Github, Lock, Film, Ticket, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const project = {
    title: "Booking Time",
    description: "A comprehensive movie booking platform with AI-powered seat selection and real-time features",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "PostgreSQL", "ChatGPT"],
    features: [
      {
        icon: Lock,
        text: "Secure authentication system"
      },
      {
        icon: Film,
        text: "Live movie listings"
      },
      {
        icon: Ticket,
        text: "Seat booking + QR tickets"
      },
      {
        icon: Bot,
        text: "AI chatbot seat auto-fill"
      }
    ],
    links: {
      demo: "https://fbooking.netlify.app/",
      frontend: "https://github.com/Raghupremshahapuram/Booking_time",
      backend: "https://github.com/Raghupremshahapuram/Chatbotapi-"
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Building innovative solutions with modern technologies
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -10 }}
            className="group"
          >
            <div className="bg-gradient-glass backdrop-blur-glass border border-glass-border rounded-3xl p-8 shadow-3d hover:shadow-card-hover transition-all duration-500">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
               
                <div className="relative overflow-hidden rounded-2xl bg-gradient-secondary">
                  <div className="aspect-video flex items-center justify-center">
                    <Film className="w-16 h-16 text-white/50" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                   
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                 
                  <div className="space-y-3">
                    {project.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center space-x-3 text-sm"
                      >
                        <div className="p-1.5 rounded-full bg-primary/10">
                          <feature.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>

                                  
                   <div className="flex flex-wrap gap-3">
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="default"
                        size="sm"
                        className="bg-gradient-primary hover:shadow-card transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </a>

                    <a href={project.links.frontend} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <Github className="w-4 h-4 mr-2" />
                        Frontend
                      </Button>
                    </a>

                    <a href={project.links.backend} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <Github className="w-4 h-4 mr-2" />
                        Backend
                      </Button>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-muted/50 rounded-full border border-border">
              <span className="text-sm text-muted-foreground">More exciting projects coming soon</span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-primary-glow rounded-full animate-pulse delay-100" />
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-200" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;