import { ArrowUpRight } from 'lucide-react';

const projects = [
  // Development Projects
  {
    name: 'Campfire',
    subtitle: 'Open Source Audio Platform',
    description: 'A modern, privacy-focused alternative to Riverside.fm for high-quality audio recording and streaming. Built with WebRTC and real-time collaboration features.',
    category: 'Development',
    image: 'https://placehold.co/120x120/e2e8f0/1e293b?text=Campfire',
  },
  {
    name: 'Kairos',
    subtitle: 'Productivity Launcher',
    description: 'A lightning-fast application launcher and productivity tool, featuring global shortcuts, custom workflows, and seamless integration with your favorite apps.',
    category: 'Development',
    image: 'https://placehold.co/120x120/e2e8f0/1e293b?text=Kairos',
  },
  {
    name: 'ChessHub',
    subtitle: 'Chess Platform',
    description: 'A feature-rich chess platform with real-time multiplayer, AI analysis, and comprehensive learning resources for players of all skill levels.',
    category: 'Development',
    image: 'https://placehold.co/120x120/e2e8f0/1e293b?text=ChessHub',
  },
  // Machine Learning Projects
  {
    name: 'Zephyr',
    subtitle: 'Distributed ML Training',
    description: 'A scalable system for hyperparameter optimization and distributed model training, designed for research labs and production environments.',
    category: 'Machine Learning',
    image: 'https://placehold.co/120x120/e2e8f0/1e293b?text=Zephyr',
  },
  {
    name: 'DataLake',
    subtitle: 'Modern Data Platform',
    description: 'A unified data platform combining the best of data lakes and warehouses, with built-in ML capabilities and real-time analytics.',
    category: 'Machine Learning',
    image: 'https://placehold.co/120x120/e2e8f0/1e293b?text=DataLake',
  },
];

const grouped = {
  Development: projects.filter((p) => p.category === 'Development'),
  'Machine Learning': projects.filter((p) => p.category === 'Machine Learning'),
};

export default function Projects() {
  return (
    <section className="w-full h-full p-3 md:p-4">
      <div className="h-full flex flex-col">
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2 tracking-tight" style={{ fontFamily: 'var(--font-antic)' }}>Projects</h2>
          <p style={{ fontFamily: 'var(--font-avenir)' }} className="text-gray-600 text-sm leading-relaxed tracking-wide">
            Here are some of the products and systems I've built, spanning developer tools, platforms, and machine learning infrastructure.
          </p>
        </div>
        <div className="flex flex-col gap-6 w-full">
          {Object.entries(grouped).map(([category, items]) => (
            <div key={category} className="flex flex-col gap-3 w-full">
              <h3 className="text-base font-semibold mb-1" style={{ fontFamily: 'var(--font-avenir)' }}>{category}</h3>
              {items.map((project) => (
                <div
                  key={project.name}
                  className="flex items-center bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-3 md:p-4 gap-3 md:gap-4 border border-gray-100 w-full"
                >
                  <div className="flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover bg-gray-100"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 style={{ fontFamily: 'var(--font-antic)' }} className="text-lg font-bold leading-tight truncate">{project.name}</h4>
                    </div>
                    <div style={{ fontFamily: 'var(--font-avenir)' }} className="text-gray-600 text-xs mt-1 truncate">
                      {project.subtitle}
                    </div>
                  </div>
                  <div className="ml-auto">
                    <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
