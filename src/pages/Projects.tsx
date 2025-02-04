import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A full-stack web application built with React and Node.js",
      tech: ["React", "Node.js", "PostgreSQL"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Project Two",
      description: "Mobile-responsive e-commerce platform",
      tech: ["Next.js", "Tailwind CSS", "Stripe"],
      github: "https://github.com",
      live: "https://example.com",
    },
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#e94560] mb-12">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-[#1a1a2e]/50 border border-[#e94560]/20 hover:border-[#e94560]/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-[#e94560]">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#16213e] text-[#e94560] px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-[#16213e] border-[#e94560]/20 hover:border-[#e94560]/40 text-gray-300"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-[#16213e] border-[#e94560]/20 hover:border-[#e94560]/40 text-gray-300"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;