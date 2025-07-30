import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Download, 
  Send, 
  MapPin,
  QrCode 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import portfolioQR from '@/assets/portfolio-qr.jpg';

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Oops! That email doesn't look right 🤖"),
  message: z.string().min(50, "Give me a few more words — I love detail!")
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent! 🚀",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    
    reset();
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "raghupremshahapuram@gmail.com",
      href: "mailto:raghupremshahapuram@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9603143486",
      href: "tel:+919603143486"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "shahapuram-raghuprem",
      href: "https://linkedin.com/in/shahapuram-raghuprem-777948178"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Raghupremshahapuram",
      href: "https://github.com/Raghupremshahapuram"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Let's build something amazing together. I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-glass backdrop-blur-glass border border-glass-border rounded-2xl p-8 shadow-3d">
              <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    {...register('name')}
                    placeholder="Your full name"
                    className={errors.name ? 'border-destructive' : ''}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="your.email@example.com"
                    className={errors.email ? 'border-destructive' : ''}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    {...register('message')}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className={errors.message ? 'border-destructive' : ''}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-card transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & QR */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Information */}
            <div className="bg-gradient-glass backdrop-blur-glass border border-glass-border rounded-2xl p-8 shadow-3d">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.label === 'LinkedIn' || info.label === 'GitHub' ? '_blank' : undefined}
                    rel={info.label === 'LinkedIn' || info.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-accent/50 transition-all duration-300 group"
                  >
                    <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Resume Download & QR Code */}
            <div className="grid grid-cols-2 gap-4">
              {/* Resume Download */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-glass backdrop-blur-glass border border-glass-border rounded-xl p-6 shadow-card text-center"
              >
                <Download className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-sm font-medium mb-3">Download Resume</p>
                <Button size="sm" variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  PDF
                </Button>
              </motion.div>

              {/* QR Code */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-glass backdrop-blur-glass border border-glass-border rounded-xl p-6 shadow-card text-center"
              >
                <div className="relative mx-auto mb-3 w-16 h-16">
                  <img
                    src={portfolioQR}
                    alt="Portfolio QR Code"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className="text-xs text-muted-foreground">Scan for mobile</p>
              </motion.div>
            </div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-glass backdrop-blur-glass border border-glass-border rounded-2xl p-6 shadow-card text-center"
            >
              <MapPin className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="font-medium">Based in India</p>
              <p className="text-sm text-muted-foreground">Available for remote work worldwide</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;