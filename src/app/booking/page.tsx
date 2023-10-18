"use client"

import {IOrder} from "@/class/Order";
import Link from "next/link"
import {useRouter} from "next/navigation"
import React, {FormEvent, useEffect, useState} from "react"
import Swal from "sweetalert2"
import {useAppContext} from "../context/app";
import {calculateTotalPrice, orderStatus, priceData} from "../data";

const Page: React.FC = () => {
    const maxLengthNote = 250
    const maxLengthAddress = 100

    const {user, authentication, setFetching} = useAppContext()

    const [currentOrder, setCurrentOrder] = useState<IOrder | null>(null)
    async function fetchCurrentOrder() {
        if (user.id < 0) return
        setFetching(true)
        const response = await fetch("/api/order/current/owner/" + user.id)
        if (response.ok) {
            const order = await response.json()
            if (order) {
                setFormData({
                    ...formData,
                    address: "กำลังดึงข้อมูล...",
                    note: "กำลังดึงข้อมูล...",
                })
                setCurrentOrder(order)
                return
            }
        }
        setFetching(false)
    }

    const router = useRouter()

    const [isLoading, setLoading] = useState<boolean>(false)

    const [formData, setFormData] = useState({
        id: -1,
        address: "",
        note: "",
        additional: [],
        datestart: "",
        dateend: "",
        userId: user.id,
        catsitterId: -1,
    })

    useEffect(() => {
        authentication()
        setFormData({...formData, userId: user.id})
        fetchCurrentOrder()
    }, [user]);

    useEffect(() => {
        if (currentOrder) {
            if (currentOrder.status !== orderStatus._1_PENDING && currentOrder.status !== orderStatus._6_CLOSED) {
                Swal.fire({
                    title: "เกิดข้อผิดพลาด!",
                    text: "ท่านได้จองพี่เลี้ยงแมวไว้แล้ว ไม่สามารถจองเพิ่มได้",
                    icon: "error",
                    confirmButtonText: "รับทราบ"
                }).then(() => {
                    router.push("/mybooking")
                })
                return
            }
            setSelectedOptions(currentOrder.additional.split(",").map((str) => parseInt(str)))
            setFormData({
                ...formData,
                id: currentOrder.id,
                address: currentOrder.address,
                note: currentOrder.note,
                additional: currentOrder.additional.split(",").map((str) => parseInt(str)) as never[],
                datestart: currentOrder.dateStart,
                dateend: currentOrder.dateEnd,
                userId: currentOrder.owner.id,
                catsitterId: currentOrder.catsitter?.id ?? -1
            })
        }
        setFetching(false)
    }, [currentOrder]);

    const [selectedOptions, setSelectedOptions] = useState<number[]>([])

    const handleChange = (e: React.ChangeEvent<any>) => {
        const {name, value} = e.target
        const maxLength = parseInt(e.target.getAttribute('data-max-length') ?? "100")

        let dateStart = null
        let dateEnd = null
        let dateNow = new Date()
        if (name === "datestart") {
            dateStart = new Date(value)
            if (formData.dateend != "")
                dateEnd = new Date(formData.dateend)
            if (dateStart < dateNow) {
                Swal.fire({
                    title: "คำเตือน!",
                    text: "ไม่สามารถเลือกวันที่จากอดีตได้",
                    icon: "warning",
                    confirmButtonText: "รับทราบ"
                })
                return
            }
        }
        if (name === "dateend") {
            if (formData.datestart != "")
                dateStart = new Date(formData.datestart)
            dateEnd = new Date(value)
            if (dateEnd < dateNow) {
                Swal.fire({
                    title: "คำเตือน!",
                    text: "ไม่สามารถเลือกวันที่จากอดีตได้",
                    icon: "warning",
                    confirmButtonText: "รับทราบ"
                })
                return
            }
        }
        if (dateStart && dateEnd) {
            if (((dateEnd.getTime() - dateStart.getTime()) / 3600000) < 1) {
                e.target.blur()
                Swal.fire({
                    title: "คำเตือน!",
                    text: "ไม่สามารถเลือกช่วงเวลาน้อยกว่า 1 ชั่วโมงได้",
                    icon: "warning",
                    confirmButtonText: "รับทราบ"
                })
                return
            }
            const durationInHours = Math.ceil((dateEnd.getTime() - dateStart.getTime()) / 3600000);
            const durationInDays = Math.ceil(durationInHours / 24);
            if (durationInHours < 0) {
                e.target.blur()
                Swal.fire({
                    title: "คำเตือน!",
                    text: "วันและเวลาที่เริ่มต้นต้องมาก่อนวันและเวลาที่สิ้นสุด",
                    icon: "warning",
                    confirmButtonText: "รับทราบ"
                })
                return
            } else if (durationInHours < 1) {
                e.target.blur()
                Swal.fire({
                    title: "คำเตือน!",
                    text: "ไม่สามารถเลือกช่วงเวลาน้อยกว่า 1 ชั่วโมงได้",
                    icon: "warning",
                    confirmButtonText: "รับทราบ"
                })
                return
            } else if (durationInDays > 5) {
                e.target.blur()
                Swal.fire({
                    title: "คำเตือน!",
                    text: "ไม่สามารถเลือกช่วงเวลาเกิน 5 วันได้",
                    icon: "warning",
                    confirmButtonText: "รับทราบ"
                })
                return
            }
        }

        if (value.length <= maxLength || name === "datestart" || name === "dateend") {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }))
        } else {
            Swal.fire({
                title: "คำเตือน!",
                text: "โปรดใส่ตัวอักษรไม่เกินจำนวนที่กำหนด",
                icon: "warning",
                confirmButtonText: "รับทราบ"
            })
        }
    }

    const handleChangeCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const optionId = parseInt(e.target.name.replace('additional', ''));

        if (e.target.checked) {
            setSelectedOptions([...selectedOptions, optionId]);
        } else {
            setSelectedOptions(selectedOptions.filter((id) => id !== optionId));
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
            body: JSON.stringify({...formData, additional: selectedOptions as any}),
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
                text: "กรุณาเลือกพี่เลี้ยงแมวที่คุณถูกใจ",
                icon: "success",
                confirmButtonText: "รับทราบ"
            }).then(() => {
                router.push("/booking/chooseCatSitter")
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
                                    list="useraddresses"
                                    id="address"
                                    name="address"
                                    className="mt-1 p-2 rounded-full w-full shadow-sm border-2 border-[var(--blue)] placeholder-gray-400 focus:outline-none focus:border-1 focus:border-blue-500  block sm:text-sm"
                                    placeholder="กรุณาระบุตำแหน่งที่อยู่ของคุณ"
                                    onChange={handleChange}
                                    value={formData.address}
                                    data-max-length={maxLengthAddress}
                                />
                                <datalist id="useraddresses" placeholder="กรุณาระบุตำแหน่งที่อยู่ของคุณ">
                                    <option key="address1" value={user.address1}></option>
                                    <option key="address2" value={user.address2}></option>
                                    <option key="address3" value={user.address3}></option>
                                </datalist>
                                <div className='text-end font-bold mr-2 text-[var(--light-blue)] mt-2'>
                                    จำนวนตัวอักษร: {formData.address.length}/{maxLengthAddress}
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
                                            id="datestart"
                                            name="datestart"
                                            className="mt-1 p-2 h-[40px] rounded-full shadow-sm border-2 border-[var(--aqua)] focus:outline-none focus:border-1 focus:border-teal-400 block w-[250px] md:w-[250px] lg:w-[550px]  "
                                            value={formData.datestart}
                                            onChange={handleChange}
                                        />
                                        <p className="md:text-[20px] font-medium pl-3 pr-3 text-[var(--navy)] mt-[12px]">ถึง</p>
                                        <input
                                            type="datetime-local"
                                            id="dateend"
                                            name="dateend"
                                            className="md:mt-1 p-2 rounded-full shadow-sm border-2 border-[var(--aqua)] h-[40px] focus:outline-none focus:border-1 focus:border-teal-400 block w-[250px] md:w-[250px] lg:w-[550px] "
                                            value={formData.dateend}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label className="block text-[20px] md:text-[24px] font-semibold text-yellow-400">
                                    บริการเพิ่มเติม
                                </label>
                                <div className="row p-1 gap-3">
                                    {priceData.additionalOptions.map((option) => (
                                        <div key={`additional-${option.id}`} className="col text-nowrap flex items-center">
                                            <input type="checkbox" onChange={handleChangeCheckBox} data-price={option.price} name={`additional${option.id}`} checked={selectedOptions.includes(option.id as never)} className="md:w-5 md:h-5 lg:w-7 lg:h-7"/>
                                            <span className="text-nowrap text-[14px] md:text-[18px] lg:text-[20px] font-medium pl-3 text-[var(--navy)]">{option.name} +{option.price} บาท </span>
                                        </div>
                                    ))}
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
                                    value={formData.note}
                                    onChange={handleChange}
                                    data-max-length={maxLengthNote}
                                ></textarea>
                                <div className="text-end font-bold text-[#FF5A2D]">
                                    จำนวนตัวอักษร: {formData.note.length}/{maxLengthNote}
                                </div>
                            </div>
                            <div className="mt-8">
                                <div className="border-2 bg-white rounded border-[#90CCFC] p-2">
                                    <div className="flex justify-between">
                                        <div className="text-[20px] md:text-[24px] font-semibold text-[var(--navy)] ml-4">ยอดรวม</div>
                                        <div className="text-[20px] md:text-[24px] font-semibold text-[var(--navy)] mr-4">{calculateTotalPrice(selectedOptions, new Date(formData.datestart), new Date(formData.dateend))}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-around  mt-8">
                                <Link href="/">
                                    <button className="bg-[#FF5A2D] hover:bg-red-500 text-white font-bold w-[100px] md:w-[200px] h-[40px] rounded-full hover:scale-105 duration-300">
                                        <p className="md:text-[20px] font-semibold my-auto">ยกเลิก</p>
                                    </button>
                                </Link>
                                {!isLoading ?
                                    <button className="bg-[#5AD6E3] hover:bg-cyan-500 text-white font-bold w-[100px] md:w-[200px] h-[40px] rounded-full hover:scale-105 duration-300" type="submit">ตรวจสอบข้อมูล</button> :
                                    <button className="bg-[#5AD6E3] hover:bg-cyan-500 text-white font-bold w-[100px] md:w-[200px] h-[40px] rounded-full hover:scale-105 duration-300 loading" disabled type="submit">กำลังดำเนินการ...</button>
                                }
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Page