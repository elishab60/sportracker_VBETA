import React, { useState, useEffect, useRef } from 'react';
import './WeightSelector.css'; // Assurez-vous que le chemin est correct

interface WeightSelectorProps {
    metric: boolean;
    weight: number;
    setWeight: (weight: number) => void;
}

const labelClasses = 'text-muted-foreground font-bold text-black mx-6 transition-transform transition-opacity duration-700 ease-in-out';
const inputClasses = 'mt-2 p-2 border rounded-md text-muted-foreground font-bold text-black mx-6 transition-transform transition-opacity duration-700 ease-in-out';

const WeightSelector: React.FC<WeightSelectorProps> = ({ metric, weight, setWeight }) => {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleWeightChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setWeight(parseInt(event.target.value));
    };

    useEffect(() => {
        if (isTransitioning) {
            setTimeout(() => {
                setIsTransitioning(false);
            }, 400); // Duration of the transition
        }
    }, [isTransitioning]);

    return (
        <div className={`flex flex-col items-center ${isTransitioning ? 'blur' : ''}`} ref={containerRef}>
            <span className={labelClasses}>Weight</span>
            <select value={weight} onChange={handleWeightChange} className={`custom-select ${inputClasses}`}>
                {Array.from({ length: 301 }, (_, i) => i).map(w => (
                    <option key={w} value={w}>
                        {w} {metric ? 'kg' : 'lbs'}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default WeightSelector;