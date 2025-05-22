// Next.js 15 - src/providers/Web3Provider.tsx
'use client';

import { wagmiAdapter, projectId } from '@/lib/wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createAppKit } from '@reown/appkit/react';
import { mainnet, base } from '@reown/appkit/networks';
import { type ReactNode } from 'react';
import { cookieToInitialState, WagmiProvider, type Config } from 'wagmi';

// Set up queryClient
const queryClient = new QueryClient();

if (!projectId) {
    throw new Error('Project ID is not defined');
}

// Set up metadata
const metadata = {
    name: 'Bario Punks Simulator',
    description: 'Bario Punks AppKit',
    url: 'https://bariopunks-simulator.vercel.app/',
    icons: ['https://assets.reown.com/reown-profile-pic.png']
};

// Create the AppKit modal (called once globally, used by <appkit-button />)
createAppKit({
    adapters: [wagmiAdapter],
    projectId,
    networks: [mainnet, base],
    defaultNetwork: base,
    metadata: metadata,
    features: {
        analytics: true // Optional - defaults to your Cloud configuration
    }
});

function Web3Provider({
    children,
    cookies
}: {
    children: ReactNode;
    cookies: string | null;
}) {
    const initialState = cookieToInitialState(
        wagmiAdapter.wagmiConfig as Config,
        cookies
    );

    return (
        <WagmiProvider
            config={wagmiAdapter.wagmiConfig as Config}
            initialState={initialState}
        >
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </WagmiProvider>
    );
}

export default Web3Provider;
