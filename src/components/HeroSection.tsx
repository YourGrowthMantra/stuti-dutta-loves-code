
import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticle = () => {
      if (!particlesRef.current) return;
      
      const particle = document.createElement('div');
      particle.classList.add('absolute', 'bg-white', 'rounded-full', 'opacity-20');
      
      // Random size between 2px and 6px
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Add animation
      particle.animate(
        [
          { transform: 'translateY(0) rotate(0deg)', opacity: 0 },
          { opacity: 0.5, offset: 0.2 },
          { transform: `translateY(-${Math.random() * 100 + 50}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ],
        {
          duration: Math.random() * 3000 + 3000,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }
      );
      
      particlesRef.current.appendChild(particle);
      
      // Remove the particle after animation
      setTimeout(() => {
        if (particlesRef.current?.contains(particle)) {
          particlesRef.current.removeChild(particle);
        }
      }, 6000);
    };
    
    // Create initial particles
    for (let i = 0; i < 15; i++) {
      createParticle();
    }
    
    // Create new particles periodically
    const interval = setInterval(createParticle, 300);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-hero-gradient overflow-hidden pt-20">
      <div ref={particlesRef} className="hero-particles" />
      
      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent font-medium mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Hi, I'm Stuti Dutta
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Crafting Seamless User Experiences with Code & Creativity
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Aspiring UX/UI Frontend Engineer | JavaScript, HTML, CSS, React | Building Responsive, User-Centric Interfaces
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <a href="#projects" className="btn-primary w-full sm:w-auto">
              Explore My Work
            </a>
            <a href="#" className="btn-outline w-full sm:w-auto">
              Download Resume
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-foreground/60 hover:text-accent transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
