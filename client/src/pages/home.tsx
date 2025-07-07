import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ExperienceSection from "@/components/experience-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import EducationSection from "@/components/education-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="font-sans bg-black text-white min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
        
        {/* Footer */}
        <footer className="glass-dark py-12 mt-20 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              <div className="mb-6">
                <h3 className="text-2xl font-bold gradient-text mb-2">Asif Ikbal</h3>
                <p className="text-white/70">Data Annotation Manager & AI Specialist</p>
              </div>
              
              <div className="flex justify-center space-x-6 mb-8">
                <a href="https://linkedin.com/in/asif-ikbal" className="glass w-12 h-12 rounded-lg flex items-center justify-center text-white/70 hover:text-white transition-all hover:scale-110 border border-white/20">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a href="https://github.com/asif-ikbal" className="glass w-12 h-12 rounded-lg flex items-center justify-center text-white/70 hover:text-white transition-all hover:scale-110 border border-white/20">
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a href="mailto:asifikbalprotik@gmail.com" className="glass w-12 h-12 rounded-lg flex items-center justify-center text-white/70 hover:text-white transition-all hover:scale-110 border border-white/20">
                  <i className="fas fa-envelope text-xl"></i>
                </a>
              </div>
              
              <div className="border-t border-white/10 pt-8">
                <p className="text-white/50 text-sm">
                  © 2025 Asif Ikbal. All rights reserved. | Built with modern web technologies
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
