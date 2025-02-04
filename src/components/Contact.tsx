import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <div className="section-padding bg-[#010409]" id="contact">
      <div className="max-w-xl mx-auto fade-in px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8 text-center">
          Get In Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input placeholder="Your Name" required className="bg-[#0d1117] border-[#30363d] text-gray-300 focus:border-[#58a6ff]" />
          </div>
          <div>
            <Input type="email" placeholder="Your Email" required className="bg-[#0d1117] border-[#30363d] text-gray-300 focus:border-[#58a6ff]" />
          </div>
          <div>
            <Textarea
              placeholder="Your Message"
              className="min-h-[150px] bg-[#0d1117] border-[#30363d] text-gray-300 focus:border-[#58a6ff]"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-[#238636] hover:bg-[#2ea043] text-white">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;