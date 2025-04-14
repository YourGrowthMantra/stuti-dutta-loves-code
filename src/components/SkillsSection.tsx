
import React from 'react';
import { Code, FileCode, Database, Laptop, Server, Brain } from 'lucide-react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

const SkillsSection = () => {
  const skills = [
    {
      category: "Programming",
      items: [
        { name: "JavaScript", icon: <Code className="mb-2" size={32} />, description: "Proficient in ES6+ features, async programming, and DOM manipulation" },
        { name: "Python", icon: <Code className="mb-2" size={32} />, description: "Experience with data processing, Flask, and machine learning libraries" },
        { name: "Java", icon: <Code className="mb-2" size={32} />, description: "Object-oriented programming and Android development" },
        { name: "C/C++", icon: <Code className="mb-2" size={32} />, description: "Low-level systems programming and data structures" }
      ]
    },
    {
      category: "Web Development",
      items: [
        { name: "HTML", icon: <FileCode className="mb-2" size={32} />, description: "Semantic markup, accessibility, and SEO best practices" },
        { name: "CSS", icon: <FileCode className="mb-2" size={32} />, description: "Responsive layouts, animations, and CSS frameworks" },
        { name: "JavaScript", icon: <FileCode className="mb-2" size={32} />, description: "Frontend interactivity and modern frameworks" },
        { name: "Django", icon: <Server className="mb-2" size={32} />, description: "Full-stack Python web development" },
        { name: "Bootstrap", icon: <Laptop className="mb-2" size={32} />, description: "Responsive UI components and grid system" },
        { name: "jQuery", icon: <Laptop className="mb-2" size={32} />, description: "DOM manipulation and AJAX requests" }
      ]
    },
    {
      category: "Technologies",
      items: [
        { name: "Microsoft Dynamics 365", icon: <Laptop className="mb-2" size={32} />, description: "ERP/CRM implementation and customization" },
        { name: "SQL", icon: <Database className="mb-2" size={32} />, description: "Database design, querying, and optimization" }
      ]
    },
    {
      category: "Other",
      items: [
        { name: "Machine Learning", icon: <Brain className="mb-2" size={32} />, description: "Classification models, neural networks, and predictive analytics" }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mb-16">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skills.map((skillGroup, index) => (
            <div key={index} className="animate-fade-up opacity-0" style={{ animationDelay: `${0.2 * index}s`, animationFillMode: 'forwards' }}>
              <h3 className="text-2xl font-heading mb-6 text-accent">{skillGroup.category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skillGroup.items.map((skill, idx) => (
                  <HoverCard key={idx}>
                    <HoverCardTrigger asChild>
                      <div className="skill-icon flex flex-col items-center justify-center p-4 rounded-lg cursor-pointer">
                        {skill.icon}
                        <span className="text-sm text-center">{skill.name}</span>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 bg-card border-accent">
                      <div className="flex justify-between space-x-4">
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold">{skill.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
