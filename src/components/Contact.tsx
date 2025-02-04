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
    <div className="section-padding bg-gray-50" id="contact">
      <div className="max-w-xl mx-auto fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Get In Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input placeholder="Your Name" required />
          </div>
          <div>
            <Input type="email" placeholder="Your Email" required />
          </div>
          <div>
            <Textarea
              placeholder="Your Message"
              className="min-h-[150px]"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;