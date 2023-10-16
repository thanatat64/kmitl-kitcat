"use client"

import {IToken} from "@/lib/class/Token"
import {IUser} from "@/lib/class/User"
import Link from "next/link"
import {useRouter} from "next/navigation"
import {Dispatch, FormEvent, SetStateAction, useState} from "react"
import {useCookies} from "react-cookie"
import Swal from "sweetalert2"

interface SignInFormProps {
    setUser: Dispatch<SetStateAction<IUser | undefined>>
}

const SignInForm: React.FC<SignInFormProps> = ({setUser}) => {
    const router = useRouter()
    const [_token, setToken] = useCookies(["userToken"])
    const [isLoading, setLoading] = useState<boolean>(false)

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        if (value.length <= 50) {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }))
        }
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setLoading(true)

        const response = await fetch("/api/auth/signin", {
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
            const token: IToken = await response.json()
            Swal.fire({
                title: "ดำเนินการสำเร็จ!",
                text: "เข้าสู่ระบบสำเร็จ",
                icon: "success",
                confirmButtonText: "รับทราบ"
            }).then(() => {
                setUser(token.owner)
                setToken("userToken", JSON.stringify(token.token), {
                    path: "/",
                    maxAge: 3600 * 24 * 7,
                })
                router.push("/")
            })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex justify-center">
                <div className="bg-[var(--cream)] py-10 px-6 md:py-16 md:px-24 shadow-md rounded-[50px] ">
                    <h1 className="text-center text-[var(--navy)] mb-8">เข้าสู่ระบบ</h1>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="flex flex-col">
                            <label className="text-[var(--blue)]" htmlFor="email">อีเมล</label>
                            <input className="rounded-5 focus:outline-none focus:border-1 focus:border-[var(--yellow)]"
                                   placeholder="กรอกอีเมลของคุณ"
                                   type="email"
                                   id="email"
                                   name="email"
                                   value={formData.email}
                                   onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-[var(--red)]" htmlFor="password">รหัสผ่าน</label>
                            <input className="rounded-5 focus:outline-none focus:border-1 focus:border-[var(--red)]"
                                   placeholder="กรอกรหัสผ่านของคุณ"
                                   type="password"
                                   id="password"
                                   name="password"
                                   value={formData.password}
                                   onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-between mt-12 gap-5">
                        <div className="sign-hint">
                            ยังไม่มีบัญชี? <Link href="/signup" className="text-[var(--light-red)] hover:cursor-pointer hover:text-[var(--red)]">สร้างบัญชีผู้ใช้งาน</Link>
                        </div>
                        {!isLoading ?
                            <button className="sign-button" type="submit">เข้าสู่ระบบ</button> :
                            <button className="sign-button loading" disabled type="submit">กำลังดำเนินการ...</button>
                        }
                    </div>
                </div>
            </div>
        </form>
    )
}

export default SignInForm