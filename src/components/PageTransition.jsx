// components/PageTransition.jsx
import { motion } from 'framer-motion';
import React from 'react';

const PageTransition = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;