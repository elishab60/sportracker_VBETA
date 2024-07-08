import React, { createContext, useState, useContext, ReactNode } from 'react';

interface User {
    id: number;
    firstname: string;
    email: string;
}

interface UserContextProps {
    user: User | null;
    loginUser: (user: User) => void;
    logoutUser: () => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const loginUser = (userData: User) => {
        console.log('loginUser called with:', userData);
        setUser(userData);
    };

    const logoutUser = () => {
        console.log('logoutUser called');
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

export default UserContext;