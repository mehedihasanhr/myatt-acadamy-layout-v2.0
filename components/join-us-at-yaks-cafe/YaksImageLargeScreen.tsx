"use client";

import * as React from 'react';
 
 

const YaksImageLargeScreen = () => {
    const ref = React.useRef<HTMLCanvasElement>(null);

    React.useEffect(() => {
        const canvas = ref.current;
        if(!canvas) return;

        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
        if(!ctx) return;

        // background Image
        const bgImage = new Image();
        bgImage.src = '/landing/yaks-cafe.png';
        bgImage.onload = () => {
            ctx.globalCompositeOperation="destination-over";
            ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
        }

        const boardImage = new Image();
        boardImage.src = '/landing/advantages-yak-2.png';
        boardImage.onload = () => {
            ctx.globalCompositeOperation="source-over";
            ctx.drawImage(boardImage, 900, 700, 280, 380);
        }

        const bbImage = new Image();
        bbImage.src = '/landing/trimmed/about-bb-2.png';
        bbImage.onload = () => {
            ctx.globalCompositeOperation="source-over";
            ctx.drawImage(bbImage, 1100, 480, 380, 600);

            // add header
            ctx.globalCompositeOperation="source-over";
            ctx.font = 'bold 32px Schoolbell';
            ctx.fillStyle = '#FFE168';
            ctx.fillText('Yak\'s Cafe', 1220, 560);

           
            


             // add text
            ctx.font = 'bold 24px Schoolbell';
            ctx.fillStyle = '#FFE168'; 

            // create text wrap
            createText(
                'We are currently loading NEW OR REVISED CONTENT for the following subjects. Please be patient. Real magic takes time. Follow developments here at Yak\'s Café.', 
                1190, 
                600, 
                210, 
                20
            );

            // rotate text  15 degrees
            ctx.save();
            ctx.translate(1100, 480);
            ctx.rotate(-15 * Math.PI / 180);
            ctx.textAlign = 'center';

            // create text wrap
            createText(
                'COMING SOON!', 
                190, 
                0, 
                210, 
                20
            );

            



        }

        // create text wrap
        const createText = (
            text: string, 
            x: number, 
            y: number, 
            maxWidth: number, 
            lineHeight: number
        ) => {
            const words = text.split(' ');
            let line = '';

            for(let n = 0; n < words.length; n++) {
                const testLine = line + words[n] + ' ';
                const metrics = ctx.measureText(testLine);
                const testWidth = metrics.width;

                if(testWidth > maxWidth && n > 0) {
                    ctx.fillText(line, x, y);
                    line = words[n] + ' ';
                    y += lineHeight;
                } else {
                    line = testLine;
                }
            }

            ctx.fillText(line, x, y);
        } 

    }, [ref])

    return(
        <canvas 
            ref={ref} 
            width={1620}
            height={1080}
            style={{
                width: '100%', 
                height: '100%',
                aspectRatio: '16/8'
            }}
        />
    )
};

export default YaksImageLargeScreen;