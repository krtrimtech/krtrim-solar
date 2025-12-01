import companyData from '../data/company.json';
import contactData from '../data/contact.json';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Krtrim Solar Logo" className="w-10 h-10" />
                            <span className="text-2xl font-display font-bold">{companyData.company.name}</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Empowering India with clean, sustainable solar energy solutions. Your trusted partner for a greener future.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-display font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <button onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-solar-yellow transition-colors duration-300">
                                    Home
                                </button>
                            </li>
                            <li>
                                <button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-solar-yellow transition-colors duration-300">
                                    Services
                                </button>
                            </li>
                            <li>
                                <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-solar-yellow transition-colors duration-300">
                                    About Us
                                </button>
                            </li>
                            <li>
                                <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-solar-yellow transition-colors duration-300">
                                    Projects
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-display font-bold mb-4">Our Services</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li className="hover:text-solar-yellow transition-colors duration-300 cursor-pointer">Residential Solar</li>
                            <li className="hover:text-solar-yellow transition-colors duration-300 cursor-pointer">Commercial Solar</li>
                            <li className="hover:text-solar-yellow transition-colors duration-300 cursor-pointer">Solar Cleaning</li>
                            <li className="hover:text-solar-yellow transition-colors duration-300 cursor-pointer">Maintenance</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-display font-bold mb-4">Get In Touch</h4>
                        <div className="space-y-3 text-gray-400">
                            <p className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-solar-yellow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>{contactData.contact.phones[0]}</span>
                            </p>
                            <p className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-solar-yellow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>{contactData.contact.emails[0]}</span>
                            </p>
                            <p className="flex items-start space-x-2">
                                <svg className="w-5 h-5 text-solar-yellow flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Serving {contactData.contact.coverage}</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} {companyData.company.name}. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-solar-yellow transition-colors duration-300">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-solar-yellow transition-colors duration-300">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
