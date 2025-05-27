import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/content';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-slate-800">
            What Our Users Say
          </h2>
          <p className="mt-4 text-xl text-slate-600 font-serif">
            Join thousands of writers who have found their focus with Inkline
          </p>
        </div>
        
        <div className="mt-16 relative max-w-4xl mx-auto">
          <div className="absolute -left-8 -top-8">
            <Quote className="h-16 w-16 text-primary-100" />
          </div>
          
          <div className="bg-slate-50 p-8 md:p-12 rounded-lg relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <p className="text-lg md:text-xl text-slate-700 font-serif italic">
                  "{testimonials[activeIndex].content}"
                </p>
                <div className="mt-4">
                  <p className="font-medium text-slate-800 font-serif">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-slate-600 font-serif">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center space-x-4">
            <button 
              onClick={goToPrev}
              className="p-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-primary-600 hover:border-primary-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={goToNext}
              className="p-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-primary-600 hover:border-primary-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;