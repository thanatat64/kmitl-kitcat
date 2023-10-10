"use client";

import React, { useState } from "react";
<<<<<<< HEAD
import Modal from "react-modal";

const page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex justify-center ">
            <div className="flex flex-col">
                <h1>การจองของฉัน</h1>
                <h3 className="text-center">รอการยืนยัน</h3>
                <button
                    onClick={openModal}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    ดูรายละเอียด
                </button>
                <Modal
                    isOpen={isModalOpen}
                    className="Modal"
                    overlayClassName="Overlay"
                >
                    <div className="bg-green-200 p-4 rounded flex justify-center">
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-bold mb-4 text-center">
                                ดึงรายละเอียดมาใส่ให้หน่อย อิอิ
                            </h2>
                            <h3 className="text-2xl  mb-4 text-center font-light">
                                Note! จริงๆแล้วหน้านี้คือ การจองของฉัน ใน navbar
                                แต่ยังทำให้มัน active ไม่ได้
                            </h3>
                            <button
                                onClick={closeModal}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </Modal>
=======
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
>>>>>>> be147321da56695db36b6955fa7cc48755f4d802
            </div>
        </div>
    );
};

export default page;
