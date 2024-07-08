import React, { useEffect } from 'react';
import { useUser } from '../../context/UserContext';
import Header from '../Header';
import Footer from '../Footer';
import DotPattern from '../magicui/dot-pattern';
import { useNavigate } from 'react-router-dom';
import MultiStepForm from '../UserForm/MultiStepForm';
import WordPullUp from '../magicui/word-pull-up';
import BlurIn from '../magicui/blur-in';

const DashboardPage: React.FC = () => {
    const { user } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            console.log('No user, redirecting to auth');
            navigate('/auth');
        }
    }, [user, navigate]);

    return (
        <div className="relative flex flex-col items-center min-h-screen">
            <DotPattern className="absolute inset-0 w-full h-full opacity-30 z-0" />
            <Header />
            <main className="flex-grow flex flex-col items-center justify-center container mx-auto z-10 w-full px-6">
                {user && (
                    <>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>

                        <BlurIn
                            word="Voici le Dashboard"
                            className="text-6xl font-bold text-black dark:text-white mb-6"
                        />
                        <br/>
                        <WordPullUp
                            className="text-3xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem] mb-4"
                            words={`Bienvenue, ${user.firstname}!`}
                        />
                        <br/>
                        <MultiStepForm/>
                    </>
                )}
                {!user && <p className="text-red-500">Vous n'êtes pas connecté.</p>}
            </main>
            <Footer />
        </div>
    );
};

export default DashboardPage;