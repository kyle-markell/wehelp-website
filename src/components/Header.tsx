import { useState, useEffect } from 'react';

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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <a href="https://wehelp.community" className="flex items-center gap-2 cursor-pointer">
                            <img src="/assets/wehelp-logo.png" alt="WeHelp" className="h-10 w-auto" />
                        </a>
                    </div>
                    <div className="flex items-center">
                        <a href={appStoreLink} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                            <img src="/assets/app-store-badge.svg" alt="Download on the App Store" className="h-[42px] w-auto" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
