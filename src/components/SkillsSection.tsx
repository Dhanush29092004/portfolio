
import React from 'react';

interface SkillsSectionProps {
  scrollY: number;
}

export const SkillsSection = ({ scrollY }: SkillsSectionProps) => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C++', 'Python', 'Java', 'HTML', 'CSS', 'JavaScript'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Tools & Technologies',
      skills: ['Linux', 'GitHub', 'VirtualBox', ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Core Skills',
      skills: ['Problem-Solving', 'Communication',],
      color: 'from-green-500 to-cyan-500'
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div
          className="transform transition-all duration-1000"
          style={{ transform: `translateY(${Math.max(0, (scrollY - 1200) * 0.1)}px)` }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.title} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r opacity-25 rounded-lg blur group-hover:opacity-50 transition-opacity duration-300" style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }}></div>
                <div className="relative bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                  <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                        style={{
                          animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`
                        }}
                      >
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color} animate-pulse`}></div>
                        <span className="text-gray-300 font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
