// Next.js 15 - src/components/Footer.tsx
'use client';
import { useTranslation } from '@/hooks/useTranslation';
import Link from 'next/link';

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className='flex items-center relative justify-center gap-1 h-[50px] bg-background text-foreground text-sm'>
            {t('footer-create')}
            <Link
                href='https://github.com/guysuvijak'
                target='_blank'
                rel='noopener noreferrer'
                className='underline hover:text-blue-300 transition-colors'
            >
                MeteorVIIx
            </Link>
            {' | '}
            <Link
                href='https://github.com/guysuvijak/bario-punks-simulator'
                target='_blank'
                rel='noopener noreferrer'
                className='underline hover:text-blue-300 transition-colors'
            >
                {t('footer-sourcecode')}
            </Link>
            {' | '}
            <Link
                href='https://baes.so'
                target='_blank'
                rel='noopener noreferrer'
                className='underline hover:text-blue-300 transition-colors'
            >
                {t('footer-website')}
            </Link>
        </footer>
    );
};
