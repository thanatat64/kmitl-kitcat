'use client'

import PictureDisplay from "@/components/other/PictureDisplay";
import RatingDisplay from "@/components/other/RatingDisplay";
import heartIcon from "@/image/heartIcon.png";
import {IReview} from "@/lib/class/Review"
import {IUser} from "@/lib/class/User"
import React, {useEffect, useState} from "react";
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
    const [ratingAverage, setRatingAverage] = useState<number>(0);
    const [heartAverage, setHeartAverage] = useState<number>(0);

    useEffect(() => {
        if (reviews && reviews.length != 0) {
            let totalRating = 0
            let loveCount = 0
            reviews.forEach((review) => {
                totalRating += review.rating
                if (review.rating > 2)
                    loveCount++
            })
            setRatingAverage(totalRating / reviews.length)
            setHeartAverage((loveCount / reviews.length) * 100)
        }
    }, [reviews]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="hover:scale-105 duration-300 hover:cursor-pointer">
            <div className={`w-[300px] md:w-[330px] h-[420px] item-center bg-white shadow-xl rounded-[20px] ${isButton && 'h-[489px]'}`}>
                <div onClick={openModal}>
                    <div className={`w-[300px] md:w-[330px] h-[137px] ${color % 4 == 0 && 'bg-[var(--light-blue)]'} ${color % 4 == 1 && 'bg-[var(--pink)]'} ${color % 4 == 2 && 'bg-[var(--light-red)]'} ${color % 4 == 3 && 'bg-[var(--yellow)]'} rounded-t-[20px]`}/>
                    <div className='mt-[-67px] flex justify-center items-end'>
                        <PictureDisplay picture={catsitter.picture} size={8} isCircle={true}/>
                    </div>
                    <div className='w-[274px] h-[171px] bg-white ml-[25px] mt-[25px] font-semibold text-[var(--navy)]'>
                        <div className='p-2 flex justify-between items-center border-b-[1px] border-[var(--navy)] mr-[20px] ml-0 md:mr-2 md:ml-2'>
                            <div>
                                คะแนนรีวิวเฉลี่ย
                                <div className="flex gap-2 items-center">
                                    <RatingDisplay rating={parseInt(ratingAverage as any)}/>
                                    <div className="mt-1">{ratingAverage.toFixed(2)}</div>
                                </div>
                            </div>
                            <div>
                                ความชื่นชอบ
                                <div className="flex gap-2 items-center">
                                    <PictureDisplay picture={heartIcon} isCircle={false} size={2}/>
                                    <div className="mt-1">{heartAverage.toFixed(2)}%</div>
                                </div>
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
                    <button onClick={submitCatSitter} data-catsitter={catsitter.id} className='w-[300px] md:w-[330px] bottom-0 mt-[40px] h-[83px] rounded-b-[20px] bg-[var(--aqua)] hover:bg-cyan-500 text-white text-[20px] font-semibold'>เลือกพี่เลี้ยง</button>
                )}
                <Modal ariaHideApp={false}
                       isOpen={isModalOpen}
                       className="z-10">
                    <div className="flex justify-center items-center w-screen h-screen">
                        <div className="bg-white w-[320px] md:w-[600px] p-4 rounded-[20px] shadow">
                            <div>
                                <div className="flex justify-end">
                                    <button onClick={closeModal} className="text-[var(--navy)] md:py-2 md:px-4 rounded ">
                                        <IoClose size={35}/>
                                    </button>
                                </div>
                                <div className="flex mb-4 px-5 gap-4">
                                    <PictureDisplay picture={catsitter.picture} size={8} isCircle={true}/>
                                    <div className="flex font-bold text-[var(--navy)] flex-grow">
                                        <div className="flex flex-col flex-grow w-[300px]">
                                            <div className="mt-3 px-3 text-nowrap">
                                                <div className="text-xl overflow-ellipsis overflow-hidden">{catsitter.name}</div>
                                                <div className="font-normal text-sm overflow-ellipsis overflow-hidden">{catsitter.address1 === "" ? "-" : catsitter.address1}</div>
                                            </div>
                                            <div className='p-2 flex items-center justify-around gap-4'>
                                                <div>
                                                    คะแนนรีวิวเฉลี่ย
                                                    <div className="flex gap-2 items-center">
                                                        <RatingDisplay rating={parseInt(ratingAverage as any)}/>
                                                        <div className="mt-1">{ratingAverage.toFixed(2)}</div>
                                                    </div>
                                                </div>
                                                <div>
                                                    ความชื่นชอบ
                                                    <div className="flex gap-2 items-center">
                                                        <PictureDisplay picture={heartIcon} isCircle={false} size={2}/>
                                                        <div className="mt-1">{heartAverage.toFixed(2)}%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-6 md:px-[50px]">
                                    <Review reviews={reviews}/>
                                </div>
                                {isButton && (
                                    <div className="pl-[50px] pr-[50px] mt-4">
                                        <form onSubmit={closeModal}>
                                            <button onClick={submitCatSitter} type="submit" data-catsitter={catsitter.id} className='rounded-full bg-[var(--aqua)] hover:bg-cyan-500 text-white w-full h-[40px] text-[20px] font-semibold hover:scale-105 duration-300'>เลือกพี่เลี้ยง</button>
                                        </form>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default CardCatSitter
