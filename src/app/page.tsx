// Next.js 15 - src/app/page.tsx
'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import {
    BarioAttributes,
    TraitBackscope,
    TraitBrainbox,
    TraitExistatron,
    TraitGearbit,
    TraitSkinframe,
    TraitValue
} from '@/types/traits';
import { TooltipWrapper } from '@/components/TooltipWrapper';
import { traitLabels, traitIcons, traitOptions } from '@/configs/bario';
import { Button } from '@/components/ui/button';
import { Dices } from 'lucide-react';
import { AuroraText } from '@/components/magicui/aurora-text';
import LanguageToggle from '@/components/LanguageToggle';
import ThemeToggle from '@/components/ThemeToggle';
import { useTranslation } from '@/hooks/useTranslation';

export default function Home() {
    const { t } = useTranslation();
    const [selectedTrait, setSelectedTrait] =
        useState<BarioAttributes>('backscope');
    const [selectedBackscope, setSelectedBackscope] =
        useState<TraitBackscope>('BARBIO');
    const [selectedExistatron, setSelectedExistatron] =
        useState<TraitExistatron>('HACKER BARIO');
    const [selectedSkinframe, setSelectedSkinframe] =
        useState<TraitSkinframe>('Aladdin');
    const [selectedBrainbox, setSelectedBrainbox] =
        useState<TraitBrainbox>('ACA BARIOS');
    const [selectedGearbit, setSelectedGearbit] = useState<TraitGearbit>('3D');

    const handleTraitChange = (trait: BarioAttributes, value: TraitValue) => {
        switch (trait) {
            case 'backscope':
                setSelectedBackscope(value as TraitBackscope);
                break;
            case 'brainbox':
                setSelectedBrainbox(value as TraitBrainbox);
                break;
            case 'existatron':
                setSelectedExistatron(value as TraitExistatron);
                break;
            case 'skinframe':
                setSelectedSkinframe(value as TraitSkinframe);
                break;
            case 'gearbit':
                setSelectedGearbit(value as TraitGearbit);
                break;
            default:
                break;
        }
    };

    const RandomTraits = () => {
        console.log('test');
        const randomPick = <T,>(arr: T[]): T => {
            return arr[Math.floor(Math.random() * arr.length)];
        };

        setSelectedBackscope(
            randomPick(traitOptions['backscope']) as TraitBackscope
        );
        setSelectedExistatron(
            randomPick(traitOptions['existatron']) as TraitExistatron
        );
        setSelectedSkinframe(
            randomPick(traitOptions['skinframe']) as TraitSkinframe
        );
        setSelectedBrainbox(
            randomPick(traitOptions['brainbox']) as TraitBrainbox
        );
        setSelectedGearbit(randomPick(traitOptions['gearbit']) as TraitGearbit);
    };

    return (
        <div className='flex flex-col max-w-7xl mx-auto items-center justify-center gap-6 p-4'>
            <h3 className='text-xl sm:text-3xl font-extrabold text-blue-900'>
                <AuroraText>{t('title')}</AuroraText>
            </h3>
            <div className='flex gap-2 md:gap-4 items-center justify-center'>
                <div className='flex flex-col sm:flex-row gap-2'>
                    <div className='flex flex-row sm:flex-col gap-1 justify-center'>
                        <LanguageToggle />
                        <ThemeToggle />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex relative w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] md:w-[200px] md:h-[200px]'>
                            <Image
                                src={`/traits/backscope/${selectedBackscope}.png`}
                                alt='Bario backscope'
                                width={200}
                                height={200}
                                priority
                                className='w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] md:w-[200px] md:h-[200px] absolute z-10'
                            />
                            <Image
                                src={`/traits/existatron/${selectedExistatron}.png`}
                                alt='Bario existatron'
                                width={200}
                                height={200}
                                priority
                                className='w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] md:w-[200px] md:h-[200px] absolute z-20'
                            />
                            <Image
                                src={`/traits/skinframe/${selectedSkinframe}.png`}
                                alt='Bario skinframe'
                                width={200}
                                height={200}
                                priority
                                className='w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] md:w-[200px] md:h-[200px] absolute z-30'
                            />
                            <Image
                                src={`/traits/brainbox/${selectedBrainbox}.png`}
                                alt='Bario brainbox'
                                width={200}
                                height={200}
                                priority
                                className='w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] md:w-[200px] md:h-[200px] absolute z-40'
                            />
                            <Image
                                src={`/traits/gearbit/${selectedGearbit}.png`}
                                alt='Bario gearbit'
                                width={200}
                                height={200}
                                priority
                                className='w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] md:w-[200px] md:h-[200px] absolute z-50'
                            />
                        </div>
                        <TooltipWrapper message={t('random-traits-tooltip')}>
                            <Button
                                onClick={() => RandomTraits()}
                                className='flex sm:hidden h-full items-center gap-1 cursor-pointer'
                            >
                                <Dices />
                                {t('random-traits-button')}
                            </Button>
                        </TooltipWrapper>
                    </div>
                </div>
                <div className='flex gap-2 grid grid-cols-1 sm:grid-cols-2'>
                    {Object.keys(traitLabels).map((trait) => (
                        <Card key={trait} className='py-0.5 sm:py-1 md:py-2'>
                            <CardContent className='flex items-center w-full min-w-[170px] md:min-w-[230px] gap-2 px-4 md:px-6'>
                                <div className='hidden sm:block text-muted-foreground'>
                                    {traitIcons[trait as BarioAttributes]}
                                </div>
                                <div className='flex flex-col'>
                                    <p className='text-muted-foreground text-[12px] sm:text-[14px] md:text-[16px]'>
                                        {traitLabels[trait as BarioAttributes]}
                                    </p>
                                    <p className='text-foreground text-[12px] sm:text-[13px] md:text-[16px]'>
                                        {trait === 'backscope' &&
                                            selectedBackscope}
                                        {trait === 'brainbox' &&
                                            selectedBrainbox}
                                        {trait === 'existatron' &&
                                            selectedExistatron}
                                        {trait === 'skinframe' &&
                                            selectedSkinframe}
                                        {trait === 'gearbit' && selectedGearbit}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                    <TooltipWrapper message={t('random-traits-tooltip')}>
                        <Button
                            onClick={() => RandomTraits()}
                            className='hidden sm:flex h-full items-center gap-1 cursor-pointer'
                        >
                            <Dices />
                            {t('random-traits-button')}
                        </Button>
                    </TooltipWrapper>
                </div>
            </div>
            <div className='w-full max-w-4xl'>
                <Tabs
                    key={selectedTrait}
                    value={selectedTrait}
                    onValueChange={(value: string) =>
                        setSelectedTrait(value as BarioAttributes)
                    }
                >
                    <TabsList className='grid w-full grid-cols-5'>
                        {Object.keys(traitLabels).map((trait) => (
                            <TabsTrigger key={trait} value={trait}>
                                <div className='hidden sm:block' aria-label={trait + ' trait'}>
                                    {traitLabels[trait as BarioAttributes]}
                                </div>
                                <TooltipWrapper
                                    message={
                                        traitLabels[trait as BarioAttributes]
                                    }
                                >
                                    <div className='block sm:hidden' aria-label={trait + ' trait'}>
                                        {traitIcons[trait as BarioAttributes]}
                                    </div>
                                </TooltipWrapper>
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    <div className='p-2 flex flex-wrap gap-2 min-h-[240px] max-h-[240px] sm:min-h-[300px] sm:max-h-[300px] overflow-y-auto bg-gradient-to-tr from-muted to-background border-border border-2'>
                        {traitOptions[selectedTrait].map((option) => (
                            <TooltipWrapper key={option} message={option}>
                                <button
                                    onClick={() =>
                                        handleTraitChange(selectedTrait, option)
                                    }
                                    className={`cursor-pointer transition-all w-[100px] h-[100px] ${
                                        (selectedTrait === 'backscope' &&
                                            selectedBackscope === option) ||
                                        (selectedTrait === 'brainbox' &&
                                            selectedBrainbox === option) ||
                                        (selectedTrait === 'existatron' &&
                                            selectedExistatron === option) ||
                                        (selectedTrait === 'skinframe' &&
                                            selectedSkinframe === option) ||
                                        (selectedTrait === 'gearbit' &&
                                            selectedGearbit === option)
                                            ? 'ring-2 ring-blue-500 scale-105 bg-blue-100 dark:bg-blue-900'
                                            : 'hover:scale-105 hover:bg-muted'
                                    }`}
                                >
                                    <Image
                                        src={`/traits/${selectedTrait}/${option}.png`}
                                        alt={`${traitLabels[selectedTrait]} ${option}`}
                                        width={100}
                                        height={100}
                                        loading='lazy'
                                        draggable={false}
                                        className='w-[100px] h-[100px]'
                                    />
                                </button>
                            </TooltipWrapper>
                        ))}
                    </div>
                </Tabs>
            </div>
        </div>
    );
}
