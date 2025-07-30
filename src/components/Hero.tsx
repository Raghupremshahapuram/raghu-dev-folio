import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileAvatar from '@/assets/profile-avatar.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold leading-tight"
              >
                Hi, I'm{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Raghuprem Shahapuram
                </span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-muted-foreground font-medium"
              >
                QA turned Full-Stack Developer
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg text-muted-foreground max-w-lg leading-relaxed"
              >
                I build scalable apps with AI-enhanced development, blending QA perfectionism 
                with creative full-stack solutions using React, Node.js, and PostgreSQL.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="group bg-gradient-primary hover:shadow-card-hover transition-all duration-300"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Hire Me
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative group"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500 rounded-full" />
                
                {/* Glass Card Effect */}
                <div className="relative bg-gradient-glass backdrop-blur-glass border border-glass-border rounded-3xl p-6 shadow-3d transform hover:scale-105 transition-all duration-500">
                  <img
                    src={profileAvatar}
                    alt="Raghuprem Shahapuram"
                    className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl"
                  />
                  
                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-60"
                  />
                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-glow rounded-full opacity-40"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;