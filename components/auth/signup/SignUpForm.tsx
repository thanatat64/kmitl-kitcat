'use client'

import { FormEvent, useState } from 'react'
import '../../auth/signIn_signUpForm.css'
import Link from "next/link";

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
            <div className='d-flex flex-row'>
                <div className='catPop d-flex flex-column justify-content-center me-5'>
                    <div>
                        <img className="myCat" src="https://s3-alpha-sig.figma.com/img/6712/2732/2c37cfb1ef422c9ea9d8c6e2f2a8d99a?Expires=1696809600&Signature=EvqWamCbu24IS6cD2APDq3JsRi4UpoyBxqXLxT~MoLk4-8Q1HPkqX1d6KXRD3r3JoYvuFtyG0-aldYhQyzTXBfqPBrKG1JrKnElth9SV3cLbLwS~Dkd8c3RLX4E32zW7bUqPZJQ1NhuUYiqNoQa81p0L0C1E8Nb7bDVbtQLZJqixOMblDqI~IzWHZ5BBEaIPV-b6u40q~1o85IzQMS9pSdHsRFsvi53rVKZFY2CPPl15kCdxJoqVdAfeJjsFifmY5MQIm-5G4xb7PwzWjQH43bbTsWSYigphuobKLsQlbVyRu9ZL2rU55GOW1NBtYMLCU7KOzrMb41vujuxtPEI1og__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                    </div>
                </div>
                <div className='userCardIn container d-flex flex-column align-items-center card mb-3 ml-3 '>
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
                            <label className='telephone mt-1' htmlFor="telephone">โทรศัพท์</label>
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
                    <button className='sign-bt rounded-5 mb-4 mt-4 fw-bold' type="submit">สมัครสมาชิก</button>
                    <div className='signupNow mt-2 ms-auto fw-bold'>
                        <p>มับัญชีแล้วหรอ? <Link href="/signin">เข้าสู่ระบบ</Link></p>
                    </div>
                </div>
            </div>
            </form>
    )
}

export default SignUpForm