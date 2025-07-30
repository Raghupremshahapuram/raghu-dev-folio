import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code2, CheckCircle } from 'lucide-react';

const About = () => {
  const timelineItems = [
    {
      icon: GraduationCap,
      title: "Diploma in Mechanical Engineering",
      period: "2018-2021",
      description: "Built a strong foundation in engineering principles and problem-solving",
      color: "bg-blue-500"
    },
    {
      icon: GraduationCap,
      title: "B.Tech in Mechanical Engineering",
      period: "2021-2024",
      description: "Advanced technical knowledge and analytical thinking skills",
      color: "bg-green-500"
    },
    {
      icon: Briefcase,
      title: "Quality Analyst",
      period: "2023-2024",
      description: "Developed meticulous attention to detail and testing methodologies",
      color: "bg-purple-500"
    },
    {
      icon: Code2,
      title: "Full-Stack Developer",
      period: "2024-Present",
      description: "Building scalable applications with modern technologies and AI integration",
      color: "bg-primary"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My journey from mechanical engineering to full-stack development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-primary" />
            
            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start space-x-4"
                >
                  <div className={`relative z-10 p-2 rounded-full ${item.color} shadow-lg`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  
                  <div className="flex-1 bg-card rounded-lg p-6 border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <span className="text-sm text-muted-foreground font-medium">{item.period}</span>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gradient-glass backdrop-blur-glass border border-glass-border rounded-2xl p-8 shadow-3d">
              <blockquote className="text-lg leading-relaxed text-muted-foreground italic mb-6">
                "I started in Mechanical Engineering, became a Quality Analyst, and now build 
                AI-driven full-stack apps using React, Node, and PostgreSQL. I blend QA 
                perfectionism with dev creativity."
              </blockquote>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">QA perfectionism meets development creativity</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">AI-enhanced development approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Full-stack expertise in modern technologies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Strong engineering and analytical background</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;