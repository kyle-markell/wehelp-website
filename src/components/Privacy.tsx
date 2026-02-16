import { Header } from './Header';
import { Footer } from './Footer';

export function Privacy() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-32 pb-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Privacy Policy</h1>
                    <p className="text-gray-500 mb-12">Last updated: February 13, 2026</p>

                    <div className="prose prose-lg prose-green max-w-none text-gray-600 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                            <p className="leading-relaxed">
                                WeHelp ("we," "our," or "us") respects your privacy and is committed to protecting it through our
                                compliance with this policy. This policy describes the types of information we may collect from you or
                                that you may provide when you visit the WeHelp mobile application (the "App") and our practices for
                                collecting, using, maintaining, protecting, and disclosing that information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                            <p className="leading-relaxed mb-4">We collect several types of information from and about users of our App, including information:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>By which you may be personally identified, such as name, postal address, e-mail address, telephone number ("personal information");</li>
                                <li>About your internet connection, the equipment you use to access our App, and usage details.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                            <p className="leading-relaxed mb-4">We use information that we collect about you or that you provide to us, including any personal information:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>To present our App and its contents to you.</li>
                                <li>To provide you with information, products, or services that you request from us.</li>
                                <li>To fulfill any other purpose for which you provide it.</li>
                                <li>To provide you with notices about your account, including expiration and renewal notices.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclosure of Your Information</h2>
                            <p className="leading-relaxed mb-4">We may disclose aggregated information about our users, and information that does not identify any individual, without restriction.</p>
                            <p className="leading-relaxed mb-4">We may disclose personal information that we collect or you provide as described in this privacy policy:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-8">
                                <li>To our subsidiaries and affiliates.</li>
                                <li>To contractors, service providers, and other third parties we use to support our business.</li>
                                <li>To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of WeHelp's assets.</li>
                                <li>To fulfill the purpose for which you provide it.</li>
                            </ul>

                            <div className="bg-green-50 p-6 rounded-2xl border-l-4 border-[#00B900]">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">SMS Consent and Phone Numbers</h3>
                                <p className="text-gray-700">
                                    <strong>No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information won't be shared with any third parties.</strong>
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                            <p className="leading-relaxed">
                                To ask questions or comment about this privacy policy and our privacy practices, contact us at: <a href="mailto:support@wehelp.community" className="text-[#00B900] hover:text-[#009900] font-medium">support@wehelp.community</a>
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
