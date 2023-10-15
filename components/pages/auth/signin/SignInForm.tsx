'use client'

import { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import Swal from 'sweetalert2'
import '@/components/pages/auth/AuthForm.css'
import popUp from '@/image/blackcat.png'
import { useRouter } from 'next/navigation'
import { useCookies } from "react-cookie"
import { IToken } from '@/lib/class/Token'
import { IUser } from '@/lib/class/User'

interface SignInFormProps {
    setUser: Dispatch<SetStateAction<IUser | undefined>>
}

const SignInForm: React.FC<SignInFormProps> = ({ setUser }) => {
    const router = useRouter()
    const [token, setToken] = useCookies(["userToken"])
    const [isLoading, setLoading] = useState<boolean>(false)

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        if (value.length <= 50) {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setLoading(true)

        const response = await fetch('/api/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        if (!response.ok) {
            const error = await response.json()
            Swal.fire({
                title: 'เกิดข้อผิดพลาด!',
                text: error,
                icon: 'error',
                confirmButtonText: 'รับทราบ'
            }).then(() => {
                setLoading(false)
            })
        } else {
            const token: IToken = await response.json()
            Swal.fire({
                title: 'ดำเนินการสำเร็จ!',
                text: 'เข้าสู่ระบบสำเร็จ',
                icon: 'success',
                confirmButtonText: 'รับทราบ'
            }).then(() => {
                setUser(token.owner)
                setToken("userToken", JSON.stringify(token.token), {
                    path: "/",
                    maxAge: 3600 * 24 * 7,
                })
                router.push('/');
            })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='d-flex flex-row'>
                <div className='catPop d-flex flex-column justify-content-center me-5 '>
                    <div>
                        <Image className='myCat' src={popUp} alt='popUp'></Image>
                    </div>
                </div>
                <div className='flex flex-col align-items-center mb-3 ml-3 bg-[var(--cream)] w-[850px] h-[730px] shadow-xl rounded-[50px] '>
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
                    {!isLoading ?
                        <button className='sign-bt rounded-5 mb-4 mt-4 fw-bold' type="submit">เข้าสู่ระบบ</button> :
                        <button className='sign-bt loading rounded-5 mb-4 mt-4 fw-bold' disabled type="submit">กำลังดำเนินการ...</button>
                    }
                    <div className='signupNow mt-3 ms-auto fw-bold'>
                        <p>ยังไม่มีบัญชีหรอ? <Link href="/signup">สมัครเลย</Link></p>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default SignInForm