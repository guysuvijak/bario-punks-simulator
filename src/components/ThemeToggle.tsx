// Next.js 15 - src/components/ThemeToggle.tsx
'use client';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import { TooltipWrapper } from '@/components/TooltipWrapper';

export default function ThemeToggle() {
    const { t } = useTranslation();
    const { theme, setTheme } = useTheme();

    return (
        <TooltipWrapper message={t('theme-tooltip')}>
            <Button
                variant='outline'
                size='icon'
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label='Theme Button'
                className='cursor-pointer'
            >
                {theme === 'dark' ? (
                    <Moon className='h-5 w-5' />
                ) : (
                    <Sun className='h-5 w-5' />
                )}
            </Button>
        </TooltipWrapper>
    );
}
