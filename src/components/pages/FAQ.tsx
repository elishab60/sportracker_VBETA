// src/FAQ.tsx
import React from 'react';

const FAQ: React.FC = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-4xl font-bold mb-8">FAQ</h1>
            <div className="space-y-6">
                <div>
                    <h2 className="text-2xl font-bold">Question 1</h2>
                    <p className="text-gray-700">Réponse à la question 1.</p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold">Question 2</h2>
                    <p className="text-gray-700">Réponse à la question 2.</p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold">Question 3</h2>
                    <p className="text-gray-700">Réponse à la question 3.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;