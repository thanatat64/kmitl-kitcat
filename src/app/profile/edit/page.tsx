"use client"

import { FormEvent, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import userIcon from "@/image/userIcon.png"
import Swal from "sweetalert2"
import { useAppContext } from "src/app/context/app"

export default function Page() {
    const { user, setUser } = useAppContext()
    const [isLoading, setLoading] = useState<boolean>(false)

    const [formData, setFormData] = useState({
        id: user?.id,
        name: user?.name,
        email: user?.email,
        telephone: user?.telephone,
        address1: user?.address1,
        address2: user?.address2,
        address3: user?.address3,
        passwordOld: "",
        passwordNew: "",
        passwordConfirm: "",
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

        Swal.fire({
            title: "บันทึกการแก้ไข?",
            text: "ยืนยันบันทึกการแก้ไขหรือไม่",
            icon: "question",
            showDenyButton: true,
            denyButtonText: "ยกเลิก",
            confirmButtonText: "ยืนยัน",
        }).then(async (result) => {
            if (result.isConfirmed) {
                setLoading(true)
                const response = await fetch("/api/user/edit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
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
                    const user = await response.json()
                    Swal.fire({
                        title: 'ดำเนินการสำเร็จ!',
                        text: 'บันทึกการแก้ไขสำเร็จ',
                        icon: 'success',
                        confirmButtonText: 'รับทราบ'
                    }).then(() => {
                        setUser(user)
                        setLoading(false)
                        setFormData({
                            ...formData,
                            passwordOld: "",
                            passwordNew: "",
                            passwordConfirm: "",
                        });
                    })
                }
            }
        })

    }

    return (
        <div className="bg-[var(--white-cream)] pb-8">

            <div className="mx-auto w-[300px] md:w-[700px] lg:w-[1300px]">
                <Link href="/profile">
                    <button className="text-blueText z-10 border-[3px] mt-[50px] border-blueText bg-conclustion font-medium rounded-full px-4 py-2 text-xl">
                        <span>
                            ย้อนกลับ
                        </span>
                    </button>
                </Link>
            </div>
            <div className="text-[40px] text-[var(--navy)] font-bold text-center mt-3 mb-3">แก้ไขโปรไฟล์</div>
            <div className="flex flex-row justify-center">
                <form className="bg-[var(--cream)] w-[300px] md:w-[700px] p-4 lg:w-[1300px] md:p-[50px] lg:m-[20px] rounded-[30px] mb-5 shadow-lg" onSubmit={handleSubmit}>
                    <div className="">
                        <div className=" flex flex-col items-center justify-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image
                                    className="mt-4 w-[8rem] h-[8rem] md:w-[12.5rem] md:h-[12.5rem]"
                                    src={userIcon}
                                    alt="Picture Of User"
                                />
                            </div>
                        </div>
                        <div className="text-[var(--navy)] text-xl md:text-2xl font-bold mt-4 lg:mt-10 lg:w-10/12 lg:mx-auto py-2 border-b-2 border-[#93A8D6]">
                            ข้อมูลส่วนตัว
                        </div>
                        <div className="flex flex-col items-center lg:w-6/12 lg:mx-auto lg:mt-5 gap-1">
                            <div className="flex flex-col w-3/4 lg:w-full pt-3 gap-2">
                                <label className="self-start lg:text-2xl font-bold text-[var(--blue)] mb-0" htmlFor="name">ชื่อ</label>
                                <input className="self-start text-[13px] font-medium md:text-[16px] lg:text-xl w-full text-[var(--navy)] border-transparent hover:border-[var(--blue)] focus:outline-none focus:border-[var(--blue)] rounded-pill border-3 lg:py-3 lg:px-10"
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="กรอกชื่อผู้ใช้ใหม่"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col w-3/4 lg:w-full pt-3 gap-2">
                                <label className="self-start lg:text-2xl font-bold text-[var(--yellow)] mb-0 lg:mt-4" htmlFor="email">อีเมล</label>
                                <input className="self-start text-[13px] font-medium md:text-[16px] lg:text-xl w-full text-[var(--navy)] border-transparent hover:border-[var(--yellow)] focus:outline-none focus:border-[var(--yellow)] rounded-pill border-3 lg:py-3 lg:px-10"
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="กรอกอีเมลใหม่"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col w-3/4 lg:w-full pt-3 gap-2">
                                <label className="self-start lg:text-2xl font-bold text-[var(--red)] mb-0 lg:mt-4" htmlFor="telephone">เบอร์โทรศัพท์</label>
                                <input className="self-start text-[13px] font-medium md:text-[16px] lg:text-xl w-full text-[var(--navy)] border-transparent hover:border-[var(--red)] focus:outline-none focus:border-[var(--red)] rounded-pill border-3 lg:py-3 lg:px-10"
                                    type="text"
                                    id="telephone"
                                    name="telephone"
                                    placeholder="กรอกเบอร์โทรศัพท์ใหม่"
                                    value={formData.telephone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="text-[var(--navy)] text-xl md:text-2xl font-bold mt-4 lg:mt-10 lg:w-10/12 lg:mx-auto py-2 border-b-2 border-[#93A8D6]">
                            สถานที่
                        </div>
                        <div className="flex flex-col items-center lg:w-6/12 lg:mx-auto lg:mt-5 gap-1">

                            <div className="flex flex-col w-3/4 lg:w-full pt-3 gap-2">
                                <label className="self-start lg:text-2xl font-bold text-[var(--blue)] mb-0 lg:mt-4" htmlFor="telephone">ตำแหน่งตั้งต้น 1</label>
                                <input className="self-start text-[13px] font-medium md:text-[16px] lg:text-xl w-full text-[var(--navy)] border-transparent hover:border-[var(--blue)] focus:outline-none focus:border-[var(--blue)] rounded-pill border-3 lg:py-3 lg:px-10"
                                    type="text"
                                    id="address1"
                                    name="address1"
                                    placeholder="กรุณาระบุตำแหน่งที่อยู่ของคุณ"
                                    value={formData.address1}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col w-3/4 lg:w-full pt-3 gap-2">
                                <label className="self-start lg:text-2xl font-bold text-[var(--blue)] mb-0 lg:mt-4" htmlFor="telephone">ตำแหน่งตั้งต้น 2</label>
                                <input className="self-start text-[13px] font-medium md:text-[16px] lg:text-xl w-full text-[var(--navy)] border-transparent hover:border-[var(--blue)] focus:outline-none focus:border-[var(--blue)] rounded-pill border-3 lg:py-3 lg:px-10"
                                    type="text"
                                    id="address2"
                                    name="address2"
                                    placeholder="กรุณาระบุตำแหน่งที่อยู่ของคุณ"
                                    value={formData.address2}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col w-3/4 lg:w-full pt-3 gap-2">
                                <label className="self-start lg:text-2xl font-bold text-[var(--blue)] mb-0 lg:mt-4" htmlFor="telephone">ตำแหน่งตั้งต้น 3</label>
                                <input className="self-start text-[13px] font-medium md:text-[16px] lg:text-xl w-full text-[var(--navy)] border-transparent hover:border-[var(--blue)] focus:outline-none focus:border-[var(--blue)] rounded-pill border-3 lg:py-3 lg:px-10"
                                    type="text"
                                    id="address3"
                                    name="address3"
                                    placeholder="กรุณาระบุตำแหน่งที่อยู่ของคุณ"
                                    value={formData.address3}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="text-[var(--navy)] text-xl md:text-2xl font-bold mt-4 lg:mt-10 lg:w-10/12 lg:mx-auto py-2 border-b-2 border-[#93A8D6]">
                            แก้ไขรหัสผ่าน
                        </div>
                        <div className="flex flex-col items-center lg:w-6/12 lg:mx-auto lg:mt-5 gap-1">
                            <div className="flex flex-col w-3/4 lg:w-full pt-3 gap-2">
                                <label className="self-start lg:text-2xl font-bold text-[var(--yellow)] mb-0 lg:mt-4" htmlFor="telephone">รหัสผ่านเดิม</label>
                                <input className="self-start text-[13px] font-medium md:text-[16px] lg:text-xl w-full text-[var(--navy)] border-transparent hover:border-[var(--yellow)] focus:outline-none focus:border-[var(--yellow)] rounded-pill border-3 lg:py-3 lg:px-10"
                                    type="password"
                                    id="passwordOld"
                                    name="passwordOld"
                                    placeholder="กรอกรหัสผ่านเดิมของคุณ"
                                    value={formData.passwordOld}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col w-3/4 lg:w-full pt-3 gap-2">
                                <label className="self-start lg:text-2xl font-bold text-[var(--red)] mb-0 lg:mt-4" htmlFor="telephone">รหัสผ่านใหม่</label>
                                <input className="self-start text-[13px] font-medium md:text-[16px] lg:text-xl w-full text-[var(--navy)] border-transparent hover:border-[var(--red)] focus:outline-none focus:border-[var(--red)] rounded-pill border-3 lg:py-3 lg:px-10"
                                    type="password"
                                    id="passwordNew"
                                    name="passwordNew"
                                    placeholder="กรอกรหัสผ่านใหม่ของคุณ"
                                    value={formData.passwordNew}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col w-3/4 lg:w-full pt-3 gap-2">
                                <label className="self-start lg:text-2xl font-bold text-[var(--blue)] mb-0 lg:mt-4" htmlFor="telephone">ยืนยันรหัสผ่านใหม่</label>
                                <input className="self-start text-[13px] font-medium md:text-[16px] lg:text-xl w-full text-[var(--navy)] border-transparent hover:border-[var(--blue)] focus:outline-none focus:border-[var(--blue)] rounded-pill border-3 lg:py-3 lg:px-10"
                                    type="password"
                                    id="passwordConfirm"
                                    name="passwordConfirm"
                                    placeholder="กรอกรหัสผ่านใหม่ของคุณ"
                                    value={formData.passwordConfirm}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex flex-row justify-center mt-6">
                            {!isLoading ?
                                <button className="lg:text-xl font-bold text-white bg-[var(--aqua)] hover:bg-[#4DB6C1] px-8 py-2 rounded-full mt-3 mb-3" type="submit">บันทึก</button> :
                                <button className="lg:text-xl font-bold text-white bg-[var(--aqua)] hover:bg-[#4DB6C1] px-8 py-2 rounded-full mt-3 mb-3" type="submit">กำลังดำเนินการ...</button>
                            }
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}