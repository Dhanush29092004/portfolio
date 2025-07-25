
import React from 'react';

interface ExperienceSectionProps {
  scrollY: number;
}

export const ExperienceSection = ({ scrollY }: ExperienceSectionProps) => {
  const experiences = [
    {
      title: 'Cybersecurity Intern',
      company: 'Edunet Foundations',
      duration: '2024',
      description: 'Collaborated with AICTE and IBM SkillsBuild to develop cybersecurity solutions and enhance security protocols.',
      skills: ['Security Analysis', 'Threat Assessment', 'Risk Management']
    },
    {
      title: 'Cybersecurity Intern',
      company: 'TechnoHacks EduTech',
      duration: '2023',
      description: 'Gained hands-on experience in cybersecurity practices and contributed to educational technology security initiatives.',
      skills: ['Penetration Testing', 'Vulnerability Assessment', 'Security Documentation']
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div
          className="transform transition-all duration-1000"
          style={{ transform: `translateY(${Math.max(0, (scrollY - 2400) * 0.1)}px)` }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500 to-purple-500"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-black z-10"></div>

                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <div className="relative bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                        <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                        <h4 className="text-lg text-cyan-400 mb-2">{exp.company}</h4>
                        <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>
                        <p className="text-gray-300 mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-gray-800/50 text-purple-400 text-sm rounded-full border border-purple-500/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
