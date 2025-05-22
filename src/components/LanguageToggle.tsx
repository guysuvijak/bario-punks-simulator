// Next.js 15 - src/components/LanguageToggle.tsx
'use client';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useLanguageStore } from '@/stores/languageStore';
import { Check } from 'lucide-react';
import { TooltipWrapper } from '@/components/TooltipWrapper';
import { useTranslation } from '@/hooks/useTranslation';

export default function LanguageToggle() {
    const { t } = useTranslation();
    const { lang, setLang } = useLanguageStore();

    return (
        <DropdownMenu>
            <TooltipWrapper message={t('language-tooltip')}>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant='outline'
                        size='icon'
                        aria-label='Language Button'
                        className='cursor-pointer'
                    >
                        {lang === 'th' ? <p>🇹🇭</p> : <p>🇺🇸</p>}
                    </Button>
                </DropdownMenuTrigger>
            </TooltipWrapper>
            <DropdownMenuContent className='z-60'>
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => setLang('en')}>
                        🇺🇸 English {lang === 'en' && <Check />}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLang('th')}>
                        🇹🇭 Thai {lang === 'th' && <Check />}
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
