'use client'
import React from 'react'
import "@/components/pages/auth/AuthForm.css"
import SignUpForm from "@/components/pages/auth/signup/SignUpForm"

const page = () => {
    return (
        <div className='auth-section'>
            <SignUpForm />
        </div>
    )
}

export default page
