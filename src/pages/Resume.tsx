import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Resume = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    // Replace with actual resume download logic
    toast({
      title: "Resume Download",
      description: "Your resume is being downloaded...",
    });
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-[#e94560]">Resume</h1>
          <Button
            onClick={handleDownload}
            className="bg-[#e94560] hover:bg-[#ff6b6b] text-white"
          >
            <FileDown className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>
        
        <div className="space-y-8 text-gray-300">
          <section className="bg-[#1a1a2e]/50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#e94560]">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium">Computer Science</h3>
                <p className="text-gray-400">University Name • 2018-2022</p>
              </div>
            </div>
          </section>

          <section className="bg-[#1a1a2e]/50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#e94560]">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["React", "TypeScript", "Node.js", "Python", "AWS", "Docker"].map((skill) => (
                <div
                  key={skill}
                  className="bg-[#16213e] px-4 py-2 rounded-full text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;