'use client';

import { IUser } from "@/lib/class/User";
import { Dispatch, SetStateAction, createContext, useContext, } from "react";

const AppContext = createContext({})

export const AppContextProvider = ({ children, user, setUser }: {
    children: React.ReactNode,
    user: IUser | undefined,
    setUser: Dispatch<SetStateAction<IUser | undefined>>
}) => {
    return (
        <AppContext.Provider value={{ user, setUser }}>
            {children}
        </AppContext.Provider>
    )
};

export const useAppContext = () => {
    const contextValue = useContext(AppContext);
    return contextValue as {
        user: IUser | undefined;
        setUser: Dispatch<SetStateAction<IUser | undefined>>;
    };
};