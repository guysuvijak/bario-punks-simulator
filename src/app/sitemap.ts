// Next.js 15 - src/app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://bariopunks-simulator.vercel.app',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1
        }
    ];
}
