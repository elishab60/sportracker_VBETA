import React from 'react';
import { NavLink } from 'react-router-dom';
import Instagram from './Instagram';
import LinkedIn from './LinkedIn';
import TikTok from './TikTok';
import AppStoreSVG from '../images/AppStore.svg';
import PlayStoreSVG from '../images/PlayStore.svg';
import sportrackerLogo from '../images/sportracker.png';

const FooterHeader = () => (
    <div className="flex flex-col items-center md:flex-row justify-between mb-8">
        <div className="flex items-center justify-center mb-4 md:mb-0">
            <img src={sportrackerLogo} alt="Sportracker logo" className="w-12 h-12 rounded-full mr-2" />
            <div>
                <h1 className="text-2xl font-bold text-center md:text-left">SporTracker</h1>
            </div>
        </div>
        <div className="text-gray-500 text-center md:text-left">
            <span>&copy; </span> Tous droits réservés.
        </div>
    </div>
);

interface FooterLinkListProps {
    links: string[];
}

const FooterLinkList: React.FC<FooterLinkListProps> = ({ links }) => (
    <div className="flex justify-center md:justify-between space-x-4 w-full mb-8">
        {links.map((link, index) => (
            <NavLink key={index} to={link.toLowerCase() === 'a propos' ? '/faq' : `/${link.toLowerCase()}`} className="hover:text-primary text-gray-500 text-center">
                {link}
            </NavLink>
        ))}
    </div>
);

const FooterContent = () => (
    <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-4 md:space-y-0">
        <div className="flex justify-center md:justify-start space-x-4">
            <a href="YOUR_APP_STORE_URL" className="flex justify-center">
                <img src={AppStoreSVG} alt="App Store" className="h-20 w-20 md:h-24 md:w-24"/>
            </a>
            <a href="YOUR_PLAY_STORE_URL" className="flex justify-center">
                <img src={PlayStoreSVG} alt="Play Store" className="h-20 w-20 md:h-24 md:w-24"/>
            </a>
        </div>
        <div className="flex justify-center space-x-4">
            <a href="https://www.linkedin.com/in/elisha-bajemon/" target="_blank" rel="noopener noreferrer">
                <LinkedIn className="h-6 w-6"/>
            </a>
            <a href="#"><Instagram className="h-6 w-6"/></a>
            <a href="#"><TikTok className="h-6 w-6"/></a>
        </div>
    </div>
);

const Footer = () => {
    const links = ['A propos', 'Contact', 'Histoire'];

    return (
        <div className="bg-white p-8 md:rounded-lg md:shadow-md md:border md:border-gray-200 w-full md:w-4/5 lg:w-3/5 mx-auto my-10 relative z-10 md:static bottom-0">
            <FooterHeader />
            <FooterLinkList links={links} />
            <hr className="border-gray-300 my-4" />
            <FooterContent />
        </div>
    );
};

export default Footer;