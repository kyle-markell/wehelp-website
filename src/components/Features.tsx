import { motion } from 'framer-motion';

export function Features() {
    return (
        <section className="py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

                    {/* Left Column: Need help? */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-16">
                            Need help?
                        </h3>

                        <div className="space-y-12">
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center font-bold text-xl text-[#00B900]">1</div>
                                <div>
                                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Post a quick task</h4>
                                    <p className="text-xl text-gray-500 font-light">Describe what you need in seconds.</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center font-bold text-xl text-[#00B900]">2</div>
                                <div>
                                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Neighbors nearby see it</h4>
                                    <p className="text-xl text-gray-500 font-light">People in your area are notified.</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center font-bold text-xl text-[#00B900]">3</div>
                                <div>
                                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Get the help you need</h4>
                                    <p className="text-xl text-gray-500 font-light">A neighbor shows up to lend a hand.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Want to help? */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-16">
                            Want to help?
                        </h3>

                        <div className="space-y-12">
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center font-bold text-xl text-blue-600">1</div>
                                <div>
                                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Find a task nearby</h4>
                                    <p className="text-xl text-gray-500 font-light">Open the map to see who needs you.</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center font-bold text-xl text-blue-600">2</div>
                                <div>
                                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Accept it instantly</h4>
                                    <p className="text-xl text-gray-500 font-light">No applications or waiting periods.</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center font-bold text-xl text-blue-600">3</div>
                                <div>
                                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Show up and help</h4>
                                    <p className="text-xl text-gray-500 font-light">Complete the task and make an impact.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
