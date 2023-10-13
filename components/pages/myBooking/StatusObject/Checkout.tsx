'use client'

import React, { useState } from "react";
import Modal from "react-modal"
import Image from 'next/image'
import check from '@/image/check.png'
import finised from '@/image/finish.png'
import CheckoutDone from "./CheckoutDone";

interface CheckoutProps {
    status: number;
}

const Checkout: React.FC<CheckoutProps> = ({ status }) => {
    return (
        <div>
            {status === 3 ? (<CheckoutDone />) :
                <div className="flex flex-row justify-center h-[20rem]">
                    <div className="flex flex-col justify-center">
                        <p className="w-48 h-1 mx-auto my-4 bg-[var(--grey)] pb-[0.5rem]"></p>
                    </div>
                    <div className="flex flex-col items-center w-[12.5rem]">
                        <h3 className="mt-3 font-extrabold">เสร็จสิ้น</h3>
                        <div className='working w-[12.5rem] h-[12.5rem] rounded-full bg-[var(--grey)] border flex justify-center items-center'>
                            <Image width={117} src={check} alt="check" />
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Checkout;