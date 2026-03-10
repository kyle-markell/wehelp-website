import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FeedItem = {
    id: string;
    name: string;
    action: string;
    location?: string;
    time: string;
    colorTone: string;
};

const MOCK_NAMES = ["Kyle M.", "Genevieve G.", "Sarah T.", "Marcus J.", "David R.", "Elena S."];
const MOCK_ACTIONS = [
    { text: "posted a new request", requiresLocation: true },
    { text: "helped someone", requiresLocation: true },
    { text: "leveled up!", requiresLocation: false }
];
const MOCK_LOCATIONS = ["Tempe, Arizona", "Phoenix, Arizona", "Scottsdale, Arizona", "Mesa, Arizona", "Peoria, Arizona"];
const MOCK_COLORS = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500", "bg-pink-500"];

function generateRandomItem(): FeedItem {
    const name = MOCK_NAMES[Math.floor(Math.random() * MOCK_NAMES.length)];
    const actionObj = MOCK_ACTIONS[Math.floor(Math.random() * MOCK_ACTIONS.length)];
    const location = actionObj.requiresLocation ? MOCK_LOCATIONS[Math.floor(Math.random() * MOCK_LOCATIONS.length)] : undefined;
    const colorTone = MOCK_COLORS[Math.floor(Math.random() * MOCK_COLORS.length)];
    const id = Math.random().toString(36).substring(7);

    return {
        id,
        name,
        action: actionObj.text,
        location,
        time: "Just now",
        colorTone
    };
}

export function LiveFeed() {
    const [feed, setFeed] = useState<FeedItem[]>([
        { id: '1', name: "Kyle M.", action: "posted a new request", location: "Tempe, Arizona", time: "Just now", colorTone: "bg-blue-500" },
        { id: '2', name: "Kyle M.", action: "helped someone", location: "Tempe, Arizona", time: "1 min ago", colorTone: "bg-blue-500" },
        { id: '3', name: "Kyle M.", action: "leveled up!", time: "2 min ago", colorTone: "bg-blue-500" },
        { id: '4', name: "Genevieve G.", action: "helped someone", location: "Peoria, Arizona", time: "2 min ago", colorTone: "bg-green-500" },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setFeed(prev => {
                const newItem = generateRandomItem();
                // Update "time" string for older items to simulate the passage of time
                const updatedPrev = prev.map((item, idx) => ({
                    ...item,
                    time: idx === 0 ? "1 min ago" : idx === 1 ? "2 min ago" : idx === 2 ? "3 min ago" : "4 min ago"
                }));
                // Keep only top 4
                return [newItem, ...updatedPrev].slice(0, 4);
            });
        }, 4000); // New item every 4 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
                        See what you're missing!
                    </h2>
                    <p className="text-xl text-gray-500 font-light">
                        Live look inside the <span className="font-bold text-[#00B900]">WeHelp</span> community.
                    </p>
                </div>

                <div className="relative min-h-[400px]">
                    <div className="flex flex-col gap-4">
                        <AnimatePresence initial={false}>
                            {feed.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, y: -50, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className="bg-white border border-gray-100 rounded-full px-6 py-4 flex items-center gap-4 shadow-sm w-full mx-auto max-w-2xl"
                                >
                                    {/* Blurred Profile Picture Placeholder */}
                                    <div className={`w-12 h-12 rounded-full ${item.colorTone} opacity-40 blur-sm shrink-0`} />

                                    <div className="flex-1 text-left text-lg">
                                        <span className="font-bold text-[#00B900]">{item.name}</span>
                                        <span className="text-gray-700 mx-1">{item.action}</span>
                                        {item.location && (
                                            <>
                                                <span className="text-gray-500">in</span>
                                                <span className="font-bold text-[#00B900] ml-1">{item.location}</span>
                                            </>
                                        )}
                                    </div>

                                    <div className="text-sm text-gray-400 font-medium shrink-0">
                                        {item.time}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                    {/* Fade overlay for the bottom to make the exit smoother */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
                </div>
            </div>
        </section>
    );
}
