import { useEffect } from 'react';
export function LandingPage() {

    const appStoreLink = "https://apps.apple.com/us/app/wehelp-community-volunteering/id6759263096";
    // const playStoreLink = "https://play.google.com/store/apps/details?id=com.kylemarkell.WeHelp"; // Placeholder - Android Unused

    useEffect(() => {
        // Logic Check:
        // Since we ONLY have an iOS app, we want everyone (Android, Desktop, iOS)
        // to end up at the Apple App Store page. 
        // - iOS users will get the "Open" or "Download" button.
        // - Android/Desktop users will see the App Store web preview.

        window.location.href = appStoreLink;

    }, []);

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
            <p className="text-gray-500">Redirecting to App Store...</p>
        </div>
    );
}
