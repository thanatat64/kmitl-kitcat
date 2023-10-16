"use client"

import "@/components/pages/auth/AuthForm.css"
import SignInForm from "@/components/pages/auth/signin/SignInForm"
import Link from "next/link"
import {useAppContext} from "../context/app"

export default function Page() {
    const {setUser} = useAppContext()

    return (
        <section>
            <Link href={"/"} className="back-button">กลับสู่หน้าหลัก</Link>
            <SignInForm setUser={setUser}/>
        </section>
    )
}