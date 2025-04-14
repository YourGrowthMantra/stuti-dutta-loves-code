
import React from 'react';
import { Code, FileCode, Database, Laptop, Server, Brain } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      category: "Programming",
      items: [
        { name: "JavaScript", icon: <Code className="mb-2" size={32} /> },
        { name: "Python", icon: <Code className="mb-2" size={32} /> },
        { name: "Java", icon: <Code className="mb-2" size={32} /> },
        { name: "C/C++", icon: <Code className="mb-2" size={32} /> }
      ]
    },
    {
      category: "Web Development",
      items: [
        { name: "HTML", icon: <FileCode className="mb-2" size={32} /> },
        { name: "CSS", icon: <FileCode className="mb-2" size={32} /> },
        { name: "JavaScript", icon: <FileCode className="mb-2" size={32} /> },
        { name: "Django", icon: <Server className="mb-2" size={32} /> },
        { name: "Bootstrap", icon: <Laptop className="mb-2" size={32} /> },
        { name: "jQuery", icon: <Laptop className="mb-2" size={32} /> }
      ]
    },
    {
      category: "Technologies",
      items: [
        { name: "Microsoft Dynamics 365", icon: <Laptop className="mb-2" size={32} /> },
        { name: "SQL", icon: <Database className="mb-2" size={32} /> }
      ]
    },
    {
      category: "Other",
      items: [
        { name: "Machine Learning", icon: <Brain className="mb-2" size={32} /> }
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
                  <div key={idx} className="skill-icon flex flex-col items-center">
                    {skill.icon}
                    <span className="text-sm">{skill.name}</span>
                  </div>
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
