"use client"

import {IOrder} from "@/class/Order";
import BookingHistory from "@/components/pages/myBooking/BookingHistory"
import SeeOrder from "@/components/pages/myOrder/SeeOrder"
import React, {useEffect, useState} from "react"
import Swal from "sweetalert2"
import {useAppContext} from "../context/app";

const page: React.FC = () => {
    const {user, setFetching} = useAppContext()

    const [currentOrder, setCurrentOrder] = useState<IOrder | null>(null)
    const [orders, setOrders] = useState<IOrder[]>([])

    async function fetchOrders() {
        if (user.id < 0) return
        const response = await fetch("/api/order/getall/catsitter/" + user.id)
        if (response.ok) {
            const orders = await response.json()
            setOrders(orders)
            return
        }
        setFetching(false)
    }

    async function fetchCurrentOrder() {
        if (user.id < 0) return
        const response = await fetch("/api/order/current/catsitter/" + user.id)
        if (response.ok) {
            const order = await response.json()
            if (order) {
                setCurrentOrder(order)
                return
            }
        }
        setFetching(false)
    }
    useEffect(() => {
        setFetching(true)
        fetchCurrentOrder()
        fetchOrders()
        setFetching(false)
    }, [user]);
    useEffect(() => {
        if (currentOrder?.status === 6 || currentOrder === null)
            toggleContent2()
    }, [currentOrder]);

    const [showContent1, setShowContent1] = useState(true)
    const [showContent2, setShowContent2] = useState(false)
    const [button1Color, setButton1Color] = useState("bg-[var(--cream)]")
    const [button2Color, setButton2Color] = useState("bg-[#F0E6DC]")
    const [text1Color, setText1Color] = useState("text-[var(--light-blue)]")
    const [text2Color, setText2Color] = useState("text-[var(--navy)]")

    async function handleChangeStatus(status: number, message: string) {
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
                newStatus: status
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
            setCurrentOrder({...currentOrder, status: status})
            if (status === 6)
                toggleContent2()
            Swal.fire({
                title: "ดำเนินการสำเร็จ!",
                text: message,
                icon: "success",
                confirmButtonText: "รับทราบ"
            })
        }
    }

    const toggleContent1 = () => {
        if(currentOrder?.status === 6 || currentOrder === null) {
            Swal.fire({
                title: "เกิดข้อผิดพลาด!",
                text: "ยังไม่มีออเดอร์ตอนนี้",
                icon: "error",
                confirmButtonText: "รับทราบ"
            })
            return
        }
        setShowContent1(true)
        setShowContent2(false)
        setButton1Color("bg-[var(--cream)]")
        setButton2Color("bg-[#F0E6DC]")  // Reset button2Color to blue when toggling Content1 ("bg-[#F0E6DC]")
        setText1Color("text-[var(--light-blue)]")
        setText2Color("text-[var(--navy)]")
    }

    const toggleContent2 = () => {
        setShowContent1(false)
        setShowContent2(true)
        setButton1Color("bg-[#F0E6DC]")
        setButton2Color("bg-[var(--cream)]")  // Set button2Color to red when toggling Content2
        setText1Color("text-[var(--navy)]")
        setText2Color("text-[var(--yellow)]")
    }

    return (

        <div className="bg-[var(--white-cream)] pb-5">
            <div className="w-[300px] md:w-[700px] lg:w-[1300px] mx-auto">
                <div className="">
                    <div className="text-center font-bold text-4xl text-[var(--navy)] pt-[50px] pb-6">
                        ออเดอร์ของฉัน
                    </div>
                    <div className="flex flex-row mt-5">
                        <button
                            onClick={toggleContent1}
                            className={`${text1Color} ${button1Color} w-1/2 md:w-auto hover:text-[var(--light-blue)] text-[16px] md:text-xl font-medium pt-[21px] pb-2.5 px-4 rounded-t-[20px] shadow-inner`}
                        >
                            สถานะออเดอร์
                        </button>
                        <button
                            onClick={toggleContent2}
                            className={`${text2Color} ${button2Color} w-1/2 md:w-auto hover:text-[var(--yellow)] text-[16px] md:text-xl font-medium pt-[21px] pb-2.5 px-4 rounded-t-[20px] shadow-inner`} //hover:bg-blue-600 hover:text-red-400
                        >
                            ประวัติออเดอร์
                        </button>
                    </div>
                    {showContent1 && currentOrder && currentOrder.status != 6 && <SeeOrder handleChangeStatus={handleChangeStatus} currentOrder={currentOrder}/>}
                    {(showContent2 || (currentOrder && currentOrder.status) == 6) && <BookingHistory orders={orders} isCatSitter={true}/>}
                </div>
            </div>
        </div>
    )
}

export default page 
