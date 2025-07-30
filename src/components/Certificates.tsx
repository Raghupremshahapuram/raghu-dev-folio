import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certificates = () => {
  const certificates = [
    {
      title: "React Certification",
      provider: "Edureka",
      description: "Comprehensive React.js development course covering hooks, context, and modern practices",
      skills: ["React.js", "Hooks", "Context API", "Component Design"],
      link: "#",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Angular Certification",
      provider: "Edureka",
      description: "Angular framework certification covering components, services, and TypeScript",
      skills: ["Angular", "TypeScript", "Services", "RxJS"],
      link: "#",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section id="certificates" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Certificates</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Continuous learning and professional development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                rotateY: 5,
                scale: 1.02
              }}
              className="group perspective-1000"
            >
              <div className="relative bg-gradient-glass backdrop-blur-glass border border-glass-border rounded-2xl overflow-hidden shadow-3d hover:shadow-card-hover transition-all duration-500 transform-gpu">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative p-8 space-y-6">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-full bg-gradient-to-br ${cert.color}`}>
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{cert.title}</h3>
                        <p className="text-sm text-muted-foreground">{cert.provider}</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground">Key Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Certificate
                    </Button>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-glass backdrop-blur-glass border border-glass-border rounded-2xl p-6 max-w-2xl mx-auto shadow-card">
            <h3 className="text-lg font-semibold mb-3">Continuous Learning</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Always expanding my knowledge through online courses, workshops, and hands-on projects. 
              Currently exploring advanced React patterns and AI integration techniques.
            </p>
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-primary-glow rounded-full animate-pulse delay-100" />
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-200" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;