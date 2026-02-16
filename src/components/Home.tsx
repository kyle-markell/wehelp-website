import { Header } from './Header';
import { Hero } from './Hero';
import { SocialProof } from './SocialProof';
import { Features } from './Features';
import { EmotionalSection } from './EmotionalSection';
import { HowItWorks } from './HowItWorks';
import { Testimonials } from './Testimonials';
import { Footer } from './Footer';

export function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <Hero />
                <SocialProof />
                <Features />
                <EmotionalSection />
                <HowItWorks />
                <Testimonials />
            </main>
            <Footer />
        </div>
    );
}
