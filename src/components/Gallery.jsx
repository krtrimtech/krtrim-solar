import { useState } from 'react';
import galleryData from '../data/gallery.json';

const Gallery = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [sliderPosition, setSliderPosition] = useState(50);

    const handleSliderChange = (e) => {
        setSliderPosition(e.target.value);
    };

    const nextImage = () => {
        setActiveIndex((prev) => (prev + 1) % galleryData.length);
        setSliderPosition(50);
    };

    const prevImage = () => {
        setActiveIndex((prev) => (prev - 1 + galleryData.length) % galleryData.length);
        setSliderPosition(50);
    };

    const currentImage = galleryData[activeIndex];

    return (
        <section id="gallery" className="section-padding bg-slate-50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-5xl md:text-6xl font-display font-black text-slate-900 mb-6">
                        Before & <span className="gradient-text">After</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        See the transformation. Real projects, real results. Witness how we've helped customers harness the power of the sun.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Before/After Slider */}
                    <div className="relative">
                        <div className="relative h-96 md:h-[500px] bg-slate-200 rounded-2xl overflow-hidden shadow-2xl">
                            {/* Before Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={currentImage.before}
                                    alt="Before installation"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                                    BEFORE
                                </div>
                            </div>

                            {/* After Image with Clip Path */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                                }}
                            >
                                <img
                                    src={currentImage.after}
                                    alt="After installation"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                                    AFTER
                                </div>
                            </div>

                            {/* Slider Handle */}
                            <div
                                className="absolute inset-y-0 w-1 bg-white cursor-ew-resize"
                                style={{ left: `${sliderPosition}%` }}
                            >
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-solar-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                    </svg>
                                </div>
                            </div>

                            {/* Range Input */}
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={sliderPosition}
                                onChange={handleSliderChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
                            />
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex justify-center space-x-4 mt-6">
                            <button
                                onClick={prevImage}
                                className="bg-white hover:bg-solar-orange hover:text-white border-2 border-solar-orange text-solar-orange rounded-full p-3 transition-all duration-300 transform hover:scale-110 shadow-lg"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextImage}
                                className="bg-white hover:bg-solar-orange hover:text-white border-2 border-solar-orange text-solar-orange rounded-full p-3 transition-all duration-300 transform hover:scale-110 shadow-lg"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Project Info */}
                    <div className="space-y-6">
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
                            {currentImage.title}
                        </h3>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            {currentImage.description}
                        </p>

                        {/* Thumbnails */}
                        <div className="grid grid-cols-3 gap-4 mt-8">
                            {galleryData.map((item, index) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        setActiveIndex(index);
                                        setSliderPosition(50);
                                    }}
                                    className={`relative h-24 rounded-lg overflow-hidden transition-all duration-300 ${index === activeIndex
                                            ? 'ring-4 ring-solar-orange scale-105'
                                            : 'opacity-60 hover:opacity-100'
                                        }`}
                                >
                                    <img
                                        src={item.after}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-slate-200">
                            <div>
                                <div className="text-3xl font-bold gradient-text mb-2">{galleryData.length}+</div>
                                <div className="text-slate-600">Projects Showcased</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                                <div className="text-slate-600">Client Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
