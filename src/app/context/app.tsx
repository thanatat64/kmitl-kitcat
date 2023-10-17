"use client"

import {IUser} from "@/lib/class/User"
import {useRouter} from "next/navigation"

import {createContext, Dispatch, SetStateAction, useContext,} from "react"
import Cookies from "universal-cookie"

interface AppContextProviderProps {
    children: React.ReactNode,
    user: IUser,
    setUser: any,
    setFetching: any,
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({children, user, setUser, setFetching}) => {
    const cookies = new Cookies
    const router = useRouter()
    const token = cookies.get("userToken")

    const authentication = () => {
        if (!token)
            router.push("/signin")
    }

    return (
        <AppContext.Provider value={{user, setUser, authentication, setFetching}}>
            {children}
        </AppContext.Provider>
    )
}

const AppContext = createContext({})

export const useAppContext = () => {
    const contextValue = useContext(AppContext)
    return contextValue as {
        user: IUser
        setUser: any
        authentication: any
        setFetching: any
    }
}