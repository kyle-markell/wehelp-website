import { motion } from 'framer-motion';

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
                            className="mb-8 flex justify-center lg:justify-start"
                        >
                            <img src="/assets/join-header.png" alt="Join 10,000+ neighbors on WeHelp. 5.0 rating" className="h-10 w-auto" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="space-y-1 mb-6"
                        >
                            <h1 className="text-[52px] leading-[65px] font-bold text-gray-900 tracking-tight">
                                Welcome to <span className="text-[#00B900]">WeHelp</span>
                            </h1>
                            <h2 className="text-[52px] leading-[65px] font-medium text-gray-900 tracking-tight">
                                The modern way to <br className="hidden lg:block" />help.
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mb-10"
                        >
                            <p className="text-[16px] leading-[24px] text-gray-500 max-w-[460px] mx-auto lg:mx-0 font-normal">
                                WeHelp is a micro volunteering platform. Help your neighbors with a variety of tasks in your spare time. It's time to bring back <span className="text-[#00B900] font-medium">human connection</span>. Make someone's day today!
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
