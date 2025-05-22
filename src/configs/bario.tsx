// Next.js 15 - src/configs/bario.tsx
'use client';
import { HardHat, PaintBucket, Pipette, ScanFace, Shirt } from 'lucide-react';
import { TraitOptions } from '@/types/traits';

export const traitLabels = {
    backscope: 'Backscope',
    brainbox: 'Brainbox',
    existatron: 'Existatron',
    gearbit: 'Gearbit',
    skinframe: 'Skinframe'
};

export const traitIcons = {
    backscope: <PaintBucket />,
    brainbox: <HardHat />,
    existatron: <Pipette />,
    gearbit: <ScanFace />,
    skinframe: <Shirt />
};

export const traitOptions: TraitOptions = {
    backscope: ['BARBIO', 'BLAU', 'HYBRID', 'NOT WHITE', 'ROUGE'],
    brainbox: [
        'ACA BARIOS',
        'AFRORIO',
        'BARIO',
        'BCC',
        'BLAFRORIO',
        'BOHAWK',
        'BOY OF THE COWS',
        'CCR',
        'COOLIO',
        'COWBORIO',
        'FARMOOOOR',
        'FARMORIO',
        'FELT',
        'GOLDORIO',
        'IMPOSTOR CAP',
        'MOHAWK',
        'NEWSBOY',
        'NHT',
        'OH MY',
        'PILOT',
        'PRESLOOOOR',
        'RAFRORIO',
        'ROHAWK'
    ],
    existatron: ['BARIO', 'HACKER BARIO', 'ICEDARIO', 'NUCLEARIO', 'ZOMBARIO'],
    gearbit: [
        '3D',
        'BASEDEYES',
        'BASEDNG',
        'BSC',
        'BSRC',
        'CIG',
        'DUMBIONPRO',
        'FBB',
        'FBO',
        'FBR',
        'HPG',
        'NOT RENE',
        'NOUNS GG',
        'NOUNS PG',
        'NRG',
        'RCBF'
    ],
    skinframe: [
        'Aladdin',
        'Bario Impostor',
        'Bario',
        'Based Tee',
        'Black Tee',
        'Chess-Master',
        'Cozy Hero',
        'Dude',
        'Gutter Couture',
        'Krueger',
        'Luxury Garbage',
        'Monk',
        'Rich Trash',
        'Sun',
        'THE DUDE'
    ]
};
