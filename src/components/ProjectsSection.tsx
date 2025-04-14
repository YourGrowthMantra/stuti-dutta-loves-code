
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Github, X } from 'lucide-react';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  const projects: ProjectType[] = [
    {
      id: 1,
      title: "Connect Four Web Game",
      year: "2025",
      description: "Built a responsive, interactive two-player game with JavaScript, HTML, and CSS. Features real-time win detection and a sleek UI with Bootstrap and jQuery.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1074&auto=format",
      tags: ["JavaScript", "HTML", "CSS", "Bootstrap", "jQuery"],
      links: {
        demo: "https://example.com/connect-four",
        github: "https://github.com/Stutidutto/connect-four"
      },
      details: "This project involved creating a classic Connect Four game that can be played by two players in the browser. The game features a responsive design that works on both desktop and mobile devices, with a sleek UI built using Bootstrap and jQuery. Key features include real-time win detection, animated token drops, score tracking, and game state management."
    },
    {
      id: 2,
      title: "Amazon Website Replica",
      year: "2024",
      description: "Recreated Amazon's frontend with HTML, CSS, and JavaScript, focusing on responsive design, dynamic navigation, and form validation.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1170&auto=format",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      links: {
        demo: "https://example.com/amazon-replica",
        github: "https://github.com/Stutidutto/amazon-replica"
      },
      details: "This project was a frontend replica of the Amazon website, built from scratch using HTML, CSS, and JavaScript. The focus was on recreating the responsive design and user interface elements of Amazon's homepage and product pages. The project includes dynamic navigation, search functionality, product carousels, form validation for login and registration, and a responsive layout that adapts to different screen sizes."
    },
    {
      id: 3,
      title: "Drowsiness Detection",
      year: "2023-2024",
      description: "Developed an ML-powered web app using OpenCV and Django, achieving 85% accuracy in detecting drowsy states.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1170&auto=format",
      tags: ["Python", "OpenCV", "Django", "Machine Learning"],
      links: {
        demo: "https://example.com/drowsiness-detection",
        github: "https://github.com/Stutidutto/drowsiness-detection"
      },
      details: "This project is an ML-powered web application that detects drowsiness in real-time using computer vision techniques. Developed with OpenCV for image processing and Django for the web framework, the system monitors eye closure patterns to identify potential drowsy states. The ML model achieved 85% accuracy in detecting drowsiness, making it a potential tool for preventing accidents in driving or operating machinery. The web interface provides real-time alerts and historical data visualization."
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mb-16">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card animate-fade-up opacity-0" 
              style={{ animationDelay: `${0.2 * index}s`, animationFillMode: 'forwards' }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-heading text-white">{project.title}</h3>
                      <span className="text-sm text-white/70">{project.year}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-muted rounded-full">{tag}</span>
                  ))}
                </div>
                <button 
                  className="text-accent hover:text-accent/80 font-medium flex items-center gap-2"
                >
                  View Details <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex justify-between items-center">
                  <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                  <span className="text-sm text-muted-foreground">{selectedProject.year}</span>
                </div>
              </DialogHeader>
              <div className="aspect-w-16 aspect-h-9 relative mt-4 rounded-lg overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="object-cover w-full h-full"
                />
              </div>
              <DialogDescription className="mt-4 text-base text-foreground">
                {selectedProject.details}
              </DialogDescription>
              <div className="flex flex-wrap gap-2 my-4">
                {selectedProject.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 bg-muted rounded-full">{tag}</span>
                ))}
              </div>
              <div className="flex gap-4 mt-6">
                <a 
                  href={selectedProject.links.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  Live Demo <ExternalLink size={16} />
                </a>
                <a 
                  href={selectedProject.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline flex items-center gap-2"
                >
                  GitHub <Github size={16} />
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

// Types
interface ProjectType {
  id: number;
  title: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    demo: string;
    github: string;
  };
  details: string;
}

export default ProjectsSection;
