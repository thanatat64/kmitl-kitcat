'use client'

import React, { useState } from "react";
import Modal from "react-modal"
import Image from 'next/image'
import check from '@/image/check.png'
import finised from '@/image/finish.png'

const Checkout: React.FC = () => {
    return (
        <div className="flex flex-row justify-center h-[20rem]">
            <div className="flex flex-col items-center w-[12.5rem]">
                <h3 className="mt-3 font-extrabold">รอการยืนยัน</h3>
                <div className='working w-[12.5rem] h-[12.5rem] rounded-full bg-[var(--grey)] border flex justify-center items-center'>
                    <Image width={117} src={check} alt="check" />
                </div>
            </div>
        </div>   
    );
}

export default Checkout;