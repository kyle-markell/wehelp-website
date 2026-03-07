import { motion } from 'framer-motion';

export function Testimonials() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold tracking-tight text-gray-900 mb-8"
                >
                    Small help creates <br />
                    <span className="text-[#00B900]">stronger communities</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-gray-600 space-y-6 leading-relaxed"
                >
                    <p>Every day, people around you need small moments of help.</p>
                    <p className="font-medium text-gray-800">
                        A neighbor carrying groceries.<br />
                        A park cleanup.<br />
                        A quick favor that means the world to someone else.
                    </p>
                    <p>WeHelp makes it easy to show up.</p>
                    <p className="text-2xl font-bold text-gray-900 mt-8">
                        Because when people help each other, communities become stronger.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
