"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import Link from "next/link";
import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";
import PlaceMarker from "../../../../public/image/placeMarker.png";
import UserCatSitter from "../../../../public/image/userCatSitter.png";
import BookingModal from "../BookingModal/BookingModal";

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
        <div className="scale-75 md:scale-90 lg:scale-100">
            <div className={`w-auto h-auto flex flex-col md:flex-row bg-white rounded-[20px] md:pl-7`}>
                <Image
                    className="w-[143px] h-[143px] mx-auto  md:my-auto md:mx-3 mt-5 md:mt-0"
                    src={UserCatSitter}
                    alt=""
                />
                <div className="flex flex-col  mt-[31px] mb-[32px] mx-2">
                    <div className="hidden md:block text-[15px] font-medium mt-1 text-[#00095866] w-[160px] md:w-full">
                        01 ต.ค. 2023 07:00 ถึง 01 ต.ค. 2023 09:00
                    </div>
                    <div className="block md:hidden text-[20px] font-medium mx-auto text-center text-[#00095866] w-[200px] md:w-full">
                        01 ต.ค. 2023 07:00 <br />ถึง<br /> 01 ต.ค. 2023 09:00
                    </div>
                    <div className="text-[22px] md:text-xl font-medium text-[var(--navy)] text-center mt-2">
                        <p className="md:text-left">สมศรี รักสะอาด</p>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <Image className="mx-auto w-[32.5px] h-[32.5px] mr-3 mb-3" src={PlaceMarker} alt="" />
                        <div className="text-xl font-medium  lg:mt-1 text-[var(--navy)] text-center">
                            <p className="md:text-left">ลาดกระบัง 54 แขวงลาดกระบัง เขตลาดกระ...</p>
                        </div>
                    </div>

                    <div className="text-xl font-semibold text-[var(--aqua)] text-center">
                        <p className="md:text-left">ดำเนินการเสร็จสิ้นแล้ว</p>
                    </div>
                </div>
                <div className="md:pr-9">
                    <div className="text-[var(--navy)] text-xl font-semibold md:mt-[65px] mb-[27px] text-center">
                        <p className="md:text-right">700.00 บาท</p>
                    </div>

                    <div className="flex justify-center pb-5">
                        <button
                            onClick={openModal}
                            className={`flex lg:text-xl font-medium bg-[#5AD6E380] hover:bg-[var(--aqua)] text-[var(--navy)] hover:text-white rounded-[50px] py-2 pl-4 pr-4 lg:pr-2 hover:scale-105 duration-300`}
                        >
                            รายละเอียดเพิ่มเติม
                            <div className="hidden lg:block">
                                <FiChevronRight size={25} />
                            </div>
                        </button>
                    </div>
                </div>
                <Modal isOpen={isModalOpen} className="z-10">
                    <BookingModal isOpen={isModalOpen} onClose={closeModal} />
                </Modal>
            </div>
        </div>
    );
};

export default CardBookingHistory;
