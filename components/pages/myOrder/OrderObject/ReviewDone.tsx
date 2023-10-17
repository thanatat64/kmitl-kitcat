'use client'

import hourglass from '@/image/hourglass.png'
import Image from 'next/image'
import React from "react";

const ReviewDone: React.FC = () => {
    return (
        <div className="flex flex-row justify-center h-[20rem]">
            <div className="flex flex-col justify-center">
                <p className="hidden lg:block rotate-90 lg:rotate-0 w-16 h-1 mx-auto lg:my-4 bg-[var(--aqua)] pb-[0.5rem]"></p>
            </div>
            <div className="flex flex-col items-center w-[12.5rem]">
                <h3 className="mt-3 font-extrabold">รอการรีวิว</h3>
                <div className='working w-[12.5rem] h-[12.5rem] rounded-full bg-[var(--yellow)] border flex justify-center items-center'>
                    <Image width={117} src={hourglass} alt="waiting for review" />
                </div>
                {/* <button
                    className="bg-neutral-50 hover:bg-[var(--yellow)] text-black font-bold py-2 px-4 mt-2 rounded-[50px] w-[9rem] border-2 border-[var(--yellow)] hover:border-white drop-shadow-lg"
                >
                    เสร็จสิ้น
                </button> */}
            </div>
        </div>
    );
}

export default ReviewDone;