import { useState } from 'react';
import contactData from '../data/contact.json';
import config from '../data/config.json';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        serviceType: 'residential',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Send email using Resend
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    serviceType: 'residential',
                    message: ''
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="section-padding bg-slate-900 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-solar-orange/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-solar-yellow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-5xl md:text-6xl font-display font-black mb-6">
                        Get Your <span className="gradient-text">Free Quote</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Ready to switch to solar? Contact us today for a free consultation and custom quote.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="animate-slide-up">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Success/Error Messages */}
                            {submitStatus === 'success' && (
                                <div className="bg-green-500/20 border border-green-500 text-green-200 px-4 py-3 rounded-lg animate-slide-up">
                                    ✓ Thank you! We'll contact you soon.
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg animate-slide-up">
                                    ✗ Something went wrong. Please try again or call us directly.
                                </div>
                            )}

                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-solar-yellow transition-colors duration-300 text-white placeholder-gray-400 disabled:opacity-50"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-solar-yellow transition-colors duration-300 text-white placeholder-gray-400 disabled:opacity-50"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-solar-yellow transition-colors duration-300 text-white placeholder-gray-400 disabled:opacity-50"
                                    placeholder={contactData.contact.phones[0]}
                                />
                            </div>

                            <div>
                                <label htmlFor="serviceType" className="block text-sm font-semibold mb-2">Service Type</label>
                                <select
                                    id="serviceType"
                                    name="serviceType"
                                    value={formData.serviceType}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-solar-yellow transition-colors duration-300 text-white disabled:opacity-50"
                                >
                                    <option value="residential" className="bg-slate-900">Residential Solar</option>
                                    <option value="commercial" className="bg-slate-900">Commercial Solar</option>
                                    <option value="institutional" className="bg-slate-900">Educational Institutions</option>
                                    <option value="cleaning" className="bg-slate-900">Solar Panel Cleaning</option>
                                    <option value="maintenance" className="bg-slate-900">Maintenance</option>
                                    <option value="consultation" className="bg-slate-900">Consultation</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-solar-yellow transition-colors duration-300 text-white placeholder-gray-400 resize-none disabled:opacity-50"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn btn-primary w-full text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : 'Get Free Quote'}
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8 animate-fade-in">
                        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                            <h3 className="text-2xl font-display font-bold mb-6 gradient-text">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-solar-orange/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-solar-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Phone</h4>
                                        {contactData.contact.phones.map((phone, index) => (
                                            <p key={index} className="text-gray-300">
                                                <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-solar-yellow transition-colors">
                                                    {phone}
                                                </a>
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-solar-orange/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-solar-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Email</h4>
                                        {contactData.contact.emails.map((email, index) => (
                                            <p key={index} className="text-gray-300">
                                                <a href={`mailto:${email}`} className="hover:text-solar-yellow transition-colors">
                                                    {email}
                                                </a>
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-solar-orange/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-solar-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Coverage</h4>
                                        <p className="text-gray-300">{contactData.contact.coverage}</p>
                                        <p className="text-gray-300">{contactData.contact.cities}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                            <h3 className="text-2xl font-display font-bold mb-4">Business Hours</h3>
                            <div className="space-y-2 text-gray-300">
                                <p>{contactData.businessHours.weekdays}</p>
                                <p>{contactData.businessHours.weekend}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
