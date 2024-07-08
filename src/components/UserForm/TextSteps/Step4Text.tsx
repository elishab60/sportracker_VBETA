import React from 'react';
import BlurIn from './BlurIn';

const Step4Text: React.FC = () => {
    return (
        <BlurIn className="text-center">
            <div>
                <p className="text-xl font-bold text-black dark:text-white">Votre poids final souhaité</p>
            </div>
        </BlurIn>
    );
};

export default Step4Text;