import React from 'react';
import { LampDesk as Desktop, Shield, Lightbulb, Accessibility, History, Lock } from 'lucide-react';
import { features } from '../data/content';

const Features: React.FC = () => {
  // Map of icon names to components
  const iconMap: Record<string, React.ReactNode> = {
    Desktop: <Desktop className="h-8 w-8" />,
    Shield: <Shield className="h-8 w-8" />,
    Mindfulness: <Lightbulb className="h-8 w-8" />,
    Accessibility: <Accessibility className="h-8 w-8" />,
    History: <History className="h-8 w-8" />,
    Lock: <Lock className="h-8 w-8" />,
  };

  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-slate-800">
            Feature Highlights
          </h2>
          <p className="mt-4 text-xl text-slate-600 font-serif">
            Designed with intention for writers who need focus and privacy
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md"
            >
              <div className="h-12 w-12 bg-primary-50 flex items-center justify-center rounded-md text-primary-600">
                {iconMap[feature.icon]}
              </div>
              <h3 className="mt-4 text-xl font-serif font-medium text-slate-800">
                {feature.title}
              </h3>
              <p className="mt-2 text-slate-600 font-serif">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;