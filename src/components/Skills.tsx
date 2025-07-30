import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "QA & Testing",
      skills: ["Manual Testing", "Articulate 360", "LMS", "Test Automation", "Agile Methodology"],
      color: "bg-blue-500/10 text-blue-600 border-blue-500/20"
    },
    {
      title: "Development",
      skills: ["React", "Node.js", "PostgreSQL", "CSS3", "JavaScript", "TypeScript", "HTML5"],
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      title: "AI & Tools",
      skills: ["ChatGPT", "Gemini", "GitHub Actions", "Git", "VS Code", "Figma"],
      color: "bg-purple-500/10 text-purple-600 border-purple-500/20"
    },
    {
      title: "Platforms & Methods",
      skills: ["Storyline", "Agile", "Scrum", "REST APIs", "Responsive Design", "CI/CD"],
      color: "bg-green-500/10 text-green-600 border-green-500/20"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A blend of QA expertise and full-stack development capabilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-glass backdrop-blur-glass border border-glass-border rounded-2xl p-8 h-full shadow-card hover:shadow-card-hover transition-all duration-300 group-hover:transform group-hover:-translate-y-2">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <span className="w-3 h-3 rounded-full bg-gradient-primary mr-3" />
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: (categoryIndex * 0.1) + (skillIndex * 0.05) 
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge
                        variant="secondary"
                        className={`px-4 py-2 text-sm font-medium cursor-default transition-all duration-300 hover:shadow-md ${category.color}`}
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-glass backdrop-blur-glass border border-glass-border rounded-2xl p-8 max-w-3xl mx-auto shadow-3d">
            <h3 className="text-xl font-semibold mb-4">Core Strengths</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">QA</span>
                </div>
                <p className="text-muted-foreground">
                  Meticulous testing approach with attention to detail
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">FS</span>
                </div>
                <p className="text-muted-foreground">
                  Full-stack development with modern frameworks
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">AI</span>
                </div>
                <p className="text-muted-foreground">
                  AI-enhanced development and problem-solving
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;