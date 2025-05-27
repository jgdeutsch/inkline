import React from 'react';
import Button from './Button';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-primary-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-slate-800">
            Ready to experience distraction-free writing?
          </h2>
          <p className="mt-4 text-xl text-slate-600 font-serif">
            Join thousands of writers who have found their focus with Inkline. 
            Try it free for 7 days, no credit card required.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg">
              Start my 7-day trial
            </Button>
            <Button variant="outline" size="lg">
              Learn more
            </Button>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-medium text-primary-600 font-serif">10,000+</span>
              <span className="text-slate-600 font-serif">Active writers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-medium text-primary-600 font-serif">4.8/5</span>
              <span className="text-slate-600 font-serif">Average rating</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-medium text-primary-600 font-serif">100%</span>
              <span className="text-slate-600 font-serif">Privacy focused</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;