
import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-heading">
              Stuti<span className="text-accent">.</span>
            </h2>
            <p className="text-muted-foreground mt-2">
              Designed & Built by Stuti Dutta © 2025
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://linkedin.com/in/stutidutto08" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/Stutidutto" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="mailto:stutidutto@gmail.com" 
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            Built with React, Tailwind CSS, and a lot of ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
