
import React from 'react';

export const FooterSection = () => {
  return (
    <footer className="py-12 border-t border-cyan-500/20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Dhanush Chimakurthi
            </h3>
            <p className="text-gray-400">Cybersecurity Professional</p>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/dhanush-chimakurty-601066255/"
              className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
            >
              <span className="text-white text-xl">💼</span>
            </a>
            <a
              href="https://github.com/Dhanush29092004"
              className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110"
            >
              <span className="text-white text-xl">💻</span>
            </a>
            <button className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110">
              <span className="text-white text-xl">📄</span>
            </button>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © 2024 Dhanush Chimakurthi
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Securing the Digital Future
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-cyan-500/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#about" className="hover:text-cyan-400 transition-colors duration-300">About</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors duration-300">Skills</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors duration-300">Projects</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors duration-300">Contact</a>
            </div>
            <div className="text-sm text-gray-500">
              Built with ❤️ and cutting-edge technology
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
