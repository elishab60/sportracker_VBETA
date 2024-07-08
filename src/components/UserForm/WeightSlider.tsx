import React, { useEffect, useRef } from 'react';

const SHARED_CLASSES = {
    flexCenter: 'flex items-center justify-center',
    block: 'h-12 w-12 bg-muted',
};

interface WeightSliderProps {
    onWeightChange: (newWeight: number) => void;
}

const WeightBlock = () => (
    <div className={SHARED_CLASSES.flexCenter}>
        <div className={SHARED_CLASSES.block}></div>
    </div>
);

const WeightSlider: React.FC<WeightSliderProps> = ({ onWeightChange }) => {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const initialWeight = 144;
    const weightStep = 2;

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (!sliderRef.current) return;
            const rect = sliderRef.current.getBoundingClientRect();
            const offsetX = event.clientX - rect.left;
            const totalBlocks = sliderRef.current.children.length;
            const blockWidth = rect.width / totalBlocks;
            const blockIndex = Math.min(totalBlocks - 1, Math.max(0, Math.floor(offsetX / blockWidth)));
            const newWeight = initialWeight + (blockIndex * weightStep);
            onWeightChange(newWeight);
        };

        const slider = sliderRef.current;
        if (!slider) return;
        slider.addEventListener('mousemove', handleMouseMove);

        return () => {
            if (slider) slider.removeEventListener('mousemove', handleMouseMove);
        };
    }, [onWeightChange]);

    return (
        <div className="relative w-full max-w-md">
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="h-16 w-1 bg-primary"></div>
            </div>
            <div className="overflow-x-auto">
                <div id="weight-slider" ref={sliderRef} className="flex space-x-4 h-16 cursor-pointer">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <WeightBlock key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WeightSlider;