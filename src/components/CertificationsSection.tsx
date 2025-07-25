
import React from 'react';

interface CertificationsSectionProps {
  scrollY: number;
}

export const CertificationsSection = ({ scrollY }: CertificationsSectionProps) => {
  const certifications = [
    { name: 'Ethical Hacking Essentials', issuer: 'EC-Council', year: '2024' },
    { name: 'Cybersecurity Fundamentals', issuer: 'Linux Foundation', year: '2024' },
    { name: 'Introduction to Cybersecurity', issuer: 'Cisco', year: '2023' },
    { name: 'Java Programming', issuer: 'NPTEL', year: '2023' },
    { name: 'Ethical Hacking', issuer: 'NPTEL', year: '2023' },
    { name: 'Web Development', issuer: 'InternPe', year: '2023' }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div
          className="transform transition-all duration-1000"
          style={{ transform: `translateY(${Math.max(0, (scrollY - 1600) * 0.1)}px)` }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Certifications
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="relative group transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">C</span>
                    </div>
                    <span className="text-cyan-400 text-sm font-mono">{cert.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                  <p className="text-gray-400 text-sm">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
