import projectsData from '../data/projects.json';

const Projects = () => {
    return (
        <section id="projects" className="section-padding bg-gradient-to-b from-white to-slate-50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-5xl md:text-6xl font-display font-black text-slate-900 mb-6">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Explore some of our successful solar installations across India. Each project represents our commitment to excellence.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <div
                            key={project.id}
                            className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                                {/* Type Badge */}
                                <div className="absolute top-4 right-4 bg-solar-yellow text-slate-900 px-4 py-2 rounded-full font-bold text-sm">
                                    {project.type}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-2xl font-display font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-200 mb-3 text-sm">{project.description}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <svg className="w-5 h-5 text-solar-yellow" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                                        </svg>
                                        <span className="font-bold">{project.capacity}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <p className="text-lg text-slate-600 mb-6">
                        Want to see your project featured here?
                    </p>
                    <button
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        className="btn btn-primary"
                    >
                        Start Your Solar Journey
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
