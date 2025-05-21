// Next.js 15 - src/providers/FontProvider.tsx
'use client';
import { createContext, useContext, useEffect, ReactNode, useRef } from 'react';
import { useLanguageStore } from '@/stores/languageStore';
import {
    Geist,
    Geist_Mono,
    Noto_Sans_Thai,
    Dancing_Script
} from 'next/font/google';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
    display: 'swap'
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
    display: 'swap'
});

const notoSansThai = Noto_Sans_Thai({
    variable: '--font-thai',
    weight: ['400', '500', '600', '700'],
    subsets: ['thai'],
    display: 'swap'
});

export const dancingScript = Dancing_Script({
    variable: '--font-dancing-script',
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '600', '700']
});

const FontContext = createContext<{ fontClass: string }>({ fontClass: '' });

export const useFontContext = () => useContext(FontContext);

export const FontProvider = ({ children }: { children: ReactNode }) => {
    const { lang } = useLanguageStore();
    const previousFontClassRef = useRef<string | null>(null);

    const getFontClassForLocale = () => {
        switch (lang) {
            case 'th':
                return `${geistSans.variable} ${geistMono.variable} ${notoSansThai.variable} ${dancingScript.variable} font-thai`;
            default:
                return `${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} font-sans`;
        }
    };

    const fontClass = getFontClassForLocale();

    useEffect(() => {
        if (typeof document !== 'undefined') {
            const htmlElement = document.documentElement;

            if (previousFontClassRef.current) {
                const prevClasses = previousFontClassRef.current
                    .split(' ')
                    .filter((cls) => cls.trim() !== '');
                htmlElement.classList.remove(...prevClasses);
            }

            const newClasses = fontClass
                .split(' ')
                .filter((cls) => cls.trim() !== '');
            htmlElement.classList.add(...newClasses);

            if (!htmlElement.classList.contains('antialiased')) {
                htmlElement.classList.add('antialiased');
            }

            previousFontClassRef.current = fontClass;
        }
    }, [fontClass]);

    return (
        <FontContext.Provider value={{ fontClass }}>
            {children}
        </FontContext.Provider>
    );
};

export const allFonts = [
    geistSans.variable,
    geistMono.variable,
    notoSansThai.variable,
    dancingScript.variable
];
