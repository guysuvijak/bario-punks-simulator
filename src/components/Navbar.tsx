// Next.js 15 - src/components/Navbar.tsx
'use client';
import LanguageToggle from '@/components/LanguageToggle';
import ThemeToggle from '@/components/ThemeToggle';
import Web3Connect from '@/components/Web3Connect';

export const Navbar = () => {
    return (
        <header className='p-4 flex justify-between items-center border-b-2 border-border z-60 sticky top-0 bg-background/95 backdrop-blur-md'>
            <Web3Connect />
            <div className='flex items-center gap-2'>
                <LanguageToggle />
                <ThemeToggle />
            </div>
        </header>
    );
};
