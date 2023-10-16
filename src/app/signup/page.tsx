"use client"

import "@/components/pages/auth/AuthForm.css"
import SignUpForm from "@/components/pages/auth/signup/SignUpForm"
import Link from "next/link"

export default function Page() {
    return (
        <section className="auth-section">
            <Link href={"/signin"} className="back-button">ย้อนกลับ</Link>
            <SignUpForm/>
        </section>
    )
}