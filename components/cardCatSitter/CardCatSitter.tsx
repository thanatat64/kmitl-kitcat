'use client'

import PictureDisplay from "@/components/other/PictureDisplay";
import heartIcon from "@/image/heartIcon.png";
import {IReview} from "@/lib/class/Review"
import {IUser} from "@/lib/class/User"
import React, {useState} from "react";
import {IoClose} from "react-icons/io5";
import Modal from "react-modal"
import Review from "./Review";


interface CardCatSiiterProps {
    catsitter: IUser;
    reviews: IReview[];
    color: number;
    isButton: boolean;
    submitCatSitter: any;
}

const CardCatSitter: React.FC<CardCatSiiterProps> = ({catsitter, reviews, color, isButton, submitCatSitter}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="hover:scale-105 duration-300 hover:cursor-pointer ">
            <div className={`w-[300px] md:w-[330px] h-[420px] item-center bg-white shadow-xl rounded-[20px] ${isButton && 'h-[489px]'}`}>
                <div onClick={openModal}>
                    <div className={`w-[300px] md:w-[330px] h-[137px] ${color % 3 == 0 && 'bg-[var(--light-blue)]'} ${color % 3 == 1 && 'bg-[var(--yellow)]'} ${color % 3 == 2 && 'bg-[var(--light-red)]'} rounded-t-[20px]`}/>
                    <div className='mt-[-67px] flex justify-center items-end'>
                        <PictureDisplay picture={catsitter.picture} size={8} isCircle={true}/>
                    </div>
                    <div className='w-[274px] h-[171px] bg-white ml-[25px] mt-[25px] text-[20px] font-semibold text-[var(--navy)]'>
                        <div className='p-2 flex justify-between items-center border-b-[1px] border-[var(--navy)] mr-[20px] ml-0 md:mr-2 md:ml-2'>
                            <div className="flex gap-2 items-center">
                                <PictureDisplay picture={heartIcon} isCircle={false} size={2}/>
                                <div className="mt-1">4</div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <PictureDisplay picture={heartIcon} isCircle={false} size={2}/>
                                <div className="mt-1">25%</div>
                            </div>
                        </div>
                        <div className="mt-3 px-3 text-nowrap">
                            <div className="text-xl overflow-ellipsis overflow-hidden">{catsitter.name}</div>
                            <div className="font-normal text-sm overflow-ellipsis overflow-hidden">{catsitter.address1 === "" ? "-" : catsitter.address1}</div>
                            <div className="text-end mt-4 underline font-normal text-sm overflow-ellipsis overflow-hidden">กดเพื่ออ่านเพิ่มเติม</div>
                        </div>
                    </div>
                </div>
                {isButton && (
                    <button onClick={submitCatSitter} data-catsitter={catsitter.id} className='w-[300px] md:w-[330px] bottom-0 mt-[14px] h-[83px] rounded-b-[20px] bg-[var(--aqua)] hover:bg-cyan-500 text-white text-[20px] font-semibold'>เลือกพี่เลี้ยง</button>
                )}
                <Modal ariaHideApp={false}
                       isOpen={isModalOpen}
                       className="z-10">
                    <div className="flex justify-center items-center w-screen h-screen">
                        <div className="bg-white w-[320px] md:w-[600px] md:h-[600px] p-4 rounded-[20px] shadow">
                            <div>
                                <div className="flex justify-end">
                                    <button onClick={closeModal} className="text-[var(--navy)] md:py-2 md:px-4 rounded ">
                                        <IoClose size={35}/>
                                    </button>
                                </div>
                                <div className="flex flex-col md:flex-row md:mx-auto md:w-fit mb-4">
                                    <PictureDisplay picture={catsitter.picture} size={8} isCircle={true}/>
                                    <div className="flex justify-center md:pl-[70px] mx-auto font-bold text-[var(--navy)] ">
                                        <div className="flex flex-col justify-center">
                                            <div className="mt-3 px-3 text-nowrap">
                                                <div className="text-xl overflow-ellipsis overflow-hidden">{catsitter.name}</div>
                                                <div className="font-normal text-sm overflow-ellipsis overflow-hidden">{catsitter.address1 === "" ? "-" : catsitter.address1}</div>
                                            </div>
                                            <div className='p-2 flex justify-between items-center mr-[20px] ml-0 md:mr-2 md:ml-2'>
                                                <div className="flex gap-2 items-center">
                                                    <PictureDisplay picture={heartIcon} isCircle={false} size={2}/>
                                                    <div className="mt-1">4</div>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <PictureDisplay picture={heartIcon} isCircle={false} size={2}/>
                                                    <div className="mt-1">25%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {isButton && (
                                    <div className="pl-[50px] pr-[50px] mt-2">
                                        <form onSubmit={closeModal}>
                                            <button onClick={submitCatSitter} type="submit" data-catsitter={catsitter.id} className='rounded-full bg-[var(--aqua)] hover:bg-cyan-500 text-white w-full h-[40px] text-[20px] font-semibold hover:scale-105 duration-300'>เลือกพี่เลี้ยง</button>
                                        </form>
                                    </div>
                                )}
                                <div className="pl-6 md:px-[50px]">
                                    <Review/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>

            </div>
        </div>
    )
}

export default CardCatSitter
