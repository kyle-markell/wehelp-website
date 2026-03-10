import { Link } from 'react-router-dom';

export function Footer() {
    const appStoreLink = "https://apps.apple.com/us/app/wehelp-community-volunteering/id6759263096";

    return (
        <footer className="bg-white py-16 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">

                    {/* Left: Logo & App Store */}
                    <div className="flex flex-col gap-6">
                        <a href="https://wehelp.community" className="self-start">
                            <img src="/assets/wehelp-logo.png" alt="WeHelp" className="h-10 w-auto object-contain" />
                        </a>
                        <a href={appStoreLink} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity self-start">
                            <img src="/assets/app-store-badge-hq.png" alt="Download on the App Store" className="h-[42px] w-auto" />
                        </a>
                        <p className="text-sm text-gray-400 mt-4">
                            © Copyright 2026. All rights reserved.
                        </p>
                    </div>

                    {/* Center: Legal */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-gray-900 mb-2">Legal</h4>
                        <Link to="/privacy" className="text-sm text-gray-500 hover:text-[#00B900] transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="text-sm text-gray-500 hover:text-[#00B900] transition-colors">Terms of Service</Link>
                    </div>

                    {/* Right: Company */}
                    <div className="flex flex-col gap-4 md:text-right">
                        <h4 className="font-bold text-gray-900 mb-2">Company</h4>
                        <a href="mailto:support@wehelp.app" className="text-sm text-gray-500 hover:text-[#00B900] transition-colors">Contact</a>
                    </div>

                </div>
            </div>
        </footer>
    );
}
