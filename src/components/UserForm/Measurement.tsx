import React from 'react';

const textMutedForeground = "text-muted-foreground";

interface MeasurementProps {
    label: string;
    value: string | number;
    onChange: (value: string) => void;
}

const Measurement: React.FC<MeasurementProps> = ({ label, value, onChange }) => (
    <div className="flex flex-col items-center">
        <span className={textMutedForeground}>{label}</span>
        <div className="mt-2 bg-input rounded-lg p-2">
            <input
                className="text-lg text-center bg-transparent border-none outline-none"
                type="number"
                value={value}
                onChange={e => onChange(e.target.value)}
            />
        </div>
    </div>
);

export default Measurement;