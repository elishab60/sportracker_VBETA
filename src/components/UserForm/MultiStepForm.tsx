import React, { useState } from 'react';
import styled from 'styled-components';
import Step from './Step';
import ToggleSwitch from './ToggleSwitch/ToggleSwitch';
import HeightSelector from './HeightSelector';
import WeightSelector from './WeightSelector';
import WeightDisplay from './WeightDisplay';
import WeightSlider from './WeightSlider';
import ShimmerButton from '../magicui/shimmer-button';
import Step1Text from './TextSteps/Step1Text';
import Step2Text from './TextSteps/Step2Text';
import Step3Text from './TextSteps/Step3Text';
import Step4Text from './TextSteps/Step4Text';
import Meteors from '../magicui/meteors'; // Assurez-vous que le chemin est correct

const FormContainer = styled.div`
    background: white;
    padding: 32px; // équivalent à p-8
    border-radius: 10px; // équivalent à rounded-lg
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // équivalent à shadow-md
    width: 80%; // équivalent à w-4/5
    height: 480px; // Hauteur fixe pour le composant
    margin: 40px auto; // équivalent à mx-auto my-10
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative; // Pour positionner les éléments en absolu
    overflow: hidden; // Pour les éléments en overflow
`;

const labelClasses = 'text-muted-foreground font-bold text-black mx-6 transition-transform transition-opacity duration-700 ease-in-out';
const inputClasses = 'mt-2 p-2 border rounded-md text-muted-foreground font-bold text-black mx-6 transition-transform transition-opacity duration-700 ease-in-out';
const dateInputClasses = 'mt-2 p-2 border rounded-md text-muted-foreground font-bold text-black mx-6 transition-transform transition-opacity duration-700 ease-in-out appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500';

const MultiStepForm: React.FC = () => {
    const [step, setStep] = useState(1);
    const [metric, setMetric] = useState(true);
    const [height, setHeight] = useState({ feet: 5, inches: 8, cm: 170 });
    const [weight, setWeight] = useState(70);
    const [gainWeight, setGainWeight] = useState(144);

    const nextStep = () => setStep(prev => prev + 1);

    const toggleMetric = () => setMetric(prev => !prev);

    return (
        <FormContainer>
            <Meteors number={30} />
            <div className="flex flex-col items-center justify-center w-full z-10">
                {step === 1 && (
                    <>
                        <Step1Text />
                        <ToggleSwitch metric={metric} toggleMetric={toggleMetric} />
                        <div className="flex space-x-4 mt-4">
                            <HeightSelector metric={metric} height={height} setHeight={setHeight} />
                            <WeightSelector metric={metric} weight={weight} setWeight={setWeight} />
                        </div>
                    </>
                )}
                {step === 2 && (
                    <>
                        <Step2Text />
                        <label htmlFor="birth_date" className={labelClasses}>Date de naissance</label>
                        <input id="birth_date" type="date" className={dateInputClasses} />
                    </>
                )}
                {step === 3 && (
                    <>
                        <Step3Text />
                        <label htmlFor="goal" className={labelClasses}>Objectif</label>
                        <select id="goal" className={inputClasses}>
                            <option value="perte de poids">Perte de poids</option>
                            <option value="maintien">Maintien</option>
                            <option value="prise de masse">Prise de masse</option>
                        </select>
                    </>
                )}
                {step === 4 && (
                    <>
                        <Step4Text />
                        <WeightDisplay weight={gainWeight} />
                        <WeightSlider onWeightChange={setGainWeight} />
                    </>
                )}
            </div>
            <div className="flex flex-col items-center mt-8 mb-4 w-full z-10">
                <ShimmerButton className="shadow-2xl" onClick={nextStep}>
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                        Suivant
                    </span>
                </ShimmerButton>
            </div>
            <Step currentStep={step} />
        </FormContainer>
    );
};

export default MultiStepForm;