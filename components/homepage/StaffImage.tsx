'use client';

import * as React from 'react';


const StaffAvatar = ({ src }: {src: string}) => {
    const ref = React.useRef<HTMLCanvasElement>(null);

    React.useEffect(() => {
        const canvas = ref.current;
        if(!canvas) return;
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
        const img = new Image();
        img.src = src;
        img.onload = () => {
            // crop image
            const size = Math.min(img.width, img.height);
            const x = (img.width - size) / 2;
            const y = (img.height - size) / 2;
            ctx.drawImage(img, x, y, size, size, 0, 0, 100, 100);
        }
    }, [ref, src]);

    return(
        <canvas ref={ref} width={128} height={128} />
    )
}

export default StaffAvatar;