
import React from 'react';

interface AboutSectionProps {
  scrollY: number;
}

export const AboutSection = ({ scrollY }: AboutSectionProps) => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div
          className="transform transition-all duration-1000"
          style={{ transform: `translateY(${Math.max(0, (scrollY - 800) * 0.1)}px)` }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-25"></div>
                <div className="relative bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-cyan-500/20">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    I'm a motivated and detail-oriented 3rd-year B.Tech student with a passion for cybersecurity. 
                    My journey in technology is driven by an insatiable curiosity about digital security and a 
                    commitment to protecting our increasingly connected world.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed mt-4">
                    With strong problem-solving skills and a keen eye for detail, I'm eager to gain real-world 
                    industry experience in cybersecurity. My goal is to contribute to building a more secure 
                    digital future while continuously learning and adapting to emerging threats.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 border-2 border-cyan-500/50 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute inset-4 border-2 border-purple-500/50 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                <div className="absolute inset-8 border-2 border-cyan-400/50 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-cyan-400 mb-2">CS</div>
                      <div className="text-sm text-gray-300">Security</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
