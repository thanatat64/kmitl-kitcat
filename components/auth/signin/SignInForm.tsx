'use client'

import { FormEvent, useState } from 'react'
import './signInForm.css'
import Link from 'next/link'

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
            <div className='d-flex flex-row'>
                {/* press Popup here */}
                <div className='d-flex flex-column justify-content-center me-5'><p className='text-bg-danger text-black'>press cat Popup here</p></div>
                {/* press Popup here */}
                <div className='userCard d-flex flex-column align-items-center card mb-3 ml-3 '>
                    <h1 className='head1'>เข้าสู่ระบบของ KitCat</h1>
                    <div>
                        <div>
                            <label className='email mb-4' htmlFor="email">อีเมล</label>
                        </div>
                        <input className='rounded-5'
                            type="email"
                            placeholder='กรอกอีเมลของคุณ'
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <div>
                            <label className='passw mt-4 mb-4' htmlFor="password">รหัสผ่าน</label>
                        </div>
                        <input className='rounded-5'
                            type="password"
                            placeholder='กรอกรหัสผ่านของคุณ'
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <div className='d-flex flex-row justify-content-between mt-4 '>
                            <div>จำฉันไว้ในระบบ</div>
                            <div>ลืมรหัสผ่าน</div>
                        </div>
                    </div>
                    <button className='sign-bt rounded-5 mb-4 mt-4' type="submit">เข้าสู่ระบบ</button>
                    <div className='signupNow mt-4 ms-auto'>
                        <p>ยังไม่มีบัญชีหรอ? <Link href="/signup">สมัครเลย</Link></p>
                    </div>
                </div>

            </div>
        </form>
    )
}

export default SignInForm