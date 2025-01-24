import React, { createContext, useState } from 'react';

interface UserContextType {
    points: number;
    setPoints: (points: number) => void;
}

export const UserContext = createContext<UserContextType>({
    points: 0,
    setPoints: () => {},
});

interface UserProviderProps {
    children: React.ReactNode;
}

export const UserProvider =({children}: UserProviderProps) => {
    const [points,setPoints] = useState(0);

    return(
        <UserContext.Provider value = {{points, setPoints}}>
            {children}
        </UserContext.Provider>
    );
};