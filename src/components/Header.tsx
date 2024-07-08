import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import sportrackerLogo from '../images/sportracker.png';
import loginIcon from '../images/login.svg';
import menuBurgerIcon from '../images/menuburger.png';

const Header: React.FC = () => {
    const { user } = useUser();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav className="relative top-10 left-1/2 transform -translate-x-1/2 w-11/12 lg:w-3/4 z-50 bg-white shadow-md rounded-3xl flex justify-between items-center px-4 lg:px-8 h-16">
                <div className="flex items-center lg:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <img src={menuBurgerIcon} alt="Menu Burger" className="w-6 h-6"/>
                    </button>
                    <img src={sportrackerLogo} alt="SporTracker Logo" className="h-8 w-8 mx-2 absolute left-1/2 transform -translate-x-1/2" />
                </div>
                <div className="hidden lg:flex items-center lg:flex-grow lg:justify-start">
                    <img src={sportrackerLogo} alt="SporTracker Logo" className="h-8 w-8 mx-2" />
                    <Link to="/" className="text-2xl font-bold text-black mx-2">SporTracker</Link>
                    <div className="flex space-x-6 ml-6">
                        {['Le projet', 'Fonctionnalités', 'L\'histoire'].map((text, index) => (
                            <Link key={index} to={`/${text.toLowerCase().replace(/ /g, '')}`} className="text-black font-bold">
                                {text}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
            <div className="fixed top-10 right-4 z-50 flex justify-center items-center h-16">
                <Link to="/auth" className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
                    <img src={loginIcon} alt="Login" className="w-6 h-6"/>
                </Link>
            </div>
            <div className={`fixed inset-y-0 left-0 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'} w-64 z-50 flex flex-col items-start p-4`}>
                <button onClick={toggleMenu} className="self-end mb-4 text-black bg-white p-2 rounded-full shadow-lg focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                {['Le projet', 'Fonctionnalités', 'L\'histoire'].map((text, index) => (
                    <Link key={index} to={`/${text.toLowerCase().replace(/ /g, '')}`} className="text-2xl font-bold text-black mb-4" onClick={toggleMenu}>
                        {text}
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Header;