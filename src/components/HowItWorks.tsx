import { motion } from 'framer-motion';
import { Smartphone, CheckCircle2, HeartHandshake } from 'lucide-react';

const steps = [
    {
        icon: Smartphone,
        title: "1. Post what you need",
        description: "Describe the task, set a location, and ask for help in seconds."
    },
    {
        icon: CheckCircle2,
        title: "2. Match with volunteers",
        description: "Neighbors nearby see your request and can accept it instantly."
    },
    {
        icon: HeartHandshake,
        title: "3. Show up & help",
        description: "Coordinate details, get the job done, and make someone's day."
    }
];

export function HowItWorks() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">How it works</h2>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                className="text-center bg-white"
                            >
                                <div className="w-24 h-24 mx-auto bg-white rounded-full border-4 border-gray-50 flex items-center justify-center mb-6 shadow-sm relative z-10">
                                    <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white">
                                        <step.icon size={32} />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                <p className="text-gray-600 max-w-xs mx-auto">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
