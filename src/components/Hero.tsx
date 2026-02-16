import { motion } from 'framer-motion';
import { Button } from './Button';

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Gradient Mesh */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-green-100/50 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >

                            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
                                Find Help. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B900] to-[#006000]">
                                    Be the Help.
                                </span>
                            </h1>

                            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                <span className="font-bold text-[#00B900]">WeHelp</span> brings people together to help each other.
                                From big tasks to small favors, helping has never been easier.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                                <Button size="lg" className="w-full sm:w-auto hover:scale-105 transition-transform bg-[#00B900] hover:bg-[#009900]">
                                    Download WeHelp
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    {/* iPhone Mockup */}
                    <div className="flex-1 relative w-full max-w-[400px] lg:max-w-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative z-10"
                        >
                            <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl">
                                <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
                                    {/* Mockup Screen Content */}
                                    <img
                                        src="/assets/phone-screen.png"
                                        alt="App Screenshot"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative blobs behind phone */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-gradient-to-tr from-blue-200/30 to-purple-200/30 blur-3xl rounded-full -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
