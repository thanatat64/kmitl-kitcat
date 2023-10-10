"use client";

import React, { useState } from "react";
import Mystatus from "@/components/pages/myBooking/MyStatus";
import BookingHistory from "@/components/pages/myBooking/BookingHistory";

const page: React.FC = () => {
    const [showContent1, setShowContent1] = useState(true);
    const [showContent2, setShowContent2] = useState(false);

    const toggleContent1 = () => {
        setShowContent1(true);
        setShowContent2(false);
    };

    const toggleContent2 = () => {
        setShowContent1(false);
        setShowContent2(true);
    };

    return (
        <div>
            <div className="min-h-screen ">
                <button
                    onClick={toggleContent1}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                    Toggle Content1
                </button>
                <button
                    onClick={toggleContent2}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
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
