import companyData from '../data/company.json';

const About = () => {
    const featureIcons = [
        (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
        (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    ];

    return (
        <section id="about" className="section-padding bg-slate-900 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-solar-orange/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-solar-yellow/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div className="animate-fade-in">
                        <h2 className="text-5xl md:text-6xl font-display font-black mb-6">
                            Why Choose <span className="gradient-text">{companyData.company.name}</span>?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            {companyData.company.mission}
                        </p>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            {companyData.company.vision}
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {companyData.experience.map((exp, index) => (
                                <div key={index} className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
                                    <div className="text-4xl font-bold gradient-text mb-2">{exp.value}</div>
                                    <div className="text-gray-300">{exp.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-up">
                        {companyData.features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-solar-yellow/50 transition-all duration-300 hover:transform hover:scale-105"
                            >
                                <div className="text-solar-yellow mb-4">{featureIcons[index]}</div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
