import testimonialsData from '../data/testimonials.json';

const Testimonials = () => {
    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <svg
                key={index}
                className={`w-5 h-5 ${index < rating ? 'text-solar-yellow' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    return (
        <section id="testimonials" className="section-padding bg-gradient-to-b from-white to-slate-50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-5xl md:text-6xl font-display font-black text-slate-900 mb-6">
                        What Our <span className="gradient-text">Clients Say</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Don't just take our word for it. Here's what our satisfied customers have to say about their solar journey with us.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 opacity-10">
                                <svg className="w-16 h-16 text-solar-orange" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>

                            {/* Stars */}
                            <div className="flex space-x-1 mb-4">
                                {renderStars(testimonial.rating)}
                            </div>

                            {/* Review Text */}
                            <p className="text-slate-700 leading-relaxed mb-6 relative z-10">
                                "{testimonial.text}"
                            </p>

                            {/* Author Info */}
                            <div className="flex items-center space-x-4 border-t border-slate-100 pt-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-solar-orange to-solar-yellow rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                                    <p className="text-sm text-slate-500">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Badges */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="p-6 bg-white rounded-xl shadow-md">
                        <div className="text-4xl font-bold gradient-text mb-2">500+</div>
                        <div className="text-slate-600 text-sm">Happy Customers</div>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-md">
                        <div className="text-4xl font-bold gradient-text mb-2">4.9/5</div>
                        <div className="text-slate-600 text-sm">Average Rating</div>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-md">
                        <div className="text-4xl font-bold gradient-text mb-2">98%</div>
                        <div className="text-slate-600 text-sm">Would Recommend</div>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-md">
                        <div className="text-4xl font-bold gradient-text mb-2">10+</div>
                        <div className="text-slate-600 text-sm">Years Experience</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
