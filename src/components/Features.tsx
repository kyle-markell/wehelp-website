import { Map, MessageSquare, PlusCircle, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: Map,
        title: "No long commitments.",
        description: "Jump in and help whenever it works for your schedule.",
        color: "bg-blue-100 text-blue-600",
        delay: 0
    },
    {
        icon: PlusCircle,
        title: "No complicated signup.",
        description: "Just download, verify, and start helping your neighbors.",
        color: "bg-[#00B900]/10 text-[#00B900]",
        delay: 0.1
    },
    {
        icon: Users,
        title: "Just real help.",
        description: "When it's needed most, connect with people near you.",
        color: "bg-purple-100 text-purple-600",
        delay: 0.2
    },
    {
        icon: MessageSquare,
        title: "Micro-volunteering",
        description: "Small acts of kindness that create stronger communities.",
        color: "bg-orange-100 text-orange-600",
        delay: 0.3
    }
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                        Micro-volunteering for <br className="hidden sm:block" />
                        <span className="text-[#00B900]">everyday life</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        WeHelp connects people who need help with neighbors who have a little time. From small favors to community tasks, you can jump in and help whenever it works for you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: feature.delay, duration: 0.5 }}
                            className="group p-8 rounded-3xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-xl transition-all duration-300"
                        >
                            <div className={`w-12 h-12 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
