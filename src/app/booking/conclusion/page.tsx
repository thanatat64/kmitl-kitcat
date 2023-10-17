"use client"
import {IOrder} from "@/class/Order";
import Image from "next/image"
import Link from "next/link"
import {useRouter} from "next/navigation"
import React, {FormEvent, useEffect, useState} from "react"
import Swal from "sweetalert2"
import Calendar from "../../../../public/image/calendar.png"
import KitCatPromptyPay from "../../../../public/image/kitCatPromptPay.png"
import Notes from "../../../../public/image/notes.png"
import PlaceMarker from "../../../../public/image/placeMarker.png"
import UserCatSitter from "../../../../public/image/userCatSitter.png"
import {useAppContext} from "../../context/app";
import {orderStatus} from "../../data";

const Page = () => {
    const router = useRouter()
    const {user, setFetching} = useAppContext()

    const [currentOrder, setCurrentOrder] = useState<IOrder | null>(null)

    async function fetchCurrentOrder() {
        if (user.id < 0) return
        const response = await fetch("/api/order/current/owner/" + user.id)
        if (response.ok) {
            const order = await response.json()
            if (order) {
                setCurrentOrder(order)
                return
            }
        }
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (!currentOrder)
            return

        setFetching(true)
        const response = await fetch("/api/order/status/edit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                orderId: currentOrder.id,
                newStatus: orderStatus._2_PAID
            }),
        })
        setFetching(false)
        if (!response.ok) {
            const error = await response.json()

            Swal.fire({
                title: "เกิดข้อผิดพลาด!",
                text: error,
                icon: "error",
                confirmButtonText: "รับทราบ"
            })
        } else {
            Swal.fire({
                title: "ดำเนินการสำเร็จ!",
                text: "เราได้แจ้งพี่เลี้ยงแมวเรียบร้อย ท่านสามารถเช็คสถานะในหน้าถัดไปได้เลย",
                icon: "success",
                confirmButtonText: "รับทราบ"
            }).then(() => {
                router.push("/mybooking")
            })
        }
    }

    useEffect(() => {
        setFetching(true)
        fetchCurrentOrder()
        setFetching(false)
    }, [user]);

    return (
        <div className="flex flex-col bg-conclustion">
            <div className="flex justify-center">
                <div className="w-[300px] md:w-[700px] lg:w-[1300px]">
                    <div className="flex justify-center">
                        <h1 className="text-center mb-5 inline-block font-bold text-blueText mt-4">สรุปรายการ</h1>
                    </div>
                </div>
            </div>
            <div className="flex justify-center bg-conclustion mb-3">
                <div className="w-[300px] md:w-[700px] lg:w-[1300px] bg-card content-center mb-5 rounded-t-3xl rounded-b-3xl shadow-xl pb-5">
                    <div className="flex flex-col lg:flex-row lg:justify-between">
                        <div className="md:w-[680px] mx-auto">
                            <div className="flex flex-col m-4 md:m-10">

                                <div className="detailCatSitter flex flex-col md:flex-row items-center my-3">
                                    <Image className="flex w-[96px] h-[96px]" src={UserCatSitter} alt=""/>
                                    <div className="text-xl md:text-2xl font-medium text-blueText md:ml-7 mt-2">สมศรี รักสะอาด</div>
                                </div>

                                <div className="detailCatSitter flex items-center mt-3.5">
                                    <Image className="d-flex w-[32.5px] h-[32.5px] mr-6" src={PlaceMarker} alt=""/>
                                    <div className="md:text-xl font-medium mt-1 text-blueText">ลาดกระบัง 54 แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร</div>
                                </div>

                                <div className="detailCatSitter flex items-center mt-3.5">
                                    <Image className="d-flex w-[32.5px] h-[32.5px] mr-6" src={Calendar} alt=""/>
                                    <div className="md:text-xl font-medium mt-1 text-blueText">01 ต.ค. 2023 07:00 ถึง 01 ต.ค. 2023 09:00</div>
                                </div>

                                <div className="detailCatSitter flex items-center mt-3.5">
                                    <Image className="d-flex w-[32.5px] h-[32.5px] mr-6" src={Notes} alt=""/>
                                    <div className="md:text-xl font-medium mt-1 text-blueText">โน้ตถึงพี่เลี้ยง:</div>
                                </div>

                                <div className="detailCatSitter flex items-center mt-1">
                                    <div className="md:text-xl font-medium ml-[55px] mr-3 text-blueText mb-[15px]">น้องชื่อจ้มจ้ม ชอบให้ลูบหัว</div>
                                </div>

                                <div className="detailCatSitter flex justify-between mt-2">
                                    <div className="md:text-xl font-medium w-[120px] text-blueText">2 ชั่วโมง</div>
                                    <div className="md:text-xl font-medium w-[120px] text-right text-blueText">400 บาท</div>
                                </div>
                                <hr className="h-px border-1"></hr>

                                <div className="detailCatSitter flex justify-between mt-px">
                                    <div className="md:text-xl font-medium w-[120px] text-blueText">อาบนํ้า</div>
                                    <div className="md:text-xl font-medium w-[120px] text-right text-blueText">100 บาท</div>
                                </div>
                                <hr className="h-px border-1"></hr>

                                <div className="detailCatSitter flex justify-between mt-px">
                                    <div className="md:text-xl font-medium w-[120px] text-blueText">ตัดเล็บ</div>
                                    <div className="md:text-xl font-medium w-[120px] text-right text-blueText">100 บาท</div>
                                </div>
                                <hr className="h-px border-1"></hr>

                                <div className="detailCatSitter flex justify-between mt-px">
                                    <div className="md:text-xl font-medium w-[120px] text-blueText">ตัดขน</div>
                                    <div className="md:text-xl font-medium w-[120px] text-right text-blueText">100 บาท</div>
                                </div>
                                <hr className="h-px border-1"></hr>

                                <div className="detailCatSitter flex justify-between mt-px">
                                    <div className="md:text-xl font-medium w-[120px] text-blueText">ยอดรวม</div>
                                    <div className="md:text-xl font-medium w-[120px] text-right text-blueText">1700 บาท</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-backgroud w-[300px] h-[400px] md:w-[480px] md:h-[600px] mt-[25px] flex justify-center mx-auto my-auto">
                            <Image className="d-flex w-10/12 h-10/12 my-auto md:w-[372px] md:h-[462px] mt-[74px] rounded-t-3xl rounded-b-3xl" src={KitCatPromptyPay} alt=""/>
                        </div>
                    </div>
                    <div className="flex items-center justify-center bg-backgroud mt-4">
                        <div id="bottom" className="flex flex-row">
                            <Link className="w-[210px] h-[43px] text-xl font-medium mr-3 md:mr-[300px] rounded-full text-blueText" href="/booking/chooseCatSitter">ย้อนกลับ</Link>
                            <form onSubmit={handleSubmit}>
                                <button type="submit" className="w-[160px] md:w-[210px] h-[43px] text-[20px] font-bold shadow-2xl  hover:bg-cyan-500 bg-accept-100 rounded-full text-white hover:scale-105 duration-300">ยืนยันการจอง</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page 
