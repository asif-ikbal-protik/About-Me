import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function ExperienceSection() {
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

  const experiences = [
    {
      current: true,
      period: "April 2025 – Present",
      title: "Data Annotation Manager",
      company: "Appalux Global IT",
      description: "Specializing in scalable annotation workflows for computer vision, NLP, multimodal AI, and Generative AI with expertise in QA/QC protocols and Human-in-the-Loop processes.",
      highlights: [
        "Manage large-scale annotation pipelines for SFT, RLHF, and HITL workflows",
        "Lead multi-tier annotation teams and feedback-driven QA loops",
        "Maintain annotation platforms (CVAT, Label Studio, MLOps integrations)"
      ]
    },
    {
      current: false,
      period: "December 2023 – April 2025",
      title: "Associate Delivery Lead",
      company: "Quantigo AI",
      description: "Oversaw comprehensive management of data annotation projects, integrating client collaboration, technical coordination, and quality assurance.",
      highlights: [
        "Led client engagement and structured workflows",
        "Built classification schemas and benchmark plans",
        "Delivered transparent reporting with milestones"
      ]
    },
    {
      current: false,
      period: "January 2023 – December 2023",
      title: "Associate",
      company: "Quantanite",
      description: "Executed client assignments with precision, enhanced task quality, and supported supervisory functions to boost team performance.",
      highlights: [
        "Supervised operational output and task accuracy",
        "Delivered client-ready deliverables using MS Office and G-Suite",
        "Exceeded client expectations consistently"
      ]
    },
    {
      current: false,
      period: "August 2022 – January 2023",
      title: "Data Annotator",
      company: "Bengali AI",
      description: "Contributed to Document Layout Analysis Project with high-precision annotations for Bengali language digitization.",
      highlights: [
        "Labeled documents in Bengali for layout analysis projects",
        "Applied level box tools for structural accuracy under deadlines"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Professional Experience</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Proven track record in leading data annotation projects and managing AI/ML workflows across diverse industries.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary-200"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 ${exp.current ? 'bg-primary-600' : 'bg-slate-400'} rounded-full border-4 border-white shadow-lg`}></div>
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 1 ? 'md:pl-8' : 'md:pr-8'} animate-on-scroll`}>
                  <Card className="bg-slate-50 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        {exp.current && (
                          <Badge className="text-sm font-semibold text-primary-600 bg-primary-50">
                            CURRENT
                          </Badge>
                        )}
                        <span className="text-sm text-slate-500 ml-auto">{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">{exp.title}</h3>
                      <p className="text-primary-600 font-semibold mb-3">{exp.company}</p>
                      <p className="text-slate-600 mb-4">{exp.description}</p>
                      <ul className="text-sm text-slate-600 space-y-1">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i}>• {highlight}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
