import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import ContactPage from './components/ContactPage';
import AuthPage from './components/pages/AuthPage';
import DashboardPage from './components/pages/DashboardPage';
import HomePage from './components/pages/HomePage';
import ProjectPage from './components/pages/ProjectPage';
import FeaturesPage from './components/pages/FeaturesPage';
import Story from "./components/pages/StoryPage";
import FAQ from './components/pages/FAQ'; // Importez votre nouvelle page FAQ
import PageTransition from './components/PageTransition';
import { AnimatePresence } from 'framer-motion';

const AppRoutes: React.FC = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
                <Route path="/auth" element={<PageTransition><AuthPage /></PageTransition>} />
                <Route path="/dashboard" element={<PageTransition><DashboardPage /></PageTransition>} />
                <Route path="/project" element={<PageTransition><ProjectPage /></PageTransition>} />
                <Route path="/features" element={<PageTransition><FeaturesPage /></PageTransition>} />
                <Route path="/story" element={<PageTransition><Story /></PageTransition>} />
                <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} /> {/* Nouvelle route FAQ */}
            </Routes>
        </AnimatePresence>
    );
};

const App: React.FC = () => {
    return (
        <UserProvider>
            <Router>
                <AppRoutes />
            </Router>
        </UserProvider>
    );
};

export default App;