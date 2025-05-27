import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqs } from '../data/content';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-slate-800">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-slate-600 font-serif">
            Everything you need to know about Inkline
          </p>
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id} 
              className={`border-b border-slate-200 ${index === 0 ? 'border-t' : ''}`}
            >
              <button
                className="w-full flex justify-between items-center py-6 text-left font-serif"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium text-slate-800">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-600" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 font-serif text-slate-600 ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;