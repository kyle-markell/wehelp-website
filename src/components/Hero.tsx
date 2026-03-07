import { motion } from 'framer-motion';
import { Button } from './Button';



export function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left z-10 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-gray-900 mb-4 leading-none">
                                Introducing WeHelp
                            </h1>
                            <p className="text-2xl lg:text-4xl font-medium text-gray-400 tracking-tight mb-8">
                                The modern way to volunteer.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="space-y-6"
                        >
                            <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                                Help your neighbors with a variety of tasks in just minutes. Give help. Get help. WeHelp.
                            </p>

                            <p className="text-xl lg:text-2xl font-semibold text-gray-900 max-w-2xl mx-auto lg:mx-0">
                                Find quick ways to help people nearby.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="pt-4"
                        >
                            <a href="https://apps.apple.com/us/app/wehelp-community-volunteering/id6759263096" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="w-full sm:w-auto px-12 py-6 text-xl rounded-full hover:scale-105 transition-transform bg-gray-900 text-white hover:bg-black shadow-xl">
                                    Download WeHelp
                                </Button>
                            </a>
                        </motion.div>
                    </div>

                    {/* iPhone Mockup */}
                    <div className="flex-1 relative w-full max-w-[400px] lg:max-w-none flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative z-10"
                        >
                            {/* Sleek App Mockup Frame */}
                            <div className="relative mx-auto border-gray-100 bg-white border-[8px] rounded-[3rem] h-[650px] w-[320px] shadow-2xl ring-1 ring-gray-900/5">
                                <div className="rounded-[2.5rem] overflow-hidden w-full h-full bg-gray-50 relative flex items-center justify-center">
                                    {/* Placeholder or real image */}
                                    <div className="text-center p-6 text-gray-400 font-medium">
                                        [APP SCREENSHOT — MAP WITH NEARBY TASKS]
                                    </div>
                                    <img
                                        src="/assets/phone-screen.png"
                                        alt="App Screenshot"
                                        className="w-full h-full object-cover absolute top-0 left-0 hover:opacity-0 transition-opacity"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).style.display = 'none';
                                        }}
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Apple-style soft drop shadow behind phone */}
                        <div className="absolute top-1/2 left-1/2 lg:left-3/4 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gray-200/50 blur-[100px] rounded-full -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
