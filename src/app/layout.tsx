// Next.js 15 - src/app/layout.tsx
import { ReactNode } from 'react';
import { VIEWPORT, METADATA } from '@/configs/metadata';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { LanguageProvider } from '@/providers/LanguageProvider';
import { FontProvider } from '@/providers/FontProvider';
import { Footer } from '@/components/Footer';
import './globals.css';

export const viewport = VIEWPORT;
export const metadata = METADATA;

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang='en' suppressHydrationWarning className='h-full'>
            <body className='flex flex-col h-full bg-gradient-to-tr from-blue-200 to-blue-100 dark:from-[#05001e] dark:to-[#140862]'>
                <ThemeProvider>
                    <LanguageProvider />
                    <FontProvider>
                        <main className='flex-1'>{children}</main>
                        <Footer />
                    </FontProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
