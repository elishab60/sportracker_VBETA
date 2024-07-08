// src/components/ContactPage.tsx
import React from 'react';
import ContactForm from './ContactForm';
import DotPattern from './magicui/dot-pattern';
import Header from './Header';
import Footer from './Footer';

const ContactPage: React.FC = () => {
    return (
        <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900">
            {/* DotPattern as a background */}
            <div className="absolute inset-0 z-0">
                <DotPattern/>
            </div>
            <div className="container mx-auto p-6 text-center">
                <Header/>
            </div>
            <div className="relative z-10 pb-20">
                <main className="container mx-auto p-6">
                    <h1 className="text-3xl font-bold mb-6">Contactez-nous</h1>
                    <ContactForm/>
                </main>
                <Footer/>
            </div>
        </div>
    );
};

export default ContactPage;
