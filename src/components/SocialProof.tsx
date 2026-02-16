import { Users, ShieldCheck, Heart, Zap } from 'lucide-react';

const stats = [
    { icon: Users, label: "Built for real communities" },
    { icon: Zap, label: "Designed to make helping effortless" },
    { icon: ShieldCheck, label: "Free for everyone" },
    { icon: Heart, label: "Powered by people nearby" },
];

export function SocialProof() {
    return (
        <section className="py-10 border-y border-gray-100 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex items-center gap-2.5 text-gray-600 grayscale hover:grayscale-0 transition-all duration-300">
                            <stat.icon className="w-5 h-5" />
                            <span className="text-sm font-medium">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
