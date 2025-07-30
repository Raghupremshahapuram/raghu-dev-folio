import { motion } from 'framer-motion';
import { Heart, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/shahapuram-raghuprem-777948178",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/Raghupremshahapuram",
      label: "GitHub"
    }
  ];

  return (
    <footer className="py-12 px-6 border-t border-border bg-muted/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
         
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent mb-2">
              Raghuprem Shahapuram
            </div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved.
            </p>
          </motion.div>

        
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center space-x-2 text-sm text-muted-foreground"
          >
            <span>Built with using React, Tailwind & AI too</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
        
           </motion.div>
          
          </motion.div>

        
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-4"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors group"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </div>

       
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8 pt-8 border-t border-border"
        >
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -2 }}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Back to top ↑
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;