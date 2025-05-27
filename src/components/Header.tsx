import React, { useState, useEffect } from 'react';
import { PenTool } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed w-full z-10 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <PenTool className="h-8 w-8 text-primary-600" />
          <span className="ml-2 text-2xl font-serif font-medium text-slate-800">Inkline</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-slate-700 hover:text-primary-600 transition-colors font-serif">Features</a>
          <a href="#testimonials" className="text-slate-700 hover:text-primary-600 transition-colors font-serif">Testimonials</a>
          <a href="#faq" className="text-slate-700 hover:text-primary-600 transition-colors font-serif">FAQ</a>
        </nav>
        
        <Button variant="primary" size="md">
          Start my 7-day trial
        </Button>
      </div>
    </header>
  );
};

export default Header;