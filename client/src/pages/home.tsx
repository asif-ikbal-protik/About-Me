import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ExperienceSection from "@/components/experience-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import EducationSection from "@/components/education-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="font-sans bg-slate-50 text-slate-800">
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold gradient-text mb-2">Asif Ikbal</h3>
              <p className="text-slate-400">Data Annotation Manager & AI Specialist</p>
            </div>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://linkedin.com/in/asif-ikbal" className="text-slate-400 hover:text-white transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="https://github.com/asif-ikbal" className="text-slate-400 hover:text-white transition-colors">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="mailto:asifikbalprotik@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
            
            <div className="border-t border-slate-700 pt-8">
              <p className="text-slate-400 text-sm">
                © 2025 Asif Ikbal. All rights reserved. | Built with modern web technologies
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
