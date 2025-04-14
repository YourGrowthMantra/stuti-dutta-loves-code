
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
      scrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-heading text-foreground">
            Stuti<span className="text-accent">.</span>
          </a>
          
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li><a href="#about" className="text-foreground hover:text-accent transition-colors">About</a></li>
              <li><a href="#skills" className="text-foreground hover:text-accent transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-foreground hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#experience" className="text-foreground hover:text-accent transition-colors">Experience</a></li>
              <li><a href="#contact" className="text-foreground hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="btn-outline">Resume</a></li>
            </ul>
          </nav>
          
          <button className="md:hidden text-foreground" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        'fixed inset-0 bg-background/95 backdrop-blur-md z-40 transform transition-transform duration-300 md:hidden pt-20',
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      )}>
        <nav className="container mx-auto px-4">
          <ul className="flex flex-col items-center space-y-6 py-8">
            <li><a href="#about" className="text-xl text-foreground hover:text-accent" onClick={toggleMenu}>About</a></li>
            <li><a href="#skills" className="text-xl text-foreground hover:text-accent" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#projects" className="text-xl text-foreground hover:text-accent" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#experience" className="text-xl text-foreground hover:text-accent" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#contact" className="text-xl text-foreground hover:text-accent" onClick={toggleMenu}>Contact</a></li>
            <li><a href="#" className="btn-outline text-xl" onClick={toggleMenu}>Resume</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
