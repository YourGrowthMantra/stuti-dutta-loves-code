
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2">
            <div className="relative rounded-xl overflow-hidden h-[400px] animate-float">
              <div className="absolute inset-0 bg-card-gradient opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-accent mx-auto mb-4"></div>
                  <h3 className="text-2xl font-heading text-white">Stuti Dutta</h3>
                  <p className="text-white/80">Frontend Developer</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:order-1">
            <h2 className="section-title">About Me</h2>
            <p className="text-lg mb-6 text-muted-foreground animate-fade-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              I'm a B.Tech graduate in Computer Science (8.27 CGPA) with a passion for frontend development and UX/UI design. 
              Proficient in JavaScript, HTML, CSS, and frameworks like Bootstrap and jQuery, I create intuitive, 
              performance-optimized solutions.
            </p>
            <p className="text-lg mb-6 text-muted-foreground animate-fade-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              My experience spans Microsoft Dynamics 365, machine learning projects, and responsive web apps. 
              I'm dedicated to creating beautiful, functional interfaces that deliver exceptional user experiences.
            </p>
            <p className="text-lg mb-8 text-muted-foreground animate-fade-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              When I'm not coding, I'm sketching wireframes or exploring new design trends to stay at the cutting edge of UX/UI development.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              <div className="bg-muted px-4 py-2 rounded-full text-sm hover:bg-accent hover:text-accent-foreground transition-colors">JavaScript</div>
              <div className="bg-muted px-4 py-2 rounded-full text-sm hover:bg-accent hover:text-accent-foreground transition-colors">HTML</div>
              <div className="bg-muted px-4 py-2 rounded-full text-sm hover:bg-accent hover:text-accent-foreground transition-colors">CSS</div>
              <div className="bg-muted px-4 py-2 rounded-full text-sm hover:bg-accent hover:text-accent-foreground transition-colors">React</div>
              <div className="bg-muted px-4 py-2 rounded-full text-sm hover:bg-accent hover:text-accent-foreground transition-colors">Bootstrap</div>
              <div className="bg-muted px-4 py-2 rounded-full text-sm hover:bg-accent hover:text-accent-foreground transition-colors">jQuery</div>
              <div className="bg-muted px-4 py-2 rounded-full text-sm hover:bg-accent hover:text-accent-foreground transition-colors">Responsive Design</div>
              <div className="bg-muted px-4 py-2 rounded-full text-sm hover:bg-accent hover:text-accent-foreground transition-colors">UX/UI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
