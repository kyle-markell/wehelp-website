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
                <div className="text-center mb-16 lg:mb-24">
                    <h2 className="text-[48px] leading-[40px] font-medium tracking-tight text-gray-900">
                        What does <span className="text-[#00B900]">WeHelp</span> do?
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                    {/* Left: Interactive iPhone Screenshot */}
                    <div className="flex-1 w-full flex justify-center lg:justify-end lg:pr-12">
                        <div className="relative w-full max-w-[400px] flex justify-center">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeIndex}
                                    src={features[activeIndex].image}
                                    alt={features[activeIndex].title}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-auto object-contain drop-shadow-xl relative z-10"
                                />
                            </AnimatePresence>
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
                                        ? 'text-[21px] leading-[29.4px] font-semibold text-gray-900 mb-2'
                                        : 'text-[20px] leading-[28px] font-semibold text-gray-700 mb-2'
                                    }>
                                        {feature.title}
                                    </h3>
                                    <p className={isActive
                                        ? 'text-[16.8px] leading-[25.2px] font-normal text-gray-800'
                                        : 'text-[16px] leading-[24px] font-normal text-gray-500'
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
