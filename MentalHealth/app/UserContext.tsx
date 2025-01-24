import React, {Children, createContext, useState} from 'react';

interface UserContextType{
    points: number;
    setPoints: (points:number) => void;
}

export const UserContext = createContext<UserContextType>({
    points: 0,
    setPoints: () => {},
});

interface UserProoviderProps {
    children: React.ReactNode;
}

export const UserProvider = ({children}:UserProoviderProps) => {
    const [points, setPoints] = useState(0);

    return (
        <UserContext.Provider value = {{points, setPoints}}>
            {children}
        </UserContext.Provider>
    );
};