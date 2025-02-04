import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "REST APIs"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Agile"],
    },
  ];

  return (
    <div className="section-padding bg-[#010409]" id="skills">
      <div className="max-w-4xl mx-auto fade-in px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8 text-center">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="bg-[#0d1117] border-[#30363d] hover:border-[#58a6ff] transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-[#58a6ff]">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-gray-300">
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;