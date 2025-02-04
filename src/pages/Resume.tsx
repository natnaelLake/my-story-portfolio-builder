import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";

const Resume = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "Resume Download",
      description: "Your resume is being downloaded...",
    });
  };

  return (
    <div className="pt-20 min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold text-primary">Professional Resume</h1>
            <p className="text-muted-foreground mt-2">Full Stack Developer</p>
          </div>
          <Button
            onClick={handleDownload}
            className="bg-primary hover:bg-primary/90"
          >
            <FileDown className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>
        
        <div className="space-y-8">
          {/* Summary Section */}
          <section className="bg-card p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Professional Summary</h2>
            <p className="text-card-foreground">
              Experienced Full Stack Developer with a proven track record in building scalable web applications
              and implementing responsive designs. Passionate about creating efficient, maintainable code and
              staying current with emerging technologies.
            </p>
          </section>

          {/* Education Section */}
          <section className="bg-card p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium">Bachelor of Science in Computer Science</h3>
                <p className="text-muted-foreground">University Name • 2018-2022</p>
                <p className="mt-2 text-card-foreground">
                  Relevant coursework: Data Structures, Algorithms, Web Development, Database Management
                </p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="bg-card p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Technical Skills</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Programming Languages & Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "TypeScript", "Python", "React", "Node.js", "Express", "Next.js"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Docker", "AWS", "MongoDB", "PostgreSQL", "Redis", "Linux"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section className="bg-card p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Work Experience</h2>
            <div className="space-y-6">
              <div>
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-medium">Senior Full Stack Developer</h3>
                  <span className="text-muted-foreground">2021 - Present</span>
                </div>
                <p className="text-muted-foreground mb-2">Tech Company Name</p>
                <ul className="list-disc list-inside space-y-2 text-card-foreground">
                  <li>Led development of microservices-based architecture</li>
                  <li>Implemented CI/CD pipelines reducing deployment time by 40%</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                </ul>
              </div>
              
              <div>
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-medium">Full Stack Developer</h3>
                  <span className="text-muted-foreground">2019 - 2021</span>
                </div>
                <p className="text-muted-foreground mb-2">Previous Company Name</p>
                <ul className="list-disc list-inside space-y-2 text-card-foreground">
                  <li>Developed and maintained multiple client-facing applications</li>
                  <li>Optimized database queries improving performance by 50%</li>
                  <li>Implemented responsive designs for mobile-first applications</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="bg-card p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Certifications</h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-medium">AWS Certified Developer</h3>
                <p className="text-muted-foreground">Amazon Web Services • 2023</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Professional Scrum Master I</h3>
                <p className="text-muted-foreground">Scrum.org • 2022</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;