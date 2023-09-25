'use client'

import { FormEvent, useState } from 'react'
import { idText } from 'typescript'

interface SignUpFormProps {

}

const SignUpForm: React.FC<SignUpFormProps> = ({ }) => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        password: '',
        telephone: '',
        address: '',
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

        const response = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        if (!response.ok) {
            const error = await response.json()
            alert("Failed to create user: " + error)
        } else {
            alert("Successfully created new user!")
            setFormData({
                id: '',
                name: '',
                email: '',
                password: '',
                telephone: '',
                address: '',
            })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email Address</label>
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
            <div>
                <label htmlFor="telephone">Telephone</label>
                <input
                    type="text"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Sign Up</button>
        </form>
    )
}

export default SignUpForm