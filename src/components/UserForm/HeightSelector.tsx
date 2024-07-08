import React, { useState, useEffect, useRef } from 'react';
import './HeightSelector.css'; // Assurez-vous que le chemin est correct

interface HeightSelectorProps {
    metric: boolean;
    height: { feet: number; inches: number; cm: number };
    setHeight: (height: { feet: number; inches: number; cm: number }) => void;
}

const labelClasses = 'text-muted-foreground font-bold text-black mx-6 transition-transform transition-opacity duration-700 ease-in-out';
const inputClasses = 'mt-2 p-2 border rounded-md text-muted-foreground font-bold text-black mx-6 transition-transform transition-opacity duration-700 ease-in-out';

const HeightSelector: React.FC<HeightSelectorProps> = ({ metric, height, setHeight }) => {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMetricChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setHeight({ ...height, cm: parseInt(event.target.value) });
    };

    const handleFeetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setHeight({ ...height, feet: parseInt(event.target.value) });
    };

    const handleInchesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setHeight({ ...height, inches: parseInt(event.target.value) });
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
            <span className={labelClasses}>Height</span>
            {metric ? (
                <select value={height.cm} onChange={handleMetricChange} className={`custom-select ${inputClasses}`}>
                    {Array.from({ length: 301 }, (_, i) => i).map(cm => (
                        <option key={cm} value={cm}>
                            {cm} cm
                        </option>
                    ))}
                </select>
            ) : (
                <div className="flex space-x-2 mt-2">
                    <select value={height.feet} onChange={handleFeetChange} className={`custom-select ${inputClasses}`}>
                        {Array.from({ length: 8 }, (_, i) => i).map(feet => (
                            <option key={feet} value={feet}>
                                {feet} ft
                            </option>
                        ))}
                    </select>
                    <select value={height.inches} onChange={handleInchesChange} className={`custom-select ${inputClasses}`}>
                        {Array.from({ length: 12 }, (_, i) => i).map(inches => (
                            <option key={inches} value={inches}>
                                {inches} in
                            </option>
                        ))}
                    </select>
                </div>
            )}
        </div>
    );
};

export default HeightSelector;