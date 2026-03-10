import { motion } from 'framer-motion';

const JoinBadge = () => (
    <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full py-1.5 pr-5 pl-2 shadow-sm">
        <div className="flex -space-x-2">
            <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=33" alt="" />
            <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=47" alt="" />
            <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=12" alt="" />
        </div>
        <div className="flex items-center gap-1.5 font-medium text-[14px] md:text-[16px]">
            <span className="text-gray-900">
                Join 10,000+ neighbors on <span className="text-[#00B900]">WeHelp</span>.
            </span>
            <span className="text-yellow-400 text-lg">★</span>
            <span className="text-gray-900">5.0 rating</span>
        </div>
    </div>
);

export function HeroRebuild() {
    const appStoreLink = "https://apps.apple.com/us/app/wehelp-community-volunteering/id6759263096";

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left: Text Content */}
                    <div className="flex-1 text-center lg:text-left z-10 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-6 flex justify-center lg:justify-start"
                        >
                            <JoinBadge />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="space-y-1 mb-6"
                        >
                            <h1 className="text-4xl md:text-[52px] leading-tight md:leading-[65px] font-bold text-gray-900 tracking-tight">
                                Welcome to <span className="text-[#00B900]">WeHelp</span>
                            </h1>
                            <h2 className="text-4xl md:text-[52px] leading-tight md:leading-[65px] font-medium text-gray-900 tracking-tight">
                                The modern way to <br className="hidden lg:block" />help.
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mb-10"
                        >
                            <p className="text-base md:text-[16px] leading-relaxed md:leading-[24px] text-gray-500 max-w-[460px] mx-auto lg:mx-0 font-normal">
                                <span className="text-[#00B900] font-medium">WeHelp</span> is a micro volunteering platform. Help your neighbors with a variety of tasks in your spare time. It's time to bring back human connection. Make someone's day today!
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex justify-center lg:justify-start"
                        >
                            <a href={appStoreLink} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                <img src="/assets/app-store-badge.svg" alt="Download on the App Store" className="h-12 w-auto" />
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: Stacked Angled Mockups */}
                    <div className="flex-1 relative w-full flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative z-10 w-full max-w-[500px]"
                        >
                            <img
                                src="/assets/hero-mockups.png"
                                alt="WeHelp App Screens"
                                className="w-full h-auto object-contain drop-shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
