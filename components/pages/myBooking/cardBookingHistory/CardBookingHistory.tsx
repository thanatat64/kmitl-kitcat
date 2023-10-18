"use client";

import {IOrder} from "@/class/Order";
import PictureDisplay from "@/components/other/PictureDisplay";
import React, {useState} from "react";
import {FiChevronRight} from "react-icons/fi";
import Modal from "react-modal";
import BookingModal from "../BookingModal/BookingModal";

interface CardBookingHistoryProps {
    order: IOrder,
    isCatSitter: boolean
}

const CardBookingHistory: React.FC<CardBookingHistoryProps> = ({order, isCatSitter}) => {
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
                <div className="mx-auto  md:my-auto md:mx-3 mt-4 md:mt-0 me-4">
                    <PictureDisplay picture={order.picture} size={11} isCircle={false}/>
                </div>
                <div className="flex flex-col mt-[31px] mx-2">
                    <div className="md:text-xl font-medium mt-1 text-blueText">{new Date(order?.dateStart ?? "").toLocaleDateString('th-TH')} {new Date(order?.dateStart ?? "").toLocaleTimeString('th-TH')} ถึง {new Date(order?.dateEnd ?? "").toLocaleDateString('th-TH')} {new Date(order?.dateEnd ?? "").toLocaleTimeString('th-TH')}</div>
                    <div className="text-[22px] md:text-xl font-medium text-[var(--navy)] text-center mt-2">
                        <p className="md:text-left">{isCatSitter ? order.owner.name : order.catsitter.name}</p>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <div className="font-medium  lg:mt-1 text-[var(--navy)] text-center">
                            <p className="md:text-left">{order.address}</p>
                        </div>
                    </div>

                    <div className="text-xl font-semibold text-[var(--aqua)] text-center">
                        <p className="md:text-left">ดำเนินการเสร็จสิ้นแล้ว</p>
                    </div>
                </div>
                <div className="md:pr-9">
                    <div className="text-[var(--navy)] text-xl font-semibold md:mt-[65px] mb-[27px] text-center">
                        <p className="md:text-right">{order.total} บาท</p>
                    </div>

                    <div className="flex justify-center pb-5">
                        <button
                            onClick={openModal}
                            className={`flex lg:text-xl font-medium bg-[#5AD6E380] hover:bg-[var(--aqua)] text-[var(--navy)] hover:text-white rounded-[50px] py-2 pl-4 pr-4 lg:pr-2 hover:scale-105 duration-300`}
                        >
                            รายละเอียดเพิ่มเติม
                            <div className="hidden lg:block">
                                <FiChevronRight size={25}/>
                            </div>
                        </button>
                    </div>
                </div>
                <Modal ariaHideApp={false} isOpen={isModalOpen} className="z-10">
                    <BookingModal currentOrder={order} isOpen={isModalOpen} onClose={closeModal}/>
                </Modal>
            </div>
        </div>
    );
};

export default CardBookingHistory;
