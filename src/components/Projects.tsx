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
    <div className="section-padding bg-[#0d1117]" id="projects">
      <div className="max-w-4xl mx-auto fade-in px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="bg-[#0d1117] border-[#30363d] hover:border-[#58a6ff] transition-colors">
              <CardHeader>
                <CardTitle className="text-xl text-[#58a6ff]">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#21262d] text-[#58a6ff] px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="bg-[#21262d] border-[#30363d] hover:bg-[#30363d] text-gray-300">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="bg-[#21262d] border-[#30363d] hover:bg-[#30363d] text-gray-300">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;