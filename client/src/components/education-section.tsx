import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

export default function EducationSection() {
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

  const certifications = [
    {
      title: "Project Management",
      issuer: "Coursera",
      date: "November 2024",
      color: "emerald"
    },
    {
      title: "Leveraging Generative AI for Project Management",
      issuer: "PMI",
      date: "September 2024",
      color: "blue"
    },
    {
      title: "Excel Essential Training (Microsoft 365)",
      issuer: "NASBA",
      date: "September 2024",
      color: "purple"
    },
    {
      title: "Data Annotation",
      issuer: "Quantigo AI",
      date: "January 2023",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      emerald: "bg-emerald-100 text-emerald-600",
      blue: "bg-blue-100 text-blue-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600"
    };
    return colorMap[color] || colorMap.emerald;
  };

  return (
    <section className="py-20" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="animate-on-scroll">
            <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
            <Card className="glass-card border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 glass rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <GraduationCap className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      B.Sc. in Computer Science and Engineering
                    </h3>
                    <p className="text-cyan-300 font-medium mb-2">
                      Bangladesh University of Business Technology
                    </p>
                    <p className="text-white/70 text-sm">2018 – 2022 • Dhaka, Bangladesh</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Certifications */}
          <div className="animate-on-scroll">
            <h2 className="text-2xl font-bold text-white mb-6">Certifications</h2>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="glass-card border-white/20 hover:scale-105 transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 glass rounded-lg flex items-center justify-center mr-3">
                        <Award className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-white">{cert.title}</p>
                        <p className="text-sm text-white/70">{cert.issuer} • {cert.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
