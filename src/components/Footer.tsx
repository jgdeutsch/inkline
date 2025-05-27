import React from 'react';
import { PenTool, Twitter, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-16 pb-12 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <PenTool className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-2xl font-serif font-medium text-slate-800">Inkline</span>
            </div>
            <p className="mt-4 text-slate-600 max-w-md font-serif">
              Your writing, your space. Zero distractions. Full control.
              A desktop AI writing assistant designed for focus, clarity, and privacy.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-slate-500 hover:text-primary-600">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-primary-600">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-primary-600">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-slate-800 font-serif">Product</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-slate-600 hover:text-primary-600 transition-colors font-serif">Features</a></li>
              <li><a href="#" className="text-slate-600 hover:text-primary-600 transition-colors font-serif">Pricing</a></li>
              <li><a href="#" className="text-slate-600 hover:text-primary-600 transition-colors font-serif">Download</a></li>
              <li><a href="#" className="text-slate-600 hover:text-primary-600 transition-colors font-serif">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-slate-800 font-serif">Company</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-slate-600 hover:text-primary-600 transition-colors font-serif">About</a></li>
              <li><a href="#" className="text-slate-600 hover:text-primary-600 transition-colors font-serif">Blog</a></li>
              <li><a href="#" className="text-slate-600 hover:text-primary-600 transition-colors font-serif">Privacy</a></li>
              <li><a href="#" className="text-slate-600 hover:text-primary-600 transition-colors font-serif">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-center text-slate-500 font-serif">
            © {new Date().getFullYear()} Inkline. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;