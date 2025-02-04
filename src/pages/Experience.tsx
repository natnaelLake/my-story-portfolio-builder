import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Developer",
      company: "Tech Corp",
      period: "2021 - Present",
      description: "Led development of multiple full-stack applications",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions",
      period: "2019 - 2021",
      description: "Developed and maintained web applications",
      skills: ["JavaScript", "Python", "Docker"],
    },
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#e94560] mb-12">Experience</h1>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#1a1a2e]/50 p-6 rounded-lg border border-[#e94560]/20 hover:border-[#e94560]/40 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#e94560]">{exp.title}</h3>
                  <p className="text-gray-400">{exp.company}</p>
                </div>
                <span className="text-gray-500 mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-[#16213e] text-[#e94560]"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;