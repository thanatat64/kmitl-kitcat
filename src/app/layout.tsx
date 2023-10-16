"use client"

import {IUser} from "@/class/User"
import Footer from "@/components/footer/Footer"
import NavigationBar from "@/components/navigation/NavigationBar"
import "bootstrap/dist/css/bootstrap.css"
import {IBM_Plex_Sans_Thai} from "next/font/google"

import Head from "next/head"
import React, {useEffect, useState} from "react"
import {useCookies} from "react-cookie"
import {AppContextProvider} from "./context/app"
import "./globals.css"

const ibmplexsansthai = IBM_Plex_Sans_Thai({
    subsets: ["thai"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
})

export default function RootLayout({children}: { children: React.ReactNode }) {
    const [user, setUser] = useState<IUser>()
    const [token] = useCookies(["userToken"])

    async function fetchSignInUser() {
        const response = await fetch("/api/token/get/" + token.userToken)
        if (response.ok)
            setUser(await response.json())
    }

    const setSignInUser = (user: IUser) => {
        setUser(user)
    }

    useEffect(() => {
        fetchSignInUser()
    }, [])

    return (
        <html lang="th">
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <body className={`${ibmplexsansthai.className} d-flex flex-column vh-100`}>

        <NavigationBar user={user} setUser={setSignInUser}/>
        <main>
            <AppContextProvider user={user} setUser={setSignInUser}>
                {children}
            </AppContextProvider>
        </main>
        <Footer/>

        </body>
        </html>
    )
}