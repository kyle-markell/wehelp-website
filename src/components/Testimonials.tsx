import { motion } from 'framer-motion';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const growthData = [
    { month: 'Jan', users: 0 },
    { month: 'Feb', users: 150 },
    { month: 'Mar', users: 400 },
    { month: 'Apr', users: 850 },
    { month: 'May', users: 1400 },
    { month: 'Jun', users: 2450 },
];

export function Testimonials() {
    return (
        <section className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Sequence */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6"
                    >
                        Growing community.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl md:text-3xl font-medium text-gray-400 tracking-tight"
                    >
                        People are showing up for each other.
                    </motion.p>
                </div>

                {/* Interactive Chart Container */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full max-w-5xl mx-auto h-[400px] mb-20"
                >
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={growthData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#00B900" stopOpacity={0.2} />
                                    <stop offset="95%" stopColor="#00B900" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis
                                dataKey="month"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#9ca3af', fontSize: 14 }}
                                dy={10}
                            />
                            <YAxis
                                hide
                                domain={[0, 'auto']}
                            />
                            <Tooltip
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)', fontWeight: 'bold' }}
                                itemStyle={{ color: '#00B900' }}
                                formatter={(value: any) => [value.toLocaleString(), 'Users']}
                                labelStyle={{ color: '#6b7280', marginBottom: '4px' }}
                            />
                            <Area
                                type="monotone"
                                dataKey="users"
                                stroke="#00B900"
                                strokeWidth={4}
                                fillOpacity={1}
                                fill="url(#colorUsers)"
                                activeDot={{ r: 8, strokeWidth: 0, fill: '#00B900' }}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </motion.div>

                {/* Big Stat Block */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center"
                >
                    <div className="text-7xl md:text-9xl font-black text-[#00B900] tracking-tighter mb-4">
                        1,390
                    </div>
                    <div className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
                        Good Deeds Completed Today
                    </div>
                    <div className="text-xl text-gray-400 font-medium tracking-tight">
                        Small actions. Real impact.
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
