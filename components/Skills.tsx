'use client';

import { useState } from 'react';
import portfolioData from '@/data/portfolio.json';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto rounded-full"></div>
          <p className="text-white/80 mt-6 text-lg max-w-2xl mx-auto">
            Comprehensive expertise across modern development technologies and frameworks
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {portfolioData.skills.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? 'btn-gradient text-white shadow-lg'
                  : 'card-gradient text-white/80 hover:text-white border border-white/20 hover:border-white/40'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="min-h-[400px]">
          <div className="card-gradient p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              {portfolioData.skills[activeCategory].name}
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {portfolioData.skills[activeCategory].skills.map((skill, index) => (
                <div
                  key={skill}
                  className="group relative overflow-hidden"
                >
                  <div className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-xl p-4 text-center transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-white font-medium group-hover:text-primary-200 transition-colors duration-300">
                      {skill}
                    </div>
                  </div>
                  
                  {/* Animated border effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-400/20 to-secondary-400/20 animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Skill category description */}
            <div className="mt-8 text-center">
              <p className="text-white/80 text-sm">
                {activeCategory === 0 && "Building responsive and interactive user interfaces with modern frameworks"}
                {activeCategory === 1 && "Developing robust server-side applications and APIs"}
                {activeCategory === 2 && "Managing and optimizing data storage solutions"}
                {activeCategory === 3 && "Proficient in multiple programming languages for diverse applications"}
                {activeCategory === 4 && "Utilizing essential tools and methodologies for efficient development"}
              </p>
            </div>
          </div>
        </div>

        {/* Skills summary */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-gradient p-6 rounded-xl text-center">
            <div className="text-3xl font-bold gradient-text mb-2">
              {portfolioData.skills.reduce((total, category) => total + category.skills.length, 0)}
            </div>
            <div className="text-white/80">
              Total Skills
            </div>
          </div>

          <div className="card-gradient p-6 rounded-xl text-center">
            <div className="text-3xl font-bold gradient-text mb-2">
              {portfolioData.skills.length}
            </div>
            <div className="text-white/80">
              Skill Categories
            </div>
          </div>

          <div className="card-gradient p-6 rounded-xl text-center">
            <div className="text-3xl font-bold gradient-text mb-2">
              Full-Stack
            </div>
            <div className="text-white/80">
              Development Focus