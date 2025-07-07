import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tags, ChartScatter, Code, Cloud, Users, Brain } from "lucide-react";

export default function SkillsSection() {
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

  const skillCategories = [
    {
      icon: Tags,
      title: "Annotation Tools",
      color: "primary",
      skills: ["CVAT", "Label Studio", "Supervisely", "SuperAnnotate", "V7", "Roboflow"]
    },
    {
      icon: ChartScatter,
      title: "Project Management",
      color: "cyan",
      skills: ["Scrum Framework", "ClickUp", "Asana", "Trello"]
    },
    {
      icon: Code,
      title: "Programming",
      color: "emerald",
      skills: ["Python", "JavaScript", "SQL", "Git"]
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      color: "purple",
      skills: ["AWS", "GCP", "Azure"]
    },
    {
      icon: Users,
      title: "Collaboration",
      color: "orange",
      skills: ["Slack", "Discord", "Teams", "Confluence"]
    },
    {
      icon: Brain,
      title: "AI/ML Specialties",
      color: "rose",
      skills: ["SFT", "RLHF", "HITL", "Computer Vision", "NLP"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string, text: string, badgeBg: string, badgeText: string }> = {
      primary: { bg: "bg-primary-100", text: "text-primary-600", badgeBg: "bg-primary-50", badgeText: "text-primary-700" },
      cyan: { bg: "bg-cyan-100", text: "text-cyan-600", badgeBg: "bg-cyan-50", badgeText: "text-cyan-700" },
      emerald: { bg: "bg-emerald-100", text: "text-emerald-600", badgeBg: "bg-emerald-50", badgeText: "text-emerald-700" },
      purple: { bg: "bg-purple-100", text: "text-purple-600", badgeBg: "bg-purple-50", badgeText: "text-purple-700" },
      orange: { bg: "bg-orange-100", text: "text-orange-600", badgeBg: "bg-orange-50", badgeText: "text-orange-700" },
      rose: { bg: "bg-rose-100", text: "text-rose-600", badgeBg: "bg-rose-50", badgeText: "text-rose-700" }
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <section id="skills" className="py-20" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Expertise</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Comprehensive skill set spanning AI/ML annotation tools, project management, and cloud technologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            const IconComponent = category.icon;
            
            return (
              <Card key={index} className="glass-card hover:scale-105 transition-all duration-300 border-white/20 animate-on-scroll">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 glass rounded-lg flex items-center justify-center mr-4`}>
                      <IconComponent className="text-white h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} className="glass text-white/90 text-sm border-white/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
