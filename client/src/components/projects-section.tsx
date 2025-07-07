import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const projects = [
    {
      title: "3D Point Cloud Segmentation",
      description: "Advanced annotation workflows for autonomous navigation systems with precise 3D spatial understanding.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      category: "Computer Vision",
      tags: ["3D Annotation", "Autonomous Vehicles"],
      gradient: "from-primary-500 to-cyan-500"
    },
    {
      title: "Multimodal Sentiment Analysis",
      description: "Banking sector classification project combining text and intent analysis for customer experience optimization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      category: "NLP",
      tags: ["Banking", "Multimodal"],
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "RLHF Chatbot Optimization",
      description: "Reinforcement Learning with Human Feedback implementation for chatbot performance enhancement.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      category: "RLHF",
      tags: ["Reinforcement Learning", "Chatbots"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Synthetic Dataset Curation",
      description: "Large-scale multilingual dataset creation for LLM training with synthetic data generation and validation.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      category: "LLM",
      tags: ["Multilingual", "Synthetic Data"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Defect Detection for Aerial Vehicles",
      description: "Computer vision system for automated defect detection in aerial vehicles with high-precision annotation workflows.",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      category: "Vision",
      tags: ["Defect Detection", "Aviation"],
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      title: "Naval Ship Docking Automation",
      description: "Visual tracking system for automated naval ship docking with precision object detection and movement prediction.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      category: "Tracking",
      tags: ["Naval", "Automation"],
      gradient: "from-teal-500 to-blue-600"
    }
  ];

  return (
    <section id="projects" className="py-20" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Key AI annotation projects showcasing expertise across diverse domains and cutting-edge technologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card overflow-hidden hover:scale-105 transition-all duration-300 border-white/20 animate-on-scroll">
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80" 
                />
                <Badge className="absolute top-4 right-4 glass text-white border-white/30">
                  {project.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} className="glass text-white/90 text-xs border-white/30">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
