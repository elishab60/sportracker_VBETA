import React from 'react';

interface WeightDisplayProps {
    weight: number;
}

const WeightDisplay: React.FC<WeightDisplayProps> = ({ weight }) => (
    <div className="text-center mb-4">
        <p className="text-muted-foreground">Gain weight</p>
        <p id="weight-display" className="text-4xl font-bold">{weight} lbs</p>
    </div>
);

export default WeightDisplay;