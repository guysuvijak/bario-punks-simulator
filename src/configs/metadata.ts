// Next.js 15 - src/configs/metadata.ts
import type { Viewport, Metadata } from 'next';

export const VIEWPORT: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: '#1100ff'
};

export const METADATA: Metadata = {
    manifest: '/manifest.json',
    title: 'Bario Punks Simulator | Punks not dead! 🏴‍☠️',
    description:
        'Bario Punks is a limited collection of 3,333 NFTs living on Base. Each Punk holds a unique place in the Bario Entertainment System, offering exclusive access to key features, in-game perks, and voting rights within the ecosystem.',
    metadataBase: new URL('https://bariopunks-simulator.vercel.app'),
    openGraph: {
        title: 'Bario Punks Simulator | Punks not dead!',
        description:
            'Bario Punks is a limited collection of 3,333 NFTs living on Base. Each Punk holds a unique place in the Bario Entertainment System, offering exclusive access to key features, in-game perks, and voting rights within the ecosystem.',
        url: 'https://bariopunks-simulator.vercel.app',
        siteName: 'Bario Punks Simulator',
        images: [
            {
                url: 'https://bariopunks-simulator.vercel.app/manifest.webp',
                width: 1200,
                height: 630
            }
        ],
        type: 'website'
    },
    keywords: [
        'Bario',
        'Bario Punks',
        'Bario Simulator',
        'Bario Punks Simulator',
        'Punk Town',
        'Bario base chain',
        'Bario Entertainment System'
    ],
    authors: [
        { name: 'Bario Punks Simulator' },
        {
            name: 'Bario Punks Simulator',
            url: 'https://bariopunks-simulator.vercel.app/'
        }
    ],
    icons: {
        icon: [
            { url: '/favicon.ico', type: 'image/x-icon' },
            { url: '/icons/icon-48x48.png', type: 'image/png' },
            { url: '/icons/icon-72x72.png', type: 'image/png' },
            { url: '/icons/icon-96x96.png', type: 'image/png' },
            { url: '/icons/icon-128x128.png', type: 'image/png' }
        ],
        apple: [{ url: '/icons/icon-128x128.png', type: 'image/png' }]
    },
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: 'Bario Punks Simulator'
    },
    applicationName: 'Bario Punks Simulator',
    formatDetection: {
        telephone: false
    }
};
