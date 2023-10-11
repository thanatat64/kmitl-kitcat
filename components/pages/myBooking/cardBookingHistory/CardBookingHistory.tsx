"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import Link from "next/link";
import Image from "next/image";
import PlaceMarker from "../../../../public/image/placeMarker.png";
import UserCatSitter from "../../../../public/image/userCatSitter.png";

interface CardBookingHistoryProps {
    name: string;
    rating: number;
    heart: number;
    review: number;
    detail: string;
    color: string;
    isButton?: number;
}

const CardBookingHistory: React.FC<CardBookingHistoryProps> = ({
    name,
    rating,
    review,
    heart,
    detail,
    color,
    isButton,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <div className={`flex bg-white rounded-[20px]`}>
                <Image
                    className="w-[143px] mt-[31px] mb-[34px] mx-[54px]"
                    src={UserCatSitter}
                    alt=""
                />
                <div className="flex flex-col gap-y-2 mt-[31px] mb-[32px] mr-[50px]">
                    <div className="text-[15px] font-medium mt-1 text-[#00095866]">
                        01 ต.ค. 2023 07:00 ถึง 01 ต.ค. 2023 09:00
                    </div>
                    <div className="text-xl font-medium text-[var(--navy)]">สมศรี รักสะอาด</div>
                    <div className="flex">
                        <Image className="w-[32.5px] h-[32.5px] mr-3" src={PlaceMarker} alt="" />
                        <div className="text-xl font-medium mt-1 text-[var(--navy)]">
                            ลาดกระบัง 54 แขวงลาดกระบัง เขตลาดกระ...
                        </div>
                    </div>
                    <div className="text-xl font-semibold text-[var(--aqua)]">
                        ดำเนินการเสร็จสิ้นแล้ว
                    </div>
                </div>
                <div className="mx-[54px]">
                    <div className="text-[var(--navy)] text-xl font-semibold mt-[65px] mb-[25px]">700.00 บาท</div>
                    <button
                        onClick={openModal}
                        className={`text-xl font-medium bg-[var(--aqua)] hover:bg-red-400 text-[var(--navy)] py-2 px-4 rounded-[50px]`}
                    >
                        รายละเอียดเพิ่มเติม
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardBookingHistory;
