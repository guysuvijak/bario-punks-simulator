// Next.js 15 - src/types/hook.d.ts
export type TranslationValue = string | { [key: string]: TranslationValue };

export type Variables = {
    [key: string]: string | number | ReactNode;
};
export type Translation = {
    [key: string]: TranslationValue;
};
