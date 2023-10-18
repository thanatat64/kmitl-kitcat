'use client'

import React, { useState } from "react";
import Modal from "react-modal"
import Image from 'next/image'
import check from '@/image/check.png'
import finised from '@/image/finish.png'
import salary from '@/image/getmoney.png'
import RecieveMoney from "./RecieveMoney";

interface OrderDoneProps {
    handleChangeStatus: any
    status: number;
}

const OrderDone: React.FC<OrderDoneProps> = ({ handleChangeStatus, status }) => {
    return (
        <div>
            {status === 4 ? (<RecieveMoney handleChangeStatus={handleChangeStatus}/>) :
                <div className="flex flex-row justify-center h-[20rem]">
                    <div className="flex flex-col justify-center">
                        <p className="hidden lg:block rotate-90 lg:rotate-0 w-16 h-1 mx-auto lg:my-4 bg-[var(--grey)] pb-[0.5rem]"></p>
                    </div>
                    <div className="flex flex-col items-center w-[12.5rem]">
                        <h3 className="mt-3 font-extrabold">รับเงิน</h3>
                        <div className='working w-[12.5rem] h-[12.5rem] rounded-full bg-[var(--grey)] border flex justify-center items-center'>
                            <Image width={117} src={salary} alt="recieve money" />
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default OrderDone;