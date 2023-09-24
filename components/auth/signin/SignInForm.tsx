'use client'

import { FormEvent, useState } from 'react'

interface SignInFormProps {

}

const SignInForm: React.FC<SignInFormProps> = ({ }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        // const response = await fetch('/api/auth/signin', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData),
        // })
        // const data = await response.json()

        alert("Login Successfully!")
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password" 
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Sign In</button>
        </form>
    )
}

export default SignInForm