// Next.js 15 - src/app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/sw.js', '/workbox-*.js']
        },
        sitemap: 'https://bariopunks-simulator.vercel.app/sitemap.xml'
    };
}
