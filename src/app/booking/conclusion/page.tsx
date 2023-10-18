"use client"
import {IOrder} from "@/class/Order";
import PictureDisplay from "@/components/other/PictureDisplay";
import Image from "next/image"
import Link from "next/link"
import {useRouter} from "next/navigation"
import React, {FormEvent, useEffect, useState} from "react"
import Swal from "sweetalert2"
import Calendar from "../../../../public/image/calendar.png"
import KitCatPromptyPay from "../../../../public/image/kitCatPromptPay.png"
import Notes from "../../../../public/image/notes.png"
import PlaceMarker from "../../../../public/image/placeMarker.png"
import {useAppContext} from "../../context/app";
import {orderStatus, priceData} from "../../data";

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

    const calculateDurationPoint = (dateStart: any, dateEnd: any) => {
        if (dateStart === dateEnd)
            return {price: 0, msg: 0}
        const durationInHours = Math.ceil((dateEnd.getTime() - dateStart.getTime()) / 3600000);
        const durationInDays = Math.ceil(durationInHours / 24);

        let firstEntry = null
        if (durationInHours <= 8) {
            for (const entry of priceData.hourlyPricing) {
                firstEntry = firstEntry ?? entry
                if (durationInHours == entry.hours)
                    return {price: entry.cost, msg: `${durationInDays} ชั่วโมง`}
            }
            return {price: firstEntry?.cost ?? 0, hour: `${durationInDays} ชั่วโมง`}
        } else if (durationInDays <= 5) {
            for (const entry of priceData.dailyPricing) {
                firstEntry = firstEntry ?? entry
                if (durationInDays == entry.days)
                    return {price: entry.cost, msg: `${durationInDays} วัน`}
            }
            return {price: firstEntry?.cost ?? 0, msg: `${durationInDays} วัน`}
        }
        return {price: 0, msg: 0}
    }

    const additionalOptions = currentOrder?.additional.split(",").map((id) => {
        const option: any = priceData.additionalOptions.find((option: any) => option.id === parseInt(id));
        if (option) {
            return option;
        }
        return {id, name: "Unknown Option", price: 0};
    });

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
                                    <PictureDisplay picture={currentOrder?.catsitter?.picture ?? ""} size={6} isCircle={true}/>
                                    <div className="text-xl md:text-2xl font-medium text-blueText md:ml-7 mt-2">{currentOrder?.catsitter?.name ?? "กำลังดึงข้อมูล..."}</div>
                                </div>

                                <div className="detailCatSitter flex items-center mt-3.5">
                                    <Image className="d-flex w-[32.5px] h-[32.5px] mr-6" src={PlaceMarker} alt=""/>
                                    <div className="md:text-xl font-medium mt-1 text-blueText">{currentOrder?.address ?? "กำลังดึงข้อมูล..."}</div>
                                </div>

                                <div className="detailCatSitter flex items-center mt-3.5">
                                    <Image className="d-flex w-[32.5px] h-[32.5px] mr-6" src={Calendar} alt=""/>
                                    <div className="md:text-xl font-medium mt-1 text-blueText">{new Date(currentOrder?.dateStart ?? "").toLocaleDateString('th-TH')} {new Date(currentOrder?.dateStart ?? "").toLocaleTimeString('th-TH')} ถึง {new Date(currentOrder?.dateEnd ?? "").toLocaleDateString('th-TH')} {new Date(currentOrder?.dateEnd ?? "").toLocaleTimeString('th-TH')}</div>
                                </div>

                                <div className="detailCatSitter flex items-center mt-3.5">
                                    <Image className="d-flex w-[32.5px] h-[32.5px] mr-6" src={Notes} alt=""/>
                                    <div className="md:text-xl font-medium mt-1 text-blueText">โน้ตถึงพี่เลี้ยง:</div>
                                </div>

                                <div className="detailCatSitter flex items-center mt-1">
                                    <div className="md:text-xl font-medium ml-[55px] mr-3 text-blueText mb-[15px]">{(currentOrder?.note ?? "-") === "" ? "-" : currentOrder?.note ?? "-"}</div>
                                </div>

                                <div className="detailCatSitter flex justify-between mt-2">
                                    <div className="md:text-xl font-medium w-[120px] text-blueText">{calculateDurationPoint(new Date(currentOrder?.dateStart ?? ""), new Date(currentOrder?.dateEnd ?? "")).msg}</div>
                                    <div className="md:text-xl font-medium w-[120px] text-right text-blueText">{calculateDurationPoint(new Date(currentOrder?.dateStart ?? ""), new Date(currentOrder?.dateEnd ?? "")).price} บาท</div>
                                </div>
                                <hr/>

                                {additionalOptions?.map((item) => (
                                    <div key={item.id} className="detailCatSitter flex justify-between mt-2">
                                        <div className="md:text-xl font-medium w-[120px] text-blueText">{item.name}</div>
                                        <div className="md:text-xl font-medium w-[120px] text-right text-blueText">{item.price} บาท</div>
                                    </div>
                                ))}
                                <hr/>

                                <div className="detailCatSitter flex justify-between">
                                    <div className="md:text-xl font-medium text-blueText">ยอดรวม</div>
                                    <div className="md:text-xl text-nowrap font-medium text-right text-blueText">{currentOrder?.total ?? "กำลังประมวลผล..."} บาท</div>
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
