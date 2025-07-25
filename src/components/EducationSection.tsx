
import React from 'react';

interface EducationSectionProps {
  scrollY: number;
}

export const EducationSection = ({ scrollY }: EducationSectionProps) => {
  const education = [
    {
      degree: 'B.Tech (3rd Year)',
      institution: 'RMD Engineering College',
      score: 'CGPA: 7.74',
      year: '2022 - Present',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      degree: '12th Grade',
      institution: 'Narayana Junior College',
      score: '86.3%',
      year: '2020 - 2022',
      color: 'from-purple-500 to-pink-500'
    },
    {
      degree: '10th Grade',
      institution: 'Guntur Oxford High School',
      score: '99.8%',
      year: '2019 - 2020',
      color: 'from-green-500 to-cyan-500'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div
          className="transform transition-all duration-1000"
          style={{ transform: `translateY(${Math.max(0, (scrollY - 2800) * 0.1)}px)` }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative group transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${edu.color} rounded-lg blur opacity-25 group-hover:opacity-50 transition-opacity duration-300`}></div>
                <div className="relative bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${edu.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                    <span className="text-white font-bold text-2xl">🎓</span>
                  </div>
                  <h3 className={`text-xl font-bold mb-2 text-center bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                    {edu.degree}
                  </h3>
                  <h4 className="text-lg text-white mb-2 text-center">{edu.institution}</h4>
                  <p className="text-cyan-400 text-center mb-2 font-mono">{edu.score}</p>
                  <p className="text-gray-400 text-sm text-center">{edu.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
