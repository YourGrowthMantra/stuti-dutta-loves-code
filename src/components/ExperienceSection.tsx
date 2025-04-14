
import React from 'react';
import { CalendarClock, Building2, Award } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "ERP Development Intern",
      company: "Yamaha Motor Pvt. Ltd.",
      period: "2024-2025",
      description: "Optimized ERP workflows using Microsoft Dynamics 365 and X++, enhancing system functionality.",
      icon: <Building2 className="text-accent" size={24} />
    },
    {
      title: "Machine Learning Intern",
      company: "Research Design & Science Org.",
      period: "2023",
      description: "Built a heart disease prediction ML model integrated into a Django web app.",
      icon: <Building2 className="text-accent" size={24} />
    },
    {
      title: "Workshop Facilitator",
      company: "MyCaptain",
      period: "2022-2023",
      description: "Led training for 50+ mentees, improving engagement through UX-focused feedback.",
      icon: <Award className="text-accent" size={24} />
    }
  ];

  const certifications = [
    {
      title: "Microsoft Dynamics 365 Developer Associate",
      issuer: "Microsoft",
      year: "2024"
    },
    {
      title: "Web Development",
      issuer: "MyCaptain",
      year: "2023"
    },
    {
      title: "SQL",
      issuer: "Coursera",
      year: "2023"
    },
    {
      title: "Python",
      issuer: "TechGyan",
      year: "2022"
    },
    {
      title: "Machine Learning",
      issuer: "Acmegrade",
      year: "2022"
    }
  ];

  return (
    <section id="experience" className="section-padding bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="section-title mb-12">Experience</h2>
            <div className="ml-4">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="timeline-item animate-fade-up opacity-0" 
                  style={{ animationDelay: `${0.2 * index}s`, animationFillMode: 'forwards' }}
                >
                  <div className="flex items-start gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <div className="flex items-center gap-2 my-2">
                        <span className="text-sm text-accent">{exp.company}</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <CalendarClock size={14} />
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="section-title mb-12">Certifications</h2>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-lg hover:shadow-md transition-all animate-fade-up opacity-0"
                  style={{ animationDelay: `${0.2 * index}s`, animationFillMode: 'forwards' }}
                >
                  <h3 className="text-lg font-semibold">{cert.title}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-accent">{cert.issuer}</span>
                    <span className="text-sm text-muted-foreground">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
