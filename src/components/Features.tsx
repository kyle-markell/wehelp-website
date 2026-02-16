import { Map, MessageSquare, PlusCircle, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: Map,
        title: "Live Map of Nearby Requests",
        description: "See real people nearby who need help — updated in real time.",
        color: "bg-blue-100 text-blue-600",
        delay: 0
    },
    {
        icon: PlusCircle,
        title: "Post What You Need",
        description: "Moving, yard work, tech support, errands. Ask in seconds.",
        color: "bg-[#00B900]/10 text-[#00B900]",
        delay: 0.1
    },
    {
        icon: Users,
        title: "Volunteer in One Tap",
        description: "Join opportunities instantly, solo or with others.",
        color: "bg-purple-100 text-purple-600",
        delay: 0.2
    },
    {
        icon: MessageSquare,
        title: "Group Messaging + Coordination",
        description: "Chat with other volunteers and plan everything smoothly.",
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
                        Kindness, <br className="hidden sm:block" />
                        <span className="text-[#00B900]">made easy.</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Help when you have time. In ways that feel natural. With impact you can see.
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
