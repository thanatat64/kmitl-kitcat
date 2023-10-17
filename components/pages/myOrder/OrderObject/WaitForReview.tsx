'use client'

import ReviewDone from "@/components/pages/myOrder/OrderObject/ReviewDone";
import finished from '@/image/finish.png'
import hourglass from '@/image/hourglass.png'
import Image from 'next/image'
import React from "react";

interface WaitForReviewProps {
    status: number;
}

const WaitForReview: React.FC<WaitForReviewProps> = ({status}) => {
    return (
        <div>
            {status === 3 ? (<ReviewDone/>) : status === 4 ?
                (<div className="flex flex-row justify-center h-[20rem]">
                    <div className="flex flex-col justify-center">
                        <p className="hidden lg:block rotate-90 lg:rotate-0 w-16 h-1 mx-auto lg:my-4 bg-[var(--yellow)] pb-[0.5rem]"></p>
                    </div>
                    <div className="flex flex-col items-center w-[12.5rem]">
                        <h3 className="mt-3 font-extrabold">รีวิวเสร็จสิ้น</h3>
                        <div className='working w-[12.5rem] h-[12.5rem] rounded-full bg-[var(--yellow)] border flex justify-center items-center'>
                            <Image width={117} src={finished} alt="finished"/>
                        </div>
                    </div>
                </div>) :
                (<div className="flex flex-row justify-center h-[20rem]">
                    <div className="flex flex-col justify-center">
                        <p className="hidden lg:block rotate-90 lg:rotate-0 w-16 h-1 mx-auto lg:my-4 bg-[var(--grey)] pb-[0.5rem]"></p>
                    </div>
                    <div className="flex flex-col items-center w-[12.5rem]">
                        <h3 className="mt-3 font-extrabold">รอการรีวิว</h3>
                        <div className='working w-[12.5rem] h-[12.5rem] rounded-full bg-[var(--grey)] border flex justify-center items-center'>
                            <Image width={117} src={hourglass} alt="waiting for review"/>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
}

export default WaitForReview;