import { useState, useEffect } from 'react';
import { Button } from './Button';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const appStoreLink = "https://apps.apple.com/us/app/wehelp-community-volunteering/id6759263096";

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <a href="#" className="flex items-center gap-2">
                            <img src="/assets/logo-header.png" alt="WeHelp" className="h-8 w-auto" />
                        </a>
                    </div>

                    {/* Always visible Download Button */}
                    <div className="flex items-center gap-8">
                        <a href={appStoreLink} target="_blank" rel="noopener noreferrer">
                            <Button size="sm">Download App</Button>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
