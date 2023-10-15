"use client"

import Link from "next/link"
import "@/components/pages/auth/AuthForm.css"
import SignInForm from "@/components/pages/auth/signin/SignInForm"
import { IUser } from "@/lib/class/User"
import { Dispatch, SetStateAction } from "react"
import { useAppContext } from "../context/app"

export default function Page() {
    const { user, setUser } = useAppContext()

    return (
        <section className="backgnd">
            <div className="layoutOfBacktohome">
                <Link href={"/"}>
                    <button type="button" className="myBtn btn btn-light rounded-pill border border-dark">กลับสู่หน้าหลัก</button>
                </Link>
            </div>
            <SignInForm setUser={setUser} />
        </section>
    )
}