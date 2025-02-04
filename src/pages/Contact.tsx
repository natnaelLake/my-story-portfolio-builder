import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:your.email@example.com",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com",
    },
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#e94560] mb-12">Get In Touch</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-gray-200 mb-6">Contact Form</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  required
                  className="bg-[#1a1a2e]/50 border-[#e94560]/20 focus:border-[#e94560]/40 text-gray-300"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-[#1a1a2e]/50 border-[#e94560]/20 focus:border-[#e94560]/40 text-gray-300"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  className="min-h-[150px] bg-[#1a1a2e]/50 border-[#e94560]/20 focus:border-[#e94560]/40 text-gray-300"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-[#e94560] hover:bg-[#ff6b6b] text-white">
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-gray-200 mb-6">Connect With Me</h2>
            <div className="space-y-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-[#e94560] transition-colors p-3 rounded-lg bg-[#1a1a2e]/50 border border-[#e94560]/20 hover:border-[#e94560]/40"
                  >
                    <Icon className="h-5 w-5" />
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;