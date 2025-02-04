import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center bg-[#0d1117] section-padding">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
        <div className="text-left fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-6">
            Hi, I'm <span className="text-[#58a6ff]">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Full Stack Developer | UI/UX Enthusiast | Problem Solver
          </p>
          <div className="flex gap-4 mb-8">
            <Button variant="outline" size="icon" className="bg-[#21262d] border-[#30363d] hover:bg-[#30363d] text-gray-300">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="bg-[#21262d] border-[#30363d] hover:bg-[#30363d] text-gray-300">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="bg-[#21262d] border-[#30363d] hover:bg-[#30363d] text-gray-300">
              <a href="mailto:your.email@example.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
          <Link to="#projects">
            <Button className="bg-[#238636] hover:bg-[#2ea043] text-white px-8 py-6 text-lg">
              View My Work
            </Button>
          </Link>
        </div>
        <div className="relative fade-in">
          <div className="w-full aspect-square rounded-full overflow-hidden border-4 border-[#30363d] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;