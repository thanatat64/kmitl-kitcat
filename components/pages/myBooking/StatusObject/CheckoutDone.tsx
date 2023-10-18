'use client'

import {IOrder} from "@/class/Order";
import PictureDisplay from "@/components/other/PictureDisplay";
import check from '@/image/check.png'
import Image from 'next/image'
import React, {useState} from "react"
import {IoClose} from "react-icons/io5";
import Modal from "react-modal"
import ReviewModal from "../ReviewModal/ReviewModal";

interface CheckoutDoneProps {
    currentOrder: IOrder
    handleChangeStatus: any
}

const CheckoutDone: React.FC<CheckoutDoneProps> = ({ currentOrder, handleChangeStatus }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const [isModalResultOpen, setIsModalResultOpen] = useState(false);

    const openModalResult = () => {
        setIsModalResultOpen(true);
    };

    const closeModalResult = () => {
        setIsModalResultOpen(false);
    };
    return (
        <div className="flex flex-col lg:flex-row justify-center h-[25rem] mt-[60px] md:mt-[120px] lg:mt-0">
            <div className="flex flex-col pt-[140px] h-48 lg:h-auto">
                <p className="hidden lg:block rotate-90 lg:rotate-0 w-48 h-1 mx-auto lg:my-4 bg-[var(--light-red)] pb-[0.5rem]"></p>
            </div>
            <div className="flex flex-col items-center lg:mt-4">
                <h3 className="lmt-3 font-extrabold">เสร็จสิ้น</h3>
                <div className='w-[12.5rem] h-[12.5rem] rounded-full bg-[var(--light-red)] flex justify-center items-center'>
                    <Image width={117} src={check} alt="check"/>
                </div>
                <div onClick={openModalResult} className="mt-3 ">
                    <p className="text-[var(--navy)] font-bold hover:text-[var(--light-red)] cursor-pointer">รายละเอียดและ รูปภาพ</p>
                </div>
                <button onClick={openModal} className="bg-neutral-50 hover:bg-[var(--light-red)] text-black font-bold py-2 px-4 rounded-[50px] w-[11rem] border-2 border-[var(--light-red)] hover:border-white drop-shadow-lg">ให้คะแนนพี่เลี้ยง</button>
            </div>

            <Modal ariaHideApp={false} isOpen={isModalResultOpen} className="z-10">
                <div className="flex justify-center items-center w-screen h-screen">
                    <div className="scale-75 md:scale-100">
                        <div className="bg-white w-[400px] md:w-[500px] h-[550px] p-4 rounded-[20px] shadow">
                            <div className="detailCatSitter flex justify-end items-end">
                                <button
                                    onClick={closeModalResult}
                                    className="flex justify-end text-[var(--navy)] py-2 px-4 rounded "
                                >
                                    <IoClose size={35}/>
                                </button>
                            </div>

                            <div className="reviewText mt-2 flex flex-col justify-center items-center mb-4">
                                <PictureDisplay picture={currentOrder.picture} size={15} isCircle={false}/>
                            </div>
                            <div className="reviewText">
                                <form>
                                    <label htmlFor="message" className="block mb-1 mt-1 text-[var(--navy)] font-bold ">ข้อความจากพี่เลี้ยง</label>
                                    <div className="flex flex-col justify-center items-center">
                                        <textarea
                                            id="message"
                                            rows={7}
                                            className="resize-none block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-[#93A8D6]"
                                            disabled
                                        >{currentOrder.feedback}</textarea>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal ariaHideApp={false} isOpen={isModalOpen} className="z-10">
                <ReviewModal currentOrder={currentOrder} handleChangeStatus={handleChangeStatus} isOpen={isModalOpen} onClose={closeModal}/>
            </Modal>

        </div>
    );
}

export default CheckoutDone;