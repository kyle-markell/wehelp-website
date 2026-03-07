import { motion } from 'framer-motion';
import { Button } from './Button';

export function HowItWorks() {
    return (
        <section className="py-32 bg-gray-900 border-t border-gray-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-10 leading-tight">
                        Your next good deed is nearby.
                    </h2>
                    <a href="https://apps.apple.com/us/app/wehelp-community-volunteering/id6759263096" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="px-12 py-6 text-xl rounded-full hover:scale-105 transition-transform bg-[#00B900] text-gray-900 hover:bg-[#009900] shadow-xl font-bold border-none">
                            Download on App Store
                        </Button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
