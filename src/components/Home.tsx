import { Header } from './Header';
import { Hero } from './Hero';
import { EmotionalSection } from './EmotionalSection';
import { Features } from './Features';
import { Testimonials } from './Testimonials';
import { HowItWorks } from './HowItWorks';
import { Footer } from './Footer';

export function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <Hero />
                <EmotionalSection />
                <Features />
                <Testimonials />
                <HowItWorks />
            </main>
            <Footer />
        </div>
    );
}
