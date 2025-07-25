
import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  scrollY: number;
}

export const HeroSection = ({ scrollY }: HeroSectionProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = ['Cybersecurity', 'Ethical Hacking', 'Network Defense', 'Secure the Future'];
  const fullText = `Aspiring ${words[currentWordIndex]} Professional`;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayText('');
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText, currentWordIndex, words]);

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div
        className="text-center px-4 transform"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            Dhanush Chimakurthi
          </h1>
          <div className="h-16 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl text-gray-300 font-mono">
              {displayText}
              <span className="animate-pulse text-cyan-400">|</span>
            </h2>
          </div>
        </div>
        

        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Passionate about securing digital landscapes and protecting against cyber threats
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
          <button className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
            Let's Secure the Future Together
          </button>
          <button className="w-full md:w-auto px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105">
                <a
  href="Dhanush_resume.pdf"
  download
  
>
 
            Download Resume
            </a>
          </button>
          
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-cyan-400" size={32} />
      </div>

      {/* Glitch effect overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-cyan-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-purple-500/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-cyan-500/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};
