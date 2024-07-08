import React from 'react';
import { cn } from "../lib/utils";
import AnimatedGridPattern from "./magicui/animated-grid-pattern";

const WaitlistSignup: React.FC = () => {
    return (
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-md w-full mx-auto my-10 relative flex items-center justify-center overflow-hidden py-10 md:py-20">
            <div className="absolute inset-0">
                <AnimatedGridPattern
                    numSquares={30}
                    maxOpacity={0.5}
                    duration={3}
                    repeatDelay={1}
                    className={cn(
                        "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                        "absolute inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                    )}
                />
            </div>
            <div className="relative z-10 w-full max-w-md md:max-w-2xl px-4 md:px-6 rounded-lg bg-white shadow-lg">
                <div className="flex flex-col items-center p-6 space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
                        Inscrivez-vous à la liste d'attente !
                    </h2>
                    <p className="text-center text-gray-700">
                        Soyez les premiers à savoir quand notre application sortira.
                    </p>
                    <form className="w-full space-y-4">
                        <input
                            type="email"
                            placeholder="Votre email"
                            className="w-full p-3 rounded-md bg-gray-200 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full p-3 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold tracking-wider focus:outline-none focus:ring-2 focus:ring-blue-500">
                            S'inscrire
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default WaitlistSignup;
