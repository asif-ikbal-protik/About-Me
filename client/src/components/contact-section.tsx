import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I will get back to you soon.",
      });
      
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to collaborate on your next AI annotation project? Let's discuss how I can help scale your data operations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-on-scroll">
            <h3 className="text-xl font-semibold text-slate-800 mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="text-primary-600 h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-slate-800">Email</p>
                  <a href="mailto:asifikbalprotik@gmail.com" className="text-primary-600 hover:text-primary-700">
                    asifikbalprotik@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="text-primary-600 h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-slate-800">Phone</p>
                  <a href="tel:+8801878044854" className="text-primary-600 hover:text-primary-700">
                    +880 1878 044854
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="text-primary-600 h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-slate-800">Location</p>
                  <p className="text-slate-600">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold text-slate-800 mb-4">Connect on Social</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/asif-ikbal" 
                  className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-colors"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a 
                  href="https://github.com/asif-ikbal" 
                  className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-colors"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-on-scroll">
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Discussion"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell me about your project requirements..."
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
