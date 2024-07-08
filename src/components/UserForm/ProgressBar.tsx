import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProgressContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    width: 80%;
    position: relative;
`;

const ProgressLine = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 4px;
    background: #ccc;
    transform: translateY(-50%);
`;

const ProgressStep = styled(motion.div)<{ active: boolean; current: boolean }>`
  width: 20px;
  height: 20px;
  background: ${props => (props.active ? '#007BFF' : '#ccc')};
  border-radius: 50%;
  border: ${props => (props.current ? '4px solid #007BFF' : '4px solid transparent')};
  transition: background 0.3s, border 0.3s;
  position: relative;
`;

interface ProgressBarProps {
    currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
    return (
        <ProgressContainer>
            <ProgressLine />
            {[...Array(5)].map((_, index) => (
                <ProgressStep
                    key={index}
                    active={index < currentStep}
                    current={index === currentStep - 1}
                    animate={{ backgroundColor: index < currentStep ? '#007BFF' : '#ccc' }}
                    transition={{ duration: 0.3 }}
                />
            ))}
        </ProgressContainer>
    );
};

export default ProgressBar;