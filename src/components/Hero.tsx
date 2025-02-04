import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto text-center fade-in">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="text-primary">Your Name</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Full Stack Developer | UI/UX Enthusiast | Problem Solver
        </p>
        <div className="flex gap-4 justify-center mb-8">
          <Button variant="outline" size="icon">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon">
            <a href="mailto:your.email@example.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          View My Work
        </Button>
      </div>
    </div>
  );
};

export default Hero;