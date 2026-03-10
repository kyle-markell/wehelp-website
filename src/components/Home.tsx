import { Header } from './Header';
import { HeroRebuild } from './HeroRebuild';
import { WhatWeDo } from './WhatWeDo';
import { LiveFeed } from './LiveFeed';
import { StaticTestimonials } from './StaticTestimonials';
import { Footer } from './Footer';

export function Home() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#00B900]/20">
            <Header />
            <main>
                <HeroRebuild />
                <WhatWeDo />
                <LiveFeed />
                <StaticTestimonials />
            </main>
            <Footer />
        </div>
    );
}
