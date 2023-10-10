'use client'

import { FormEvent, useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import Swal from 'sweetalert2'
import '@/components/pages/auth/AuthForm.css'
import popUp from '@/image/blackcat.png'

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

        const response = await fetch('/api/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        const data = await response.json()
        console.log(data)
        if (data != '-1') {
            alert("Login Successfully!")
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
        else {
            alert("password incorrect")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='d-flex flex-row mb-4'>
                <div className='catPop d-flex flex-column justify-content-center me-5 '>
                    <div>
                        <Image className='myCat' src={popUp} alt='popUp'></Image>
                    </div>
                </div>
                <div className='userCardIn d-flex flex-column align-items-center card mb-3 ml-3 '>
                    <h1 className='head1'>เข้าสู่ระบบของ KitCat</h1>
                    <div>
                        <div>
                            <label className='email mb-4' htmlFor="email">อีเมล</label>
                        </div>
                        <input className='inp rounded-5'
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
                        <input className='inp rounded-5'
                            type="password"
                            placeholder='กรอกรหัสผ่านของคุณ'
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='checkbox d-flex flex-row justify-content-between mt-4'>
                        <div className='me-5 d-flex flex-row'>
                            <div className='box'>
                                <input type="checkbox" className="btn-check" id="btn-check-outlined" />
                                <label className="btnCh btn btn-outline-info" htmlFor="btn-check-outlined"></label>
                            </div>
                            <div>
                                <p className='saveAc ms-2 text-info fw-bold'>จำฉันไว้ในระบบ</p>
                            </div>
                        </div>
                        <div className='forgotPass fw-bold' >ลืมรหัสผ่าน?</div>
                    </div>
                    <button className='sign-bt rounded-5 mb-4 mt-4 fw-bold' type="submit">เข้าสู่ระบบ</button>
                    <div className='signupNow mt-3 ms-auto fw-bold'>
                        <p>ยังไม่มีบัญชีหรอ? <Link href="/signup">สมัครเลย</Link></p>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default SignInForm