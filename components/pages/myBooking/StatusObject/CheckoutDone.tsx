'use client'

import React, { useState } from "react";
import Modal from "react-modal"
import Image from 'next/image'
import check from '@/image/check.png'
import finised from '@/image/finish.png'
import ReviewModal from "../ReviewModal/ReviewModal";

const CheckoutDone: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="flex flex-col lg:flex-row justify-center h-[20rem] mt-[60px] md:mt-[120px] lg:mt-0">
            <div className="flex flex-col justify-center h-48 lg:h-auto">
                <p className="hidden lg:block rotate-90 lg:rotate-0 w-48 h-1 mx-auto lg:my-4 bg-[var(--light-red)] pb-[0.5rem]"></p>
            </div>
            <div className="flex flex-col items-center lg:mt-4">
                <h3 className="lmt-3 font-extrabold">เสร็จสิ้น</h3>
                <div className='w-[12.5rem] h-[12.5rem] rounded-full bg-[var(--light-red)] flex justify-center items-center'>
                    <Image width={117} src={check} alt="check" />
                </div>
                <button onClick={openModal} className="bg-neutral-50 hover:bg-[var(--light-red)] text-black font-bold py-2 px-4 mt-3 rounded-[50px] w-[11rem] border-2 border-[var(--light-red)] hover:border-white drop-shadow-lg">ให้คะแนนพี่เลี้ยง</button>
            </div>

            <Modal isOpen={isModalOpen} className="z-10">
                <ReviewModal isOpen={isModalOpen} onClose={closeModal} />
            </Modal>
        </div>
    );
}

export default CheckoutDone;