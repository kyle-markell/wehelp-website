import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
    {
        id: 'post',
        title: 'Post a Need in Seconds',
        description: 'Individuals and organizations can quickly post local tasks like: dog walking, grocery pickup, yard cleanup, moving furniture, checking on an elderly neighbor, and more.',
        image: '/assets/feature-post.png'
    },
    {
        id: 'find',
        title: 'Find Opportunities Near You',
        description: 'Browse nearby micro-volunteering opportunities and choose one that fits your schedule.',
        image: '/assets/feature-feed.png'
    },
    {
        id: 'coordinate',
        title: 'Coordinate Effortlessly',
        description: 'Use built-in messaging to coordinate with others who are stepping in to help.',
        image: '/assets/feature-messages.png'
    },
    {
        id: 'badges',
        title: 'Earn Badges and Level Up',
        description: 'Track your impact through your WeHelp profile. Earn badges, level up, and compare contributions across your city, state, and the country.',
        image: '/assets/feature-leaderboard.png'
    }
];

export function WhatWeDo() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 lg:mb-24 px-4">
                    <h2 className="text-4xl md:text-[48px] leading-tight md:leading-[40px] font-medium tracking-tight text-gray-900">
                        What does <span className="text-[#00B900]">WeHelp</span> do?
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                    {/* Left: Interactive iPhone Screenshot and Dots */}
                    <div className="flex-1 w-full flex flex-col items-center lg:items-end justify-center lg:pr-12">
                        <div className="w-full max-w-[400px] flex flex-col items-center">
                            <div className="relative w-full flex justify-center h-[50vh] md:h-[60vh] lg:h-[70vh]">
                                <AnimatePresence>
                                    <motion.img
                                        key={activeIndex}
                                        src={features[activeIndex].image}
                                        alt={features[activeIndex].title}
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-0 m-auto w-auto h-full max-h-full object-contain drop-shadow-xl z-10"
                                    />
                                </AnimatePresence>
                            </div>

                            {/* Interactive Carousel Dots */}
                            <div className="flex gap-2.5 mt-8 justify-center">
                                {features.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveIndex(idx)}
                                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-[#00B900] scale-125' : 'bg-gray-300 hover:bg-gray-400'
                                            }`}
                                        aria-label={`Show ${features[idx].title} screenshot`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Feature Cards */}
                    <div className="flex-1 w-full space-y-4">
                        {features.map((feature, index) => {
                            const isActive = index === activeIndex;
                            return (
                                <button
                                    key={feature.id}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-full text-left p-8 rounded-2xl transition-all duration-300 border-2 ${isActive
                                        ? 'bg-[#00B900]/10 border-[#00B900] shadow-sm'
                                        : 'bg-white border-transparent hover:bg-gray-50'
                                        }`}
                                >
                                    <h3 className={isActive
                                        ? 'text-lg md:text-[21px] md:leading-[29.4px] font-semibold text-gray-900 mb-2'
                                        : 'text-lg md:text-[20px] md:leading-[28px] font-semibold text-gray-700 mb-2'
                                    }>
                                        {feature.title}
                                    </h3>
                                    <p className={isActive
                                        ? 'text-base md:text-[16.8px] md:leading-[25.2px] font-normal text-gray-800'
                                        : 'text-base md:text-[16px] md:leading-[24px] font-normal text-gray-500'
                                    }>
                                        {feature.description}
                                    </p>
                                </button>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
