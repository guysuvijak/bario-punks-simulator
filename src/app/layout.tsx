// Next.js 15 - src/app/layout.tsx
import { headers } from 'next/headers';
import { ReactNode } from 'react';
import { VIEWPORT, METADATA } from '@/configs/metadata';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { LanguageProvider } from '@/providers/LanguageProvider';
import { FontProvider } from '@/providers/FontProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Web3Provider from '@/providers/Web3Provider';
import './globals.css';

export const viewport = VIEWPORT;
export const metadata = METADATA;

export default async function RootLayout({
    children
}: {
    children: ReactNode;
}) {
    const headerList = await headers();
    const cookies = headerList.get('cookie');

    return (
        <html lang='en' suppressHydrationWarning className='h-full'>
            <body className='flex flex-col h-full bg-gradient-to-tr from-blue-200 to-blue-100 dark:from-[#05001e] dark:to-[#140862]'>
                <Web3Provider cookies={cookies}>
                    <ThemeProvider>
                        <LanguageProvider />
                        <FontProvider>
                            <Navbar />
                            <main className='flex-1'>{children}</main>
                            <Footer />
                        </FontProvider>
                    </ThemeProvider>
                </Web3Provider>
            </body>
        </html>
    );
}
