'use client'

import { FormEvent, useState } from 'react'
import "./EditProfileForm.css"
import Image from 'next/image'
import userIcon from "@/image/userIcon.png"
import editUserIconCircle from "@/image/editUserIconCircle.svg"
import editUserIconPen from "@/image/editUserIconPen.png"
import cat from "@/image/catProfile.png"

interface EditProfileFormProps {

}

const EditProfileForm: React.FC<EditProfileFormProps> = ({ }) => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        telephone: '',
        oldPassword: '',
        newPassword: '',
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
            alert("Failed to edit your profile: " + error)
        } else {
            alert("Successfully to edit your profile!")
            setFormData({
                id: '',
                name: '',
                email: '',
                telephone: '',
                oldPassword: '',
                newPassword: '',
            })
        }
    }

    return (
        <div className='bg-color-white-cream'>
            <button className="btn btn-back-home fs-5 fw-500 text-color-navy rounded-pill mt-5 ms-5 px-4" type="button">
                <span>กลับสู่หน้าหลัก</span>
            </button>
            <div className='d-flex flex-column align-items-center justify-content-center box'>
                <div className='fs-1 fw-700 text-color-navy mt-4 mb-4'>โปรไฟล์ของฉัน</div>
                <form className='d-flex flex-column align-items-center justify-content-center p-5 rounded-5 box-all-form shadow gap-2' onSubmit={handleSubmit}>
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
                    <div className='d-flex flex-row gap-4'>
                        <div className='d-flex flex-column align-items-end gap mt-3'>
                            <label className='fs-4 fw-bold text-color-blue form-label mb-0' htmlFor="name">ชื่อ</label>
                            <label className='fs-4 fw-bold text-color-yellow form-label mb-0' htmlFor="email">อีเมล</label>
                            <label className='fs-4 fw-bold text-color-red form-label mb-0' htmlFor="telephone">เบอร์โทรศัพท์</label>
                            <label className='fs-4 fw-bold text-color-aqua form-label mb-0' htmlFor="telephone">รหัสผ่าน</label>
                        </div>
                        <div className='d-flex flex-column gap-4'>
                            <input className='fs-5 text-color-placeholder rounded-pill border-0 py-3 px-5 box-each-form'
                                type="text"
                                id="name"
                                name="name"
                                placeholder='กรอกชื่อใหม่ของคุณ'
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <input className='fs-5 text-color-placeholder rounded-pill border-0 py-3 px-5 box-each-form'
                                type="email"
                                id="email"
                                name="email"
                                placeholder='กรอกอีเมลใหม่ของคุณ'
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <input className='fs-5 text-color-placeholder rounded-pill border-0 py-3 px-5 box-each-form'
                                type="text"
                                id="telephone"
                                name="telephone"
                                placeholder='กรอกเบอร์โทรศัพท์ใหม่ของคุณ'
                                value={formData.telephone}
                                onChange={handleChange}
                            />
                            <input className='fs-5 text-color-placeholder rounded-pill border-0 py-3 px-5 box-each-form'
                                type="password"
                                id="oldPassword"
                                name="oldPassword"
                                placeholder='กรอกรหัสผ่านเดิมของคุณ'
                                value={formData.oldPassword}
                                onChange={handleChange}
                            />
                            <input className='fs-5 text-color-placeholder rounded-pill border-0 py-3 px-5 box-each-form'
                                type="password"
                                id="newPassword"
                                name="newPassword"
                                placeholder='กรอกรหัสผ่านใหม่ของคุณ'
                                value={formData.newPassword}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <button className="btn btn-save fs-4 fw-bold text-color-navy bg-color-aqua rounded-pill mt-3" type="submit">บันทึก</button>
                </form>
                <Image
                    className='cat ms-auto'
                    src={cat}
                    alt="Cat-Ease-In"
                />
            </div>
        </div>
        
    )
}

export default EditProfileForm