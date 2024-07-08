import React from 'react';
import DotPattern from '../magicui/dot-pattern';
import Header from '../Header';
import Footer from '../Footer';
import WordRotate from '../word-rotate';
import Blurin from "../Blurin";
import MarqueeDemo from "../DemoMarquee";
import WaitlistSignup from '../WaitlistSignup';
import WordPullUp from "../WordPullUp";
import { ScrollBasedVelocityDemo } from '../ScrollBasedVelocityDemo';
import TextRevealByWord from '../magicui/text-reveal';
import SparklesTextDemo from "../SparklesTextGratuit";
// @ts-ignore
import sportrackerDemo from "../../images/demo_sportracker.mp4"; // Assurez-vous que le chemin est correct

const HomePage: React.FC = () => {
    return (
        <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900 pt-16 flex flex-col">
            <div className="absolute inset-0 z-0">
                <DotPattern />
            </div>
            <Header />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col space-y-10">
                    <div className="flex flex-col items-center my-10">
                        <Blurin />
                        <br />
                        <div className="relative w-full max-w-screen-md mx-auto">
                            <video
                                src={sportrackerDemo}
                                autoPlay
                                muted
                                className="rounded-2xl shadow-lg w-full"
                                onEnded={(e) => {
                                    e.currentTarget.loop = false;
                                    e.currentTarget.currentTime = e.currentTarget.duration;
                                }}
                            />
                        </div>
                        <br />
                        <SparklesTextDemo />
                    </div>
                    <div className="flex flex-col items-center my-10">
                        <WordRotate />
                    </div>
                    <div className="flex flex-col items-center my-10">
                        <TextRevealByWord text="Atteindre vos objectifs n'a jamais été aussi simple. Installez l'application et débutez votre transformation dès maintenant !" />
                    </div>
                    <div className="flex flex-col items-center my-10">
                        <WordPullUp />
                        <WaitlistSignup />
                    </div>
                    <div className="flex flex-col items-center my-10">
                        <MarqueeDemo />
                    </div>
                    <div className="flex flex-col items-center my-10">
                        <ScrollBasedVelocityDemo />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;