"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import Swal from "sweetalert2"

interface SignUpFormProps { }

const SignUpForm: React.FC<SignUpFormProps> = ({ }) => {
    const maxLength = 100;

    const router = useRouter()
    const [isLoading, setLoading] = useState<boolean>(false)

    const [formData, setFormData] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
        telephone: "",
        address: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        if (value.length <= maxLength) {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }))
        }
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setLoading(true)

        const response = await fetch("/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        if (!response.ok) {
            const error = await response.json()
            Swal.fire({
                title: "เกิดข้อผิดพลาด!",
                text: error,
                icon: "error",
                confirmButtonText: "รับทราบ"
            }).then(() => {
                setLoading(false)
            })
        } else {
            Swal.fire({
                title: "ดำเนินการสำเร็จ!",
                text: "สร้างบัญชีผู้ใช้สำเร็จ",
                icon: "success",
                confirmButtonText: "รับทราบ"
            }).then(() => {
                router.push("/signin")
            })
        }
    }

    return (
        <div className="bg-[var(--white-cream)]">

            <div className="flex justify-center">
                <div className="w-[300px] md:w-[700px] lg:w-[1300px]">
                    <Link href="/signin">
                        <button className="text-blueText border-[3px] mt-[50px] border-blueText bg-conclustion font-medium rounded-full px-4 py-2 pl-[150px] pr-[150px] text-xl hover:scale-105 duration-300">
                            ย้อนกลับ
                        </button>
                    </Link>
                </div>
            </div>

            <div className="py-5">
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-center">
                        <div className="bg-[var(--cream)] w-[300px] md:w-[700px] lg:w-[1000px] py-10 px-6 md:py-16 md:px-24 shadow-md rounded-[30px] ">
                            <p className="text-center text-[var(--navy)] mb-8 text-[24px] md:text-[36px] lg:text-[38px] font-bold">สร้างบัญชีผู้ใช้งาน</p>
                            <div className="">

                                <div className="flex flex-col lg:flex-row justify-between gap-y-4">
                                    <div className="flex flex-col">
                                        <label className="text-[var(--blue)]" htmlFor="name">ชื่อ-นามสกุล</label>
                                        <input className="rounded-5 focus:outline-none focus:border-1 focus:border-[var(--blue) w-full lg:w-[390px]"
                                            placeholder="กรอกชื่อของคุณ"
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-[var(--yellow)]" htmlFor="email">อีเมล</label>
                                        <input className="rounded-5 focus:outline-none focus:border-1 focus:border-[var(--yellow)] md:w-full lg:w-[390px]"
                                            placeholder="กรอกอีเมลของคุณ"
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    
                                </div>

                                <div className="flex flex-col lg:flex-row justify-between mt-3 gap-y-4">
                                    <div className="flex flex-col">
                                        <label className="text-[var(--aqua)]" htmlFor="telephone">เบอร์โทรศัพท์</label>
                                        <input className="rounded-5 focus:outline-none focus:border-1 focus:border-[var(--blue)] md:w-full lg:w-[390px]"
                                            placeholder="กรอกเบอร์โทรศัพท์ของคุณ"
                                            type="text"
                                            id="telephone"
                                            name="telephone"
                                            value={formData.telephone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-[var(--light-red)]" htmlFor="address">ที่อยู่</label>
                                        <input className="rounded-5 focus:outline-none focus:border-1 focus:border-[var(--yellow)] md:w-full lg:w-[390px]"
                                            placeholder="กรอกที่อยู่ของคุณ"
                                            type="text"
                                            id="address"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col lg:flex-row justify-between mt-3 gap-y-4">
                                    <div className="flex flex-col">
                                        <label className="text-[var(--navy)]" htmlFor="password">รหัสผ่าน</label>
                                        <input className="rounded-5 focus:outline-none focus:border-1 focus:border-[var(--red)] md:w-full lg:w-[390px]"
                                            placeholder="กรอกรหัสผ่านของคุณ"
                                            type="password"
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-[var(--red)]" htmlFor="password">ยืนยันรหัสผ่าน</label>
                                        <input className="rounded-5 focus:outline-none focus:border-1 focus:border-[var(--light-red)] md:w-full lg:w-[390px]"
                                            placeholder="ยืนยันรหัสผ่านของคุณ"
                                            type="password"
                                            id="passwordConfirm"
                                            name="passwordConfirm"
                                            value={formData.passwordConfirm}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center justify-between mt-12 gap-5">
                                <div className="sign-hint">
                                    มีบัญชีแล้วหรอ? <Link href="/signin" className="text-[var(--light-red)] hover:cursor-pointer hover:text-[var(--red)]">เข้าสู่ระบบ</Link>
                                </div>
                                {!isLoading ?
                                    <button className="sign-button " type="submit">สร้างบัญชีผู้ใช้งาน</button> :
                                    <button className="sign-button loading" disabled type="submit">กำลังดำเนินการ...</button>
                                }
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUpForm