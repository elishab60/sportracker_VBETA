// BurgerButton.tsx
import React from 'react';
import './BurgerButton.css';

interface BurgerButtonProps {
    isChecked: boolean;
    onChange: () => void;
}

const BurgerButton: React.FC<BurgerButtonProps> = ({ isChecked, onChange }) => {
    return (
        <>
            <input type="checkbox" id="checkbox" checked={isChecked} onChange={onChange} />
            <label htmlFor="checkbox" className="toggle">
                <div className="bars" id="bar1"></div>
                <div className="bars" id="bar2"></div>
                <div className="bars" id="bar3"></div>
            </label>
        </>
    );
};

export default BurgerButton;