// Next.js 15 - src/components/Web3Connect.tsx
'use client';
import { useTranslation } from '@/hooks/useTranslation';
import { TooltipWrapper } from '@/components/TooltipWrapper';

export default function Web3Connect() {
    const { t } = useTranslation();

    return (
        <TooltipWrapper message={t('connect-wallet-tooltip')}>
            <appkit-button></appkit-button>
        </TooltipWrapper>
    );
}
