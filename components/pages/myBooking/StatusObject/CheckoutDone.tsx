'use client'

import React, { useState } from "react";
import Modal from "react-modal"
import Image from 'next/image'
import check from '@/image/check.png'
import finised from '@/image/finish.png'

const CheckoutDone: React.FC = () => {
    return (
        <div className="flex flex-row justify-center h-[20rem]">
            <div className="flex flex-col items-center w-[12.5rem]">
                <h3 className="mt-3 font-extrabold">รอการยืนยัน</h3>
                <div className='working w-[12.5rem] h-[12.5rem] rounded-full bg-[var(--light-red)] border flex justify-center items-center'>
                    <Image width={117} src={check} alt="check" />
                </div>
                <button className="bg-neutral-50 hover:bg-[var(--light-red)] text-black font-bold py-2 px-4 mt-3 rounded-[50px] w-[11rem] border-2 border-[var(--light-red)] hover:border-white drop-shadow-lg">ให้คะแนนพี่เลี้ยง</button>
            </div>
        </div>   
    );
}

export default CheckoutDone;