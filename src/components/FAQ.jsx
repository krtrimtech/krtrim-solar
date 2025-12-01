import { useState } from 'react';
import faqData from '../data/faq.json';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="section-padding bg-white">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-5xl md:text-6xl font-display font-black text-slate-900 mb-6">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Got questions? We've got answers. Here are the most common questions about solar installation.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <div
                            key={faq.id}
                            className="bg-slate-50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left transition-colors duration-300 hover:bg-slate-100"
                            >
                                <span className="text-lg font-semibold text-slate-900 pr-8">
                                    {faq.question}
                                </span>
                                <div
                                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-solar-orange to-solar-yellow flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                >
                                    <svg
                                        className="w-5 h-5 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>
                            </button>

                            {/* Answer - Collapsible */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Still Have Questions CTA */}
                <div className="mt-16 text-center bg-gradient-to-r from-solar-orange to-solar-yellow p-8 rounded-2xl">
                    <h3 className="text-2xl font-display font-bold text-white mb-4">
                        Still Have Questions?
                    </h3>
                    <p className="text-white/90 mb-6">
                        Our solar experts are here to help you make the best decision for your energy needs.
                    </p>
                    <button
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        className="bg-white text-solar-orange px-8 py-3 rounded-full font-semibold hover:bg-slate-900 hover:text-white transition-all duration-300 transform hover:scale-105"
                    >
                        Contact Us Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
