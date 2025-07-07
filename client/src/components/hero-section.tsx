import { Download, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const downloadResume = () => {
    // Create a blob from the resume data and download it
    const link = document.createElement('a');
    link.href = '/api/download-resume'; // This would be implemented on the backend
    link.download = 'Asif_Ikbal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    const target = document.querySelector('#contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToExperience = () => {
    const target = document.querySelector('#experience');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-cyan-50">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="animate-fade-in">
          {/* Professional Avatar */}
          <div className="mb-8 mx-auto w-32 h-32 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
            AI
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
            <span className="gradient-text">Asif Ikbal</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-4 font-medium">
            Data Annotation Manager & AI Specialist
          </p>
          
          <p className="text-lg text-slate-500 mb-8 max-w-3xl mx-auto leading-relaxed">
            Scaling high-quality datasets across vision, NLP, and multimodal domains with expertise in SFT, RLHF, and HITL operations. Driving operational precision and measurable model performance uplift.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              onClick={downloadResume}
              className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="px-8 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-600 hover:text-white transition-all"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 text-2xl">
            <a href="https://linkedin.com/in/asif-ikbal" className="text-slate-400 hover:text-primary-600 transition-colors transform hover:scale-110">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/asif-ikbal" className="text-slate-400 hover:text-primary-600 transition-colors transform hover:scale-110">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:asifikbalprotik@gmail.com" className="text-slate-400 hover:text-primary-600 transition-colors transform hover:scale-110">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToExperience} className="text-slate-400 hover:text-primary-600">
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
}
