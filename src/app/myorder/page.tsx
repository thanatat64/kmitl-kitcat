"use client" 

import React, { useState } from "react" 
import SeeOrder from "@/components/pages/myOrder/SeeOrder" 
import BookingHistory from "@/components/pages/myBooking/BookingHistory" 

const page: React.FC = () => {
    const [showContent1, setShowContent1] = useState(true) 
    const [showContent2, setShowContent2] = useState(false) 
    const [button1Color, setButton1Color] = useState("bg-[var(--cream)]") 
    const [button2Color, setButton2Color] = useState("bg-[#F0E6DC]") 
    const [text1Color, setText1Color] = useState("text-[var(--light-blue)]") 
    const [text2Color, setText2Color] = useState("text-[var(--navy)]") 

    const toggleContent1 = () => {
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
        <div>
            <div className="min-h-screen bg-[var(--white-cream)] px-[111px] pb-[50px]">
                <div className="text-center font-bold text-4xl text-[var(--navy)] pt-9 pb-6">
                    ออเดอร์ของฉัน
                </div>
                <button
                    onClick={toggleContent1}
                    className={`${text1Color} ${button1Color} hover:text-[var(--light-blue)] text-xl font-medium pt-[21px] pb-2.5 px-4 rounded-t-[20px] shadow-[0_-1px_10px_0_rgba(0,0,0,0.15)]`}
                >
                    สถานะออเดอร์
                </button>
                <button
                    onClick={toggleContent2}
                    className={`${text2Color} ${button2Color} hover:text-[var(--yellow)] text-xl font-medium pt-[21px] pb-2.5 px-4 rounded-t-[20px] shadow-[2px_-1px_10px_0_rgba(0,0,0,0.15)]`} //hover:bg-blue-600 hover:text-red-400
                >
                    ประวัติออเดอร์
                </button>
                {showContent1 && <SeeOrder />}
                {showContent2 && <BookingHistory />}
            </div>
        </div>
    ) 
} 

export default page 
