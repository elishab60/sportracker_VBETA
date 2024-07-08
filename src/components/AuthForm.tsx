import React, { useState, FormEvent } from 'react';
import { useTransition, animated } from 'react-spring';
import AnimatedGridPattern from './magicui/animated-grid-pattern';

interface AuthFormData {
    email: string;
    password: string;
    firstname: string | null;
    sex: string | null;
}

interface AuthFormSwitch {
    isSwitching: boolean;
}

type AuthFormProps = {
    onFormSubmit: (data: AuthFormData | { isSwitching: boolean }) => void;
    isLogin: boolean;
};

const AuthForm: React.FC<AuthFormProps> = ({ onFormSubmit, isLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [sex, setSex] = useState('');

    const transitions = useTransition(!isLogin, {
        from: { opacity: 0, transform: 'translateY(-20px)' },
        enter: { opacity: 1, transform: 'translateY(0)' },
        leave: { opacity: 0, transform: 'translateY(20px)' },
        config: { duration: 300 },
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onFormSubmit({ email, password, firstname: isLogin ? null : firstname, sex: isLogin ? null : sex });
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-md w-full mx-auto my-10 relative flex items-center justify-center overflow-hidden py-20">
            <div className="absolute inset-0">
                <AnimatedGridPattern
                    numSquares={30}
                    maxOpacity={0.5}
                    duration={3}
                    repeatDelay={1}
                    className="absolute inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
                />
            </div>
            <div className="relative z-10 w-full max-w-md px-6 rounded-lg bg-white shadow-lg">
                <div className="flex flex-col items-center p-6 space-y-4">
                    <p className="text-lg font-semibold">Accédez à votre compte</p>
                    <form onSubmit={handleSubmit} className="w-full space-y-4">
                        {transitions((styles, item) =>
                                item && (
                                    <animated.div style={styles}>
                                        <div className="flex justify-between space-x-4">
                                            <input
                                                type="text"
                                                placeholder="Votre prénom"
                                                value={firstname}
                                                onChange={(e) => setFirstname(e.target.value)}
                                                className="w-1/2 p-3 rounded-md bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required={!isLogin}
                                            />
                                            <select
                                                value={sex}
                                                onChange={(e) => setSex(e.target.value)}
                                                className="w-1/2 p-3 rounded-md bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                required={!isLogin}
                                            >
                                                <option value="">Sexe :</option>
                                                <option value="male">Homme</option>
                                                <option value="female">Femme</option>
                                                <option value="other">Autre</option>
                                            </select>
                                        </div>
                                    </animated.div>
                                )
                        )}
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 rounded-md bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Mot de passe"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 rounded-md bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full p-3 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold tracking-wider focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {isLogin ? 'Se connecter' : "S'inscrire"}
                        </button>
                        <div className="text-center text-sm text-gray-600 mt-4">
                            {isLogin ? "Vous n'avez pas de compte ?" : 'Vous avez déjà un compte ?'}
                            <button
                                onClick={() => onFormSubmit({ isSwitching: true })}
                                className="text-blue-600 hover:underline ml-2"
                            >
                                {isLogin ? 'Inscrivez-vous' : 'Connectez-vous'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;