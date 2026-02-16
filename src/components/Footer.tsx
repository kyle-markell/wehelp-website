import { Button } from './Button';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main CTA Section */}
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                        The world is a better place <br />
                        with <span className="text-[#00B900]">WeHelp.</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Download WeHelp and show up for someone else today.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="https://apps.apple.com/us/app/wehelp-community-volunteering/id6759263096" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="gap-2 bg-[#00B900] hover:bg-[#009900]">
                                Download on App Store
                            </Button>
                        </a>
                    </div>
                </div>

                {/* Links & Copyright */}
                <div className="border-t border-gray-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-gray-900">WeHelp</span>
                        <span className="text-gray-400 text-sm">© 2026 WeHelp Inc.</span>
                    </div>

                    <div className="flex gap-8 text-sm text-gray-500">
                        <Link to="/privacy" className="hover:text-gray-900 transition-colors">Privacy</Link>
                        <Link to="/terms" className="hover:text-gray-900 transition-colors">Terms</Link>
                    </div>
                </div>
            </div>

            {/* Bottom Glow */}
            <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#00B900]/5 to-transparent pointer-events-none -z-10" />
        </footer>
    );
}
