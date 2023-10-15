"use client"

import "bootstrap/dist/css/bootstrap.css"
import "./globals.css"

import Head from "next/head"
import NavigationBar from "@/components/navigation/NavigationBar"
import { useCookies } from "react-cookie"
import { IBM_Plex_Sans_Thai } from "next/font/google"
import Footer from "@/components/footer/Footer"
import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import { IUser } from "./lib/class/User"
import { AppContextProvider } from "./context/app"
import { KCUser } from "./lib/method/KCUser"

const ibmplexsansthai = IBM_Plex_Sans_Thai({
    subsets: ["thai"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<IUser>();
    const [token] = useCookies(["userToken"]);

    async function fetchSignInUser() {
        const response = await fetch("/api/token/get/" + token.userToken);
        if (response.ok)
            setUser(await response.json());
    }

    useEffect(() => {
        fetchSignInUser();
    }, []);

    return (
        <html lang="th">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <body className={`${ibmplexsansthai.className} d-flex flex-column vh-100`}>
                <NavigationBar user={user} setUser={setUser} />
                <main>
                    <AppContextProvider user={user} setUser={setUser}>
                        {children}
                    </AppContextProvider>
                </main>
                <Footer />
            </body>
        </html>
    );
}