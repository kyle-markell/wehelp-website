import { Header } from './Header';
import { Footer } from './Footer';

export function Terms() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-32 pb-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Terms of Service</h1>
                    <p className="text-gray-500 mb-12">Last updated: February 13, 2026</p>

                    <div className="prose prose-lg prose-green max-w-none text-gray-600 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                            <p className="leading-relaxed">
                                By accessing and using the WeHelp mobile application ("App"), you accept and agree to be bound by the
                                terms and provision of this agreement. In addition, when using this App's particular services, you shall
                                be subject to any posted guidelines or rules applicable to such services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
                            <p className="leading-relaxed">
                                WeHelp provides a platform for users to connect with others in their community to request and offer
                                assistance. You understand and agree that the App is provided "AS-IS" and that WeHelp assumes no
                                responsibility for the timeliness, deletion, mis-delivery or failure to store any user communications or
                                personalization settings.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Account</h2>
                            <p className="leading-relaxed">
                                To use certain features of the App, you must register for an account. You agree to provide true,
                                accurate, current and complete information about yourself as prompted by the App's registration form.
                                You are responsible for maintaining the confidentiality of your account and password.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Conduct</h2>
                            <p className="leading-relaxed mb-4">You agree to not use the App to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>upload, post, email or otherwise transmit any content that is unlawful, harmful, threatening, abusive, harassing,  tortious, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically or otherwise objectionable;</li>
                                <li>harm minors in any way;</li>
                                <li>impersonate any person or entity.</li>
                            </ul>
                        </section>


                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Termination</h2>
                            <p className="leading-relaxed">
                                You agree that WeHelp may, under certain circumstances and without prior notice, immediately terminate
                                your WeHelp account and access to the App. Cause for such termination shall include, but not be limited
                                to, breaches or violations of the TOS or other incorporated agreements or guidelines.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
                            <p className="leading-relaxed">
                                If you have any questions about these Terms, please contact us at <a href="mailto:support@wehelp.community" className="text-[#00B900] hover:text-[#009900] font-medium">support@wehelp.community</a>.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
