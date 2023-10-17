"use client"

import Link from "next/link"
import {useRouter} from "next/navigation"
import React, {FormEvent, useEffect, useState} from "react"
import Swal from "sweetalert2"
import {useAppContext} from "../context/app";

const DateTimeInput: React.FC = () => {
    const {user, authentication} = useAppContext()

    useEffect(() => {
        authentication()
    }, []);

    const router = useRouter()

    const [isLoading, setLoading] = useState<boolean>(false)

    const [checkInDateTime, setCheckInDateTime] = useState<string>("")
    const [checkOutDateTime, setCheckOutDateTime] = useState<string>("")
    const [note, setNote] = useState<string>("")
    const [address, setAddress] = useState<string>("")
    const maxLengthNote = 100
    const maxLengthAddress = 100

    const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value

        if (text.length <= maxLengthNote) {
            setNote(text)
        } else {
            Swal.fire({
                title: "คำเตือน!",
                text: "โปรดใส่ตัวอักษรไม่เกินจำนวนที่กำหนด",
                icon: "error",
                confirmButtonText: "รับทราบ"
            })
        }
    }
    const handleDatalistChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value

        if (text.length <= maxLengthAddress) {
            setAddress(text)
        } else {
            Swal.fire({
                title: "คำเตือน!",
                text: "โปรดใส่ตัวอักษรไม่เกินจำนวนที่กำหนด",
                icon: "error",
                confirmButtonText: "รับทราบ"
            })
        }
    }

    const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckInDateTime(e.target.value)
        if (checkOutDateTime < e.target.value) {
            setCheckOutDateTime(e.target.value)
        }
    }

    const handleCheckOutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckOutDateTime(e.target.value)
        if (e.target.value < checkInDateTime) {
            setCheckInDateTime(e.target.value)
        }
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setLoading(true)

        const response = await fetch("/api/order/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({

            }),
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
        <div className="flex justify-center bg-[var(--white-cream)] w-screen">
            <div className="flex flex-col">
                <p className="text-[40px] text-[var(--navy)] font-bold text-center mt-3 lg:mt-5">จองบริการ</p>
                <form onSubmit={handleSubmit} className="flex justify-center">
                    <div className="bg-[var(--cream)] w-[300px] md:w-[700px] lg:w-[1300px] md:p-[50px] lg:m-[20px] rounded-[30px] mb-5 shadow-lg">

                        <div className="p-4">
                            <div className="">
                                <label className="block text-[20px] md:text-[24px] font-semibold text-[#90CCFC]">
                                    สถานที่
                                </label>
                                <input
                                    list="browsers"
                                    id="myBrowser"
                                    name="myBrowser"
                                    className="mt-1 p-2 rounded-full w-full shadow-sm border-2 border-[var(--blue)] placeholder-gray-400 focus:outline-none focus:border-1 focus:border-blue-500  block sm:text-sm"
                                    placeholder="กรุณาระบุตำแหน่งที่อยู่ของคุณ"
                                    onChange={handleDatalistChange}
                                    value={address}

                                />
                                <datalist id="browsers" placeholder="กรุณาระบุตำแหน่งที่อยู่ของคุณ">
                                    <option value={user.address1}></option>
                                    <option value={user.address2}></option>
                                    <option value={user.address3}></option>
                                </datalist>
                                <div className='text-end font-bold mr-2 text-[var(--light-blue)] mt-2'>
                                    จำนวนตัวอักษร: {address.length}/{maxLengthAddress}
                                </div>
                            </div>

                            <div className="flex">
                                <div className=" mt-4">
                                    <label className="block text-[20px] md:text-[24px] font-semibold text-[#5AD6E3]">
                                        วันที่ / เวลา
                                    </label>

                                    <div className="flex flex-col md:flex-row">
                                        <input
                                            type="datetime-local"
                                            id="checkin"
                                            name="checkin"
                                            className="mt-1 p-2 h-[40px] rounded-full shadow-sm border-2 border-[var(--aqua)] focus:outline-none focus:border-1 focus:border-teal-400 block w-[250px] md:w-[250px] lg:w-[550px]  "
                                            value={checkInDateTime}
                                            onChange={handleCheckInChange}
                                        />
                                        <p className="md:text-[20px] font-medium pl-3 pr-3 text-[var(--navy)] mt-[12px]">ถึง</p>
                                        <input
                                            type="datetime-local"
                                            id="checkout"
                                            name="checkout"
                                            className="md:mt-1 p-2 rounded-full shadow-sm border-2 border-[var(--aqua)] h-[40px] focus:outline-none focus:border-1 focus:border-teal-400 block w-[250px] md:w-[250px] lg:w-[550px] "
                                            value={checkOutDateTime}
                                            onChange={handleCheckOutChange}
                                            min={checkInDateTime}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <label className="block text-[20px] md:text-[24px] font-semibold text-yellow-400">
                                    บริการเพิ่มเติม
                                </label>

                                <div className="flex flex-row justify-between p-1">
                                    <div className="flex flex-col">
                                        <div>
                                            <input type="checkbox" className="md:w-5 md:h-5 lg:w-7 lg:h-7"/>
                                            <span className="text-[14px] md:text-[18px] lg:text-[20px] font-medium pl-3  text-[var(--navy)]">อาบน้ำ +100 บาท </span>
                                        </div>

                                        <div className="mt-3 md:mt-0">
                                            <input type="checkbox" className="md:w-5 md:h-5 lg:w-7 lg:h-7"/>
                                            <span className="text-[14px] md:text-[18px] lg:text-[20px] font-medium pl-3  text-[var(--navy)]">ตัดเล็บ +100 บาท </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col">
                                        <div>
                                            <input type="checkbox" className="md:w-5 md:h-5 lg:w-7 lg:h-7"/>
                                            <span className="text-[14px] md:text-[18px] lg:text-[20px] font-medium pl-3  text-[var(--navy)]">พาไปเดินเล่น +50 บาท</span>
                                        </div>

                                        <div className="mt-3 md:mt-0">
                                            <input type="checkbox" className="md:w-5 md:h-5 lg:w-7 lg:h-7"/>
                                            <span className="text-[14px] md:text-[18px] lg:text-[20px] font-medium pl-3 text-[var(--navy)]">พาไปหาหมอ +100 บาท</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col">
                                        <div>
                                            <input type="checkbox" className="md:w-5 md:h-5 lg:w-7 lg:h-7"/>
                                            <span className="text-[14px] md:text-[18px] lg:text-[20px] font-medium pl-3  text-[var(--navy)]">ตัดขน +100 บาท</span>
                                        </div>

                                        <div className="mt-3 md:mt-0">
                                            <input type="checkbox" className="md:w-6 md:h-6 lg:w-7 lg:h-7"/>
                                            <span className="text-[14px] md:text-[18px] lg:text-[20px] font-medium pl-3  text-[var(--navy)]">ขนมแมว +50 บาท</span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="mt-4">
                                <label className="block text-[20px] md:text-[24px] font-semibold text-[#FF5A2D] ">
                                    โน้ตถึงพี่เลี้ยง
                                </label>
                                <textarea
                                    id="textarea"
                                    name="note"
                                    rows={4}
                                    placeholder='เช่น แมวของฉันไม่ชอบให้โดนพุง'
                                    className="mt-1 p-2 border-2 rounded-md placeholder-gray-400 shadow-sm w-full border-gray-30 border-[#FF5A2D] resize-none focus:outline-none focus:border-1 focus:border-rose-500"
                                    value={note}
                                    onChange={handleNoteChange}
                                />
                                <div className="text-end font-bold text-[#FF5A2D]">
                                    จำนวนตัวอักษร: {note.length}/{maxLengthNote}
                                </div>
                            </div>

                            <div className="mt-8">
                                <div className="border-2 bg-white rounded border-[#90CCFC] p-2">
                                    <div className="flex justify-between">
                                        <div className="text-[20px] md:text-[24px] font-semibold text-[var(--navy)] ml-4">ยอดรวม</div>
                                        <div className="text-[20px] md:text-[24px] font-semibold text-[var(--navy)] mr-4">700</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-around  mt-8">
                                <button className="bg-[#FF5A2D] hover:bg-red-500 text-white font-bold w-[100px] md:w-[200px] h-[40px] rounded-full hover:scale-105 duration-300">
                                    <p className="md:text-[20px] font-semibold my-auto">ยกเลิก</p>
                                </button>
                                <Link href="/booking/chooseCatSitter">
                                    <button className="bg-[#5AD6E3] hover:bg-cyan-500 text-white font-bold w-[100px] md:w-[200px] h-[40px] rounded-full hover:scale-105 duration-300">
                                        <p className="md:text-[20px] font-semibold my-auto">หาพี่เลี้ยง</p>
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default DateTimeInput 



