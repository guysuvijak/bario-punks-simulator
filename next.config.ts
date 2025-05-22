import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    env: {
        REOWN_PROJECT_ID: process.env.REOWN_PROJECT_ID
    }
};

export default nextConfig;
