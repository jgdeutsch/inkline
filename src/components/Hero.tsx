import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [showGrammar, setShowGrammar] = useState(false);

  const fullText = "We're excited to share our product roadmap for Q2. The team has made significant progress on the new features. Can you review and provide feedback?";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setCurrentText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setShowSuggestion(true);
          setTimeout(() => setShowGrammar(true), 800);
        }, 500);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-slate-800 leading-tight">
              The AI writing partner
              <span className="block mt-2">Mac desktop app
              <span className="text-primary-600"> "they" took away</span></span>
            </h1>
            
            <p className="mt-6 text-xl text-slate-600 font-serif leading-relaxed">
              Remember when your favorite writing assistant was a real Mac app? We're bringing it back - 
              faster and better than ever. Get all the AI-powered grammar and style suggestions you love, 
              in a native macOS app that puts your privacy first.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Start my 7-day trial
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Watch demo
              </Button>
            </div>
            
            <p className="mt-4 text-sm text-slate-500 font-serif">
              No credit card required. Cancel anytime.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-8 border-t border-slate-200 pt-8">
              <div className="text-center">
                <span className="block text-2xl font-medium text-primary-600">2x</span>
                <span className="text-sm text-slate-600">Faster than web apps</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-medium text-primary-600">100%</span>
                <span className="text-sm text-slate-600">Privacy focused</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-medium text-primary-600">Native</span>
                <span className="text-sm text-slate-600">Mac app</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            {/* Main Editor Window */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 rounded-xl shadow-2xl overflow-hidden border border-slate-200 bg-white"
            >
              <div className="bg-slate-800 h-8 flex items-center px-4 space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  {currentText}
                  <motion.span
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-0.5 h-5 bg-primary-600 ml-1"
                  />
                </p>
              </div>
            </motion.div>

            {/* Floating Suggestion Cards */}
            <AnimatePresence>
              {showSuggestion && (
                <motion.div 
                  initial={{ x: '100%', opacity: 0 }}
                  animate={{ x: '50%', opacity: 1 }}
                  exit={{ x: '100%', opacity: 0 }}
                  transition={{ type: 'spring', damping: 20 }}
                  className="absolute top-1/3 -right-4 z-20"
                >
                  <div className="bg-white rounded-lg shadow-lg p-4 max-w-xs border border-primary-100">
                    <div className="flex items-center gap-2 text-primary-600 text-sm font-medium">
                      <motion.span 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-2 h-2 bg-primary-600 rounded-full"
                      />
                      Style suggestion
                    </div>
                    <p className="mt-1 text-sm text-slate-600">Consider specifying a deadline for the feedback request.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showGrammar && (
                <motion.div 
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: '-50%', opacity: 1 }}
                  exit={{ x: '-100%', opacity: 0 }}
                  transition={{ type: 'spring', damping: 20 }}
                  className="absolute bottom-1/3 -left-4 z-20"
                >
                  <div className="bg-white rounded-lg shadow-lg p-4 max-w-xs border border-green-100">
                    <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                      <motion.span 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-2 h-2 bg-green-600 rounded-full"
                      />
                      Grammar check
                    </div>
                    <p className="mt-1 text-sm text-slate-600">Well-structured sentences. Consider adding specific metrics for progress.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Background Effects */}
            <motion.div 
              animate={{ 
                background: [
                  'linear-gradient(120deg, #e0effe 0%, #d2dae5 100%)',
                  'linear-gradient(120deg, #bae0fd 0%, #acbbd0 100%)',
                  'linear-gradient(120deg, #e0effe 0%, #d2dae5 100%)'
                ]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -z-10 inset-0 opacity-30 blur-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;