
import React from 'react';

interface ProjectsSectionProps {
  scrollY: number;
}

export const ProjectsSection = ({ scrollY }: ProjectsSectionProps) => {
  const projects = [
    {
      title: 'Steganography Implementation with Python',
      description: 'Advanced security tool that hides encrypted messages inside images using sophisticated image processing techniques and encryption algorithms.',
      technologies: ['Python', 'PIL', 'Cryptography', 'Image Processing'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Network Packet Sniffer using Wireshark',
      description: 'Comprehensive network analysis tool that captures and analyzes network packets to identify vulnerabilities and security threats.',
      technologies: ['Wireshark', 'Network Analysis', 'Python', 'Cybersecurity'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Modern, responsive portfolio website built with cutting-edge web technologies and futuristic design elements.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'ASAP Framework'],
      color: 'from-green-500 to-cyan-500'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div
          className="transform transition-all duration-1000"
          style={{ transform: `translateY(${Math.max(0, (scrollY - 2000) * 0.1)}px)` }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </h2>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative group transform hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-lg blur opacity-25 group-hover:opacity-50 transition-opacity duration-300`}></div>
                <div className="relative bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    <div className="md:col-span-2">
                      <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-800/50 text-cyan-400 text-sm rounded-full border border-cyan-500/20 hover:border-cyan-500/40 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-32 h-32 relative">
                        <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-lg opacity-20 animate-pulse`}></div>
                        <div className="absolute inset-2 border-2 border-cyan-500/50 rounded-lg"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-4xl">🔐</div>
                        </div>
                      </div>
                    </div>
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
