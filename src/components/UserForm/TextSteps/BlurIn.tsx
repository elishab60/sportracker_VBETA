import { motion } from 'framer-motion';

interface BlurInProps {
    children: React.ReactNode;
    className?: string;
}

const BlurIn: React.FC<BlurInProps> = ({ children, className }) => {
    return (
        <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default BlurIn;