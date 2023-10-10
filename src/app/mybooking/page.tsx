"use client";

import React, { useState } from "react";
import Mystatus from "@/components/pages/myBooking/MyStatus";
import BookingHistory from "@/components/pages/myBooking/BookingHistory";

const page: React.FC = () => {
    const [showContent1, setShowContent1] = useState(true);
    const [showContent2, setShowContent2] = useState(false);
    const [button2Color, setButton2Color] = useState("bg-blue-500");

    const toggleContent1 = () => {
        setShowContent1(true);
        setShowContent2(false);
        setButton2Color("bg-blue-500"); // Reset button2Color to blue when toggling Content1
    };

    const toggleContent2 = () => {
        setShowContent1(false);
        setShowContent2(true);
        setButton2Color("bg-red-400"); // Set button2Color to red when toggling Content2
    };

    return (
        <div>
            <div className="min-h-screen">
                <div className="text-center font-bold text-4xl text-[var(--navy)] mt-9 mb-6">
                    การจองของฉัน
                </div>
                <button
                    onClick={toggleContent1}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-t-lg"
                >
                    Toggle Content1
                </button>
                <button
                    onClick={toggleContent2}
                    className={`text-white py-2 px-4 rounded-t-lg ${button2Color}`}
                >
                    Toggle Content2
                </button>
                {showContent1 && <Mystatus />}
                {showContent2 && <BookingHistory />}
            </div>
        </div>
    );
};

export default page;
