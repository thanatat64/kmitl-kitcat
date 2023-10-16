"use client"

import {IUser} from "@/lib/class/User"

import {createContext, Dispatch, SetStateAction, useContext,} from "react"

interface AppContextProviderProps {
    children: React.ReactNode,
    user: IUser | undefined,
    setUser: any,
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({children, user, setUser}) => {
    return (
        <AppContext.Provider value={{ user, setUser }}>
            {children}
        </AppContext.Provider>
    )
}

const AppContext = createContext({})

export const useAppContext = () => {
    const contextValue = useContext(AppContext) 
    return contextValue as {
        user: IUser | undefined
        setUser: Dispatch<SetStateAction<IUser | undefined>>
    }
}