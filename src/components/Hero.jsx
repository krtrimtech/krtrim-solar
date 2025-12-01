import { useState, useEffect } from 'react';
import companyData from '../data/company.json';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Calculate mouse position as a percentage of viewport
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={`${import.meta.env.BASE_URL}hero-solar.png`}
                    alt="Solar panels installation"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-900/90"></div>
            </div>

            {/* Animated Background Elements with Parallax */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute top-20 left-10 w-72 h-72 bg-solar-orange/20 rounded-full blur-3xl animate-float"
                    style={{
                        transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
                        transition: 'transform 0.3s ease-out'
                    }}
                ></div>
                <div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-solar-yellow/20 rounded-full blur-3xl animate-float"
                    style={{
                        animationDelay: '2s',
                        transform: `translate(${mousePosition.x * -40}px, ${mousePosition.y * -40}px)`,
                        transition: 'transform 0.3s ease-out'
                    }}
                ></div>
                <div
                    className="absolute top-1/2 left-1/2 w-64 h-64 bg-solar-blue/15 rounded-full blur-3xl animate-float"
                    style={{
                        animationDelay: '1s',
                        transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * 25}px)`,
                        transition: 'transform 0.3s ease-out'
                    }}
                ></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center animate-fade-in">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white mb-6 leading-tight">
                    {companyData.company.tagline.split(' ').slice(0, 4).join(' ')}
                    <span className="block gradient-text mt-2">{companyData.company.tagline.split(' ').slice(4).join(' ')}</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
                    {companyData.company.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                    <button
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        className="btn btn-primary text-lg px-12 py-5 shadow-2xl"
                    >
                        Get Free Quote
                    </button>
                    <button
                        onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                        className="btn btn-secondary text-lg px-12 py-5 bg-white/10 border-white text-white hover:bg-white hover:text-solar-dark"
                    >
                        Our Services
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20">
                    {companyData.stats.map((stat, index) => (
                        <div
                            key={index}
                            className="glass-effect rounded-2xl p-6 backdrop-blur-md animate-slide-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                            <div className="text-gray-300 text-lg">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
