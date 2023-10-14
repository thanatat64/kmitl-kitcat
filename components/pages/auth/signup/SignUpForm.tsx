'use client'

import { FormEvent, useState } from 'react'
import '@/components/pages/auth/AuthForm.css'
import Swal from 'sweetalert2'
import Link from 'next/link'
import Image from 'next/image'
import popUp from '@/image/blackcat.png'
import { useRouter } from 'next/navigation'

interface SignUpFormProps { }

const SignUpForm: React.FC<SignUpFormProps> = ({ }) => {
    const router = useRouter()
    const [isLoading, setLoading] = useState<boolean>(false)

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

        const response = await fetch('/api/auth/signup', {
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
            Swal.fire({
                title: 'ดำเนินการสำเร็จ!',
                text: 'สร้างบัญชีผู้ใช้สำเร็จ',
                icon: 'success',
                confirmButtonText: 'รับทราบ'
            }).then(() => {
                router.push('/signin');
            })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='d-flex flex-row'>
                <div className='catPop d-flex flex-column justify-content-center me-5'>
                    <div>
                        <Image className='myCat' src={popUp} alt='popUp'></Image>
                    </div>
                </div>
                <div className='flex flex-col align-items-center mb-3 ml-3 bg-[var(--cream)] w-[850px] h-[770px] shadow-xl rounded-[50px] '>
                    <h1 className='head2'>สร้างบัญชีของ KitCat</h1>
                    <div>
                        <div>
                            <label className='name mb-1' htmlFor="name">ชื่อ</label>
                        </div>
                        <input className='inp rounded-5 mb-2'
                            type="ชื่อ"
                            placeholder='กรอกชื่อของคุณ'
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <div>
                            <label className='email mb-1' htmlFor="email">อีเมล</label>
                        </div>
                        <input className='inp rounded-5 mb-2'
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
                            <label className='passw mb-1' htmlFor="password">รหัสผ่าน</label>
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
                    <div>
                        <div>
                            <label className='telephone mt-2' htmlFor="telephone">โทรศัพท์</label>
                        </div>
                        <input className='inp rounded-5'
                            type="telephone"
                            placeholder='กรอกเบอร์โทรศัพท์ของคุณ'
                            id="telephone"
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <div>
                            <label className='address mt-1 mb-1' htmlFor="address">ที่อยู่</label>
                        </div>
                        <input className='inp rounded-5 mb-2'
                            type="address"
                            placeholder='กรอกที่อยู่ของคุณ'
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>
                    {!isLoading ?
                        <button className='sign-bt rounded-5 mb-4 mt-4 fw-bold' type="submit">สมัครสมาชิก</button> :
                        <button className='sign-bt loading rounded-5 mb-4 mt-4 fw-bold' disabled type="submit">กำลังดำเนินการ...</button>
                    }
                    <div className='signupNow mt-2 ms-auto fw-bold'>
                        <p>มีบัญชีแล้วหรอ? <Link href="/signin">เข้าสู่ระบบ</Link></p>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default SignUpForm