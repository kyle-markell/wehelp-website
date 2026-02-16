import { Star } from 'lucide-react';

const testimonials = [
    {
        quote: "I opened the app and someone nearby needed help moving furniture. Ten minutes later, I was there.",
        author: "Alex M.",
        role: "Volunteer"
    },
    {
        quote: "This makes volunteering feel natural — not like an event, but like life.",
        author: "Sarah K.",
        role: "Community Organizer"
    },
    {
        quote: "It’s the first app that makes helping others as easy as showing up.",
        author: "David L.",
        role: "Early Adopter"
    }
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 mb-16">
                    Kindness in action
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between">
                            <div>
                                <div className="flex gap-1 mb-6 text-yellow-400">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p className="text-lg text-gray-700 font-medium leading-relaxed mb-6">
                                    "{t.quote}"
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-900 font-bold">{t.author}</p>
                                <p className="text-gray-500 text-sm">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
