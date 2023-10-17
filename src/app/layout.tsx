"use client"

import {IUser} from "@/class/User"
import Footer from "@/components/footer/Footer"
import NavigationBar from "@/components/navigation/NavigationBar"
import Loader from "@/components/other/Loader";
import "bootstrap/dist/css/bootstrap.css"
import {IBM_Plex_Sans_Thai} from "next/font/google"

import Head from "next/head"
import React, {useEffect, useState} from "react"
import Cookies from "universal-cookie"
import {AppContextProvider} from "./context/app"
import "./globals.css"

const ibmplexsansthai = IBM_Plex_Sans_Thai({
    subsets: ["thai"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
})

export default function RootLayout({children}: { children: React.ReactNode }) {
    const cookies = new Cookies
    const token = cookies.get("userToken")
    const [loading, setLoading] = useState<boolean>(true)
    const [user, setUser] = useState<IUser>({
        id: -1,
        name: "กำลังดึงข้อมูล...",
        email: "กำลังดึงข้อมูล...",
        telephone: "กำลังดึงข้อมูล...",
        address1: "กำลังดึงข้อมูล...",
        address2: "กำลังดึงข้อมูล...",
        address3: "กำลังดึงข้อมูล...",
        password: "กำลังดึงข้อมูล...",
        picture: "",
        catsitter: false,
    })

    async function fetchSignInUser() {
        const response = await fetch("/api/token/get/" + token)
        if (response.ok) {
            const signInUser = await response.json()
            if (signInUser)
                setUser(signInUser)
        }
    }

    const setSignInUser = (user: IUser) => {
        setUser(user)
    }

    useEffect(() => {
        if (token)
            fetchSignInUser()
        setLoading(false)
    }, [])

    return (
        <html lang="th">
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <body className={`${ibmplexsansthai.className} d-flex flex-column`}>

        <NavigationBar user={user} setUser={setSignInUser}/>
        <main>
            <AppContextProvider user={user} setUser={setSignInUser}>
                {children}
            </AppContextProvider>
        </main>
        <Footer/>

        {loading ? <Loader/> : ""}
        </body>
        </html>
    )
}