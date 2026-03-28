'use client';

import portfolioData from '@/data/portfolio.json';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="card-gradient p-8 rounded-2xl">
              <p className="text-white/90 text-lg leading-relaxed">
                {portfolioData.about}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="card-gradient p-6 rounded-xl text-center">
                <div className="text-3xl font-bold gradient-text mb-2">
                  {portfolioData.experience}+
                </div>
                <div className="text-white/80">
                  Years Experience
                </div>
              </div>

              <div className="card-gradient p-6 rounded-xl text-center">
                <div className="text-3xl font-bold gradient-text mb-2">
                  {portfolioData.projects.length}
                </div>
                <div className="text-white/80">
                  Projects Completed
                </div>
              </div>
            </div>

            <div className="card-gradient p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-2">
                Current Role
              </h3>
              <p className="text-primary-200 font-medium">
                {portfolioData.currentRole}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card-gradient p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Key Highlights
              </h3>
              <div className="space-y-4">
                {portfolioData.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 group"
                  >
                    <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                    <p className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="btn-gradient text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}