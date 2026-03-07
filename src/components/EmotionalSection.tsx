import { motion } from 'framer-motion';

export function EmotionalSection() {
    return (
        <section className="py-32 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="space-y-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
                        Sometimes someone just needs…
                    </h2>

                    <div className="space-y-6 text-3xl md:text-5xl font-medium text-gray-400 tracking-tight">
                        <p>A quick favor.</p>
                        <p>A second set of hands.</p>
                        <p>Someone who can show up.</p>
                    </div>

                    <p className="text-2xl md:text-4xl font-semibold text-[#00B900] pt-8">
                        WeHelp makes helping nearby simple.
                    </p>
                </motion.div>

                {/* Photo Grid Placeholders */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
                    {[
                        { label: "[PHOTO — neighbors helping move boxes]" },
                        { label: "[PHOTO — helping elderly neighbor]" },
                        { label: "[PHOTO — park cleanup volunteers]" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                            className="aspect-square bg-gray-50 rounded-[2rem] flex items-center justify-center p-8 text-center border-2 border-dashed border-gray-200"
                        >
                            <span className="text-gray-400 font-medium">{item.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
