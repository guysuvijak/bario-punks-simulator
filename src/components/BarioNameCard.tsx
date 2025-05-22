// Next.js 15 - src/components/BarioNameCard.tsx
'use client';
import { useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import { TooltipWrapper } from '@/components/TooltipWrapper';
import {
    TraitBackscope,
    TraitBrainbox,
    TraitExistatron,
    TraitGearbit,
    TraitSkinframe
} from '@/types/traits';
import { Download } from 'lucide-react';

interface BarioNameCardProps {
    backscope: TraitBackscope;
    brainbox: TraitBrainbox;
    existatron: TraitExistatron;
    skinframe: TraitSkinframe;
    gearbit: TraitGearbit;
}

export const BarioNameCard = ({
    backscope,
    brainbox,
    existatron,
    skinframe,
    gearbit
}: BarioNameCardProps) => {
    const { t } = useTranslation();
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const generateNameCard = useCallback(async () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas dimensions (horizontal layout: 700px wide, 380px tall)
        canvas.width = 700;
        canvas.height = 350;

        // Background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Load and draw trait images
        const loadImage = (src: string): Promise<HTMLImageElement> => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = () => resolve(img);
                img.onerror = reject;
            });
        };

        const images = await Promise.all([
            loadImage(`/traits/backscope/${backscope}.png`),
            loadImage(`/traits/existatron/${existatron}.png`),
            loadImage(`/traits/skinframe/${skinframe}.png`),
            loadImage(`/traits/brainbox/${brainbox}.png`),
            loadImage(`/traits/gearbit/${gearbit}.png`)
        ]);

        // Draw images (left side, 300x300)
        const imgSize = 300;
        const imgX = 20; // 20px from left edge
        const imgY = (canvas.height - imgSize) / 2; // Center vertically
        images.forEach((img) => {
            ctx.drawImage(img, imgX, imgY, imgSize, imgSize);
        });

        // Draw text (right side, aligned left)
        const textX = 340; // Start text 350px from left (after image)
        let textY = 60; // Start text 60px from top

        ctx.fillStyle = '#000000';
        ctx.textAlign = 'left';

        // Name: Bario Punks 528 (bold, 26px)
        const barioNumber = Math.floor(Math.random() * 3333) + 1;
        ctx.font = "bold 26px 'Inter', sans-serif";
        ctx.fillText(`Bario Punks ${barioNumber}`, textX, textY);
        textY += 30; // Move down for next line

        // Created: 5/22/2025
        ctx.font = "16px 'Inter', sans-serif";
        const creationDate = new Date().toLocaleDateString('en-US', {
            month: 'numeric',
            day: 'numeric',
            year: 'numeric'
        });
        ctx.fillText(`Created: ${creationDate}`, textX, textY);
        textY += 20; // Move down

        // Separator (2px line, full width with padding)
        ctx.beginPath();
        ctx.moveTo(textX, textY); // Start with 10px padding from textX
        ctx.lineTo(canvas.width - 20, textY); // End at right edge with 20px padding
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#0a0093';
        ctx.stroke();
        textY += 20; // Move down

        // Traits (two columns, two lines per trait in rounded cards)
        const traitListLeft = [
            { label: 'Backscope', value: backscope },
            { label: 'Existatron', value: existatron },
            { label: 'Skinframe', value: skinframe }
        ];
        const traitListRight = [
            { label: 'Brainbox', value: brainbox },
            { label: 'Gearbit', value: gearbit }
        ];

        const cardWidth = 160; // Width of each card
        const cardHeight = 50; // Height of each card (to accommodate two lines)
        const radius = 8; // rounded-md equivalent
        const colGap = 15; // Gap between columns
        const rowGap = 10; // Gap between rows

        // Column 1 (Left)
        traitListLeft.forEach((trait, index) => {
            const cardX = textX;
            const cardY = textY + index * (cardHeight + rowGap);

            // Draw rounded rectangle (card)
            ctx.beginPath();
            ctx.moveTo(cardX + radius, cardY);
            ctx.lineTo(cardX + cardWidth - radius, cardY);
            ctx.quadraticCurveTo(
                cardX + cardWidth,
                cardY,
                cardX + cardWidth,
                cardY + radius
            );
            ctx.lineTo(cardX + cardWidth, cardY + cardHeight - radius);
            ctx.quadraticCurveTo(
                cardX + cardWidth,
                cardY + cardHeight,
                cardX + cardWidth - radius,
                cardY + cardHeight
            );
            ctx.lineTo(cardX + radius, cardY + cardHeight);
            ctx.quadraticCurveTo(
                cardX,
                cardY + cardHeight,
                cardX,
                cardY + cardHeight - radius
            );
            ctx.lineTo(cardX, cardY + radius);
            ctx.quadraticCurveTo(cardX, cardY, cardX + radius, cardY);
            ctx.closePath();
            ctx.fillStyle = '#ffffff'; // White background for card
            ctx.fill();
            ctx.strokeStyle = '#bbbbbb';
            ctx.stroke();

            // Draw text inside card (two lines)
            ctx.fillStyle = '#575757';
            ctx.font = "12px 'Inter', sans-serif";
            ctx.fillText(`${trait.label}`, cardX + 10, cardY + 20); // First line: label
            ctx.fillStyle = '#000000';
            ctx.font = "14px 'Inter', sans-serif";
            ctx.fillText(`${trait.value}`, cardX + 10, cardY + 38); // Second line: value
        });

        // Column 2 (Right)
        traitListRight.forEach((trait, index) => {
            const cardX = textX + cardWidth + colGap; // Position to the right of the first column
            const cardY = textY + index * (cardHeight + rowGap);

            // Draw rounded rectangle (card)
            ctx.beginPath();
            ctx.moveTo(cardX + radius, cardY);
            ctx.lineTo(cardX + cardWidth - radius, cardY);
            ctx.quadraticCurveTo(
                cardX + cardWidth,
                cardY,
                cardX + cardWidth,
                cardY + radius
            );
            ctx.lineTo(cardX + cardWidth, cardY + cardHeight - radius);
            ctx.quadraticCurveTo(
                cardX + cardWidth,
                cardY + cardHeight,
                cardX + cardWidth - radius,
                cardY + cardHeight
            );
            ctx.lineTo(cardX + radius, cardY + cardHeight);
            ctx.quadraticCurveTo(
                cardX,
                cardY + cardHeight,
                cardX,
                cardY + cardHeight - radius
            );
            ctx.lineTo(cardX, cardY + radius);
            ctx.quadraticCurveTo(cardX, cardY, cardX + radius, cardY);
            ctx.closePath();
            ctx.fillStyle = '#ffffff'; // White background for card
            ctx.fill();
            ctx.strokeStyle = '#bbbbbb';
            ctx.stroke();

            // Draw text inside card (two lines)
            ctx.fillStyle = '#575757';
            ctx.font = "12px 'Inter', sans-serif";
            ctx.fillText(`${trait.label}`, cardX + 10, cardY + 20); // First line: label
            ctx.fillStyle = '#000000';
            ctx.font = "14px 'Inter', sans-serif";
            ctx.fillText(`${trait.value}`, cardX + 10, cardY + 38); // Second line: value
        });

        // Adjust textY after all cards (based on the taller column)
        const leftColumnHeight = traitListLeft.length * (cardHeight + rowGap);
        const rightColumnHeight = traitListRight.length * (cardHeight + rowGap);
        textY += Math.max(leftColumnHeight, rightColumnHeight) + 10; // Adjust textY after all cards

        // Website URL (gray color)
        ctx.fillStyle = '#808080'; // Gray color
        ctx.fillText('https://bariopunks-simulator.vercel.app', textX, textY);
    }, [backscope, brainbox, existatron, skinframe, gearbit]);

    const downloadNameCard = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const link = document.createElement('a');
        link.download = `Bario_NameCard_${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    };

    return (
        <div className='flex flex-col items-center gap-2'>
            <canvas ref={canvasRef} style={{ display: 'none' }} />
            <TooltipWrapper message={t('generate-name-card-tooltip')}>
                <Button
                    onClick={() => {
                        generateNameCard().then(downloadNameCard);
                    }}
                    className='flex items-center gap-1 cursor-pointer'
                >
                    <Download />
                    {t('generate-name-card')}
                </Button>
            </TooltipWrapper>
        </div>
    );
};
