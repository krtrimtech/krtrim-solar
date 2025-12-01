import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4">
            <div className="max-w-full sm:max-w-6xl mx-auto bg-slate-900/90 backdrop-blur-lg rounded-b-3xl sm:rounded-b-full shadow-2xl border-b border-x border-white/10">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-14 sm:h-16">
                        {/* Logo */}
                        <div className="flex items-center space-x-2 sm:space-x-3">
                            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Krtrim Solar Logo" className="w-7 h-7 sm:w-8 sm:h-8" />
                            <span className="text-base sm:text-lg font-display font-bold text-white tracking-tight">Krtrim Solar</span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-1">
                            <button
                                onClick={() => scrollToSection('home')}
                                className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection('services')}
                                className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
                            >
                                Services
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
                            >
                                Projects
                            </button>
                            <button
                                onClick={() => scrollToSection('gallery')}
                                className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
                            >
                                Gallery
                            </button>
                            <button
                                onClick={() => scrollToSection('faq')}
                                className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
                            >
                                FAQ
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
                            >
                                Contact
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="ml-2 lg:ml-3 px-5 lg:px-6 py-2 text-sm font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
                            >
                                Get Quote
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden pb-4 border-t border-white/10 mt-2 pt-3 animate-slide-up">
                            <div className="flex flex-col space-y-1">
                                <button
                                    onClick={() => scrollToSection('home')}
                                    className="px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 text-left"
                                >
                                    Home
                                </button>
                                <button
                                    onClick={() => scrollToSection('services')}
                                    className="px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 text-left"
                                >
                                    Services
                                </button>
                                <button
                                    onClick={() => scrollToSection('about')}
                                    className="px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 text-left"
                                >
                                    About
                                </button>
                                <button
                                    onClick={() => scrollToSection('projects')}
                                    className="px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 text-left"
                                >
                                    Projects
                                </button>
                                <button
                                    onClick={() => scrollToSection('gallery')}
                                    className="px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 text-left"
                                >
                                    Gallery
                                </button>
                                <button
                                    onClick={() => scrollToSection('faq')}
                                    className="px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 text-left"
                                >
                                    FAQ
                                </button>
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 text-left"
                                >
                                    Contact
                                </button>
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="mx-1 mt-2 px-6 py-2.5 text-sm font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 text-center"
                                >
                                    Get Free Quote
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
