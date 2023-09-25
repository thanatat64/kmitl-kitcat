'use client'

import { FormEvent, useState } from 'react'
import "./EditProfileForm.css"
import Image from 'next/image'
import userIcon from "../../public/image/userIcon.png"
import editUserIconCircle from "../../public/image/editUserIconCircle.svg"
import editUserIconPen from "../../public/image/editUserIconPen.png"

interface SignUpFormProps {

}

// ไอ่พวกที่ดึงดาต้าพวกนี้ก๊ปมาจาก sign up ยังไม่ได้ทำอะไร
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
        console.log(formData);

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
        <div>
            <button className="btn fs-4 fw-500 text-color-navy border-btn rounded-5 mt-5" type="button">กลับสู่หน้าหลัก</button>
            <div className='d-flex flex-column align-items-center justify-content-center box1'>
                <div className='fs-1 fw-700 text-color-navy mt-4 mb-4'>โปรไฟล์ของฉัน</div>
                <form className='d-flex flex-column align-items-center justify-content-center p-5 rounded-5 box2' onSubmit={handleSubmit}>
                    <div className='d-flex flex-column align-items-end'>
                        <Image 
                            className='user-icon'
                            src={userIcon}
                            alt="Picture Of User"
                        />
                        <Image 
                            className='editUserIconCircle'
                            src={editUserIconCircle}
                            alt="Picture Of editUserIconCircle"
                        />
                        <Image 
                            className='editUserIconPen mb-5'
                            src={editUserIconPen}
                            alt="Picture Of editUserIconPen"
                        />
                    </div>
                    <div>
                        <label htmlFor="name">ชื่อ</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">อีเมล</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="telephone">เบอร์โทรศัพท์</label>
                        <input
                            type="text"
                            id="telephone"
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">รหัสผ่าน</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">บันทึก</button>
                </form>
            </div>
        </div>
        
    )
}

export default SignUpForm