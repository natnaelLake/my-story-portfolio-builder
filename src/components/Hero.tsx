import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center bg-[#1a1a2e] pt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="text-[#e94560] bg-gradient-to-r from-[#e94560] to-[#ff6b6b] text-transparent bg-clip-text">
              Your Name
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Full Stack Developer | UI/UX Enthusiast | Problem Solver
          </p>
          <div className="flex gap-4 mb-8">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16213e] p-3 rounded-full hover:bg-[#e94560] transition-colors"
            >
              <Github className="h-5 w-5 text-gray-300" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16213e] p-3 rounded-full hover:bg-[#e94560] transition-colors"
            >
              <Linkedin className="h-5 w-5 text-gray-300" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:your.email@example.com"
              className="bg-[#16213e] p-3 rounded-full hover:bg-[#e94560] transition-colors"
            >
              <Mail className="h-5 w-5 text-gray-300" />
            </motion.a>
          </div>
          <Link to="/projects">
            <Button className="bg-[#e94560] hover:bg-[#ff6b6b] text-white px-8 py-6 text-lg group">
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="w-full aspect-square rounded-full overflow-hidden border-4 border-[#e94560] shadow-2xl shadow-[#e94560]/20">
            <img
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#e94560] rounded-full opacity-20 blur-2xl" />
          <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#ff6b6b] rounded-full opacity-20 blur-2xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;