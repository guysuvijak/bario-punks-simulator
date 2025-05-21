// Next.js 15 - src/types/traits.d.ts

export type BarioAttributes =
    | 'backscope'
    | 'existatron'
    | 'skinframe'
    | 'brainbox'
    | 'gearbit';

export type TraitBackscope =
    | 'BARBIO'
    | 'BLAU'
    | 'HYBRID'
    | 'NOT WHITE'
    | 'ROUGE';
export type TraitBrainbox =
    | 'ACA BARIOS'
    | 'AFRORIO'
    | 'BARIO'
    | 'BCC'
    | 'BLAFRORIO'
    | 'BOHAWK'
    | 'BOY OF THE COWS'
    | 'CCR'
    | 'COOLIO'
    | 'COWBORIO'
    | 'FARMOOOOR'
    | 'FARMORIO'
    | 'FELT'
    | 'GOLDORIO'
    | 'IMPOSTOR CAP'
    | 'MOHAWK'
    | 'NEWSBOY'
    | 'NHT'
    | 'OH MY'
    | 'PILOT'
    | 'PRESLOOOOR'
    | 'RAFRORIO'
    | 'ROHAWK';
export type TraitExistatron =
    | 'BARIO'
    | 'HACKER BARIO'
    | 'ICEDARIO'
    | 'NUCLEARIO'
    | 'ZOMBARIO';
export type TraitGearbit =
    | '3D'
    | 'BASEDEYES'
    | 'BASEDNG'
    | 'BSC'
    | 'BSRC'
    | 'CIG'
    | 'DUMBIONPRO'
    | 'FBB'
    | 'FBO'
    | 'FBR'
    | 'HPG'
    | 'NOT RENE'
    | 'NOUNS GG'
    | 'NOUNS PG'
    | 'NRG'
    | 'RCBF';
export type TraitSkinframe =
    | 'Aladdin'
    | 'Bario Impostor'
    | 'Bario'
    | 'Based Tee'
    | 'Black Tee'
    | 'Chess-Master'
    | 'Cozy Hero'
    | 'Dude'
    | 'Gutter Couture'
    | 'Krueger'
    | 'Luxury Garbage'
    | 'Monk'
    | 'Rainbow'
    | 'Rich Trash'
    | 'Sun'
    | 'THE DUDE';

export type TraitValue =
    | TraitBackscope
    | TraitBrainbox
    | TraitExistatron
    | TraitGearbit
    | TraitSkinframe;

export interface TraitOptions {
    backscope: TraitBackscope[];
    brainbox: TraitBrainbox[];
    existatron: TraitExistatron[];
    gearbit: TraitGearbit[];
    skinframe: TraitSkinframe[];
}

export interface BarioJson {
    name: string;
    description: string;
    external_url: string;
    image: string;
    attributes: [
        {
            display_type: string | null;
            trait_type: BarioAttributes;
            value: string;
        }
    ];
    punktown: {
        extroversion: string;
        naivety: string;
        logic: string;
        generosity: string;
        riskiness: string;
    };
    animation_url: string;
}
