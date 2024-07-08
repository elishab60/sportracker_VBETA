import React from 'react';
import BlurIn from './BlurIn';

const Step2Text: React.FC = () => {
    return (
        <BlurIn className="text-center">
            <div>
                <p className="text-xl font-bold text-black dark:text-white">Votre date de naissance</p>
                <p className="text-gray-600 mt-2">Ces informations seront utilisées pour calibrer au mieux votre programme</p>
            </div>
        </BlurIn>
    );
};

export default Step2Text;