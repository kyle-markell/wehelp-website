import { motion } from 'framer-motion';

export function EmotionalSection() {
    return (
        <section id="mission" className="py-32 bg-gray-900 text-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold tracking-tight mb-12 leading-tight"
                >
                    Volunteering shouldn't be <span className="text-gray-400">hard.</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-8 text-xl md:text-2xl text-gray-300 leading-relaxed font-light"
                >
                    <p>
                        <span className="font-bold text-[#00B900]">WeHelp</span> makes it simple to find and post real requests,<br />
                        show up instantly, and help in ways that matter.
                    </p>

                </motion.div>
            </div>
        </section>
    );
}
