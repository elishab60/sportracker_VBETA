import React, { useState } from 'react';
import './ToggleSwitch.css'; // Assurez-vous que le chemin est correct

interface ToggleSwitchProps {
    metric: boolean;
    toggleMetric: () => void;
}

const navLinkClasses = 'text-muted-foreground font-bold text-black mx-6 transition-transform transition-opacity duration-700 ease-in-out';
const activeTextStyle = 'font-bold text-black transition-opacity duration-700 ease-in-out';
const inactiveTextStyle = 'font-bold text-gray-400 transition-opacity duration-700 ease-in-out';

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ metric, toggleMetric }) => {
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleToggle = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            toggleMetric();
            setIsTransitioning(false);
        }, 400); // Duration of the transition
    };

    return (
        <div className="flex items-center my-4">
            <span className={`unit-label ${!metric ? activeTextStyle : inactiveTextStyle}`}>
                Impérial
            </span>
            <div className="toggle-switch mx-6">
                <input
                    className="toggle-input"
                    id="toggle"
                    type="checkbox"
                    checked={metric}
                    onChange={handleToggle}
                />
                <label className="toggle-label" htmlFor="toggle"></label>
            </div>
            <span className={`unit-label ${metric ? activeTextStyle : inactiveTextStyle}`}>
                Métrique
            </span>
            <div className={`transition-container ${isTransitioning ? 'blur' : ''}`}>
                {/* Components that will blur on transition */}
            </div>
        </div>
    );
};

export default ToggleSwitch;