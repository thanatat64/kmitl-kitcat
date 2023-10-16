"use client"

import "@/components/pages/auth/AuthForm.css"
import SignInForm from "@/components/pages/auth/signin/SignInForm"
import {useAppContext} from "../context/app"

export default function Page() {
    const {setUser} = useAppContext()

    return (
        <div className="className='auth-section'">
            <SignInForm setUser={setUser}/>
        </div>
    )
}