export function StaticTestimonials() {
    return (
        <section className="py-24 bg-green-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
                        Thousands of people love <span className="text-[#00B900]">WeHelp</span>
                    </h2>
                    <p className="text-xl text-gray-500 font-light">
                        Don't just take our word for it.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 font-['Inter']">Neighbor Who Needed Help</h3>
                        <p className="text-gray-600 text-base leading-relaxed mb-6 font-serif italic">
                            “After my surgery I couldn't drive for two weeks. Someone from WeHelp picked up groceries for me the same afternoon. I had never met them before — but I'll never forget that kindness.”
                        </p>
                        <p className="text-sm text-gray-400 font-medium">— Maria, Phoenix</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 font-['Inter']">Volunteer / Contributor</h3>
                        <p className="text-gray-600 text-base leading-relaxed mb-6 font-serif italic">
                            “I only had 20 minutes before work, but I helped someone move a small dresser down the street. It felt good knowing a small moment of my day made someone else's easier.”
                        </p>
                        <p className="text-sm text-gray-400 font-medium">— Jordan, Tempe</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 font-['Inter']">Community Organization</h3>
                        <p className="text-gray-600 text-base leading-relaxed mb-6 font-serif italic">
                            “WeHelp has helped us get volunteers faster than any traditional signup sheet. Small tasks that used to take days to fill now happen the same day.”
                        </p>
                        <p className="text-sm text-gray-400 font-medium">— Lisa, Shelter Coordinator</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
