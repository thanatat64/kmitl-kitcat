'use client'

import React, { useState } from "react";
import Modal from "react-modal"
import Image from 'next/image'
import check from '@/image/check.png'
import salary from '@/image/getmoney.png'
import finised from '@/image/finish.png'
import Swal from "sweetalert2";
import {orderStatus} from "../../../../src/app/data";

interface ReceiveMoneyProps {
    handleChangeStatus: any
}
const RecieveMoney: React.FC<ReceiveMoneyProps> = ({handleChangeStatus}) => {
    return (
        <div className="flex flex-row justify-center h-[20rem]">
            <div className="flex flex-col justify-center">
                <p className="hidden lg:block rotate-90 lg:rotate-0 w-16 h-1 mx-auto lg:my-4 bg-[var(--light-red)] pb-[0.5rem]"></p>
            </div>
            <div className="flex flex-col items-center w-[12.5rem]">
                <h3 className="mt-3 font-extrabold">รับเงิน</h3>
                <div className='working w-[12.5rem] h-[12.5rem] rounded-full bg-[var(--light-red)] border flex justify-center items-center'>
                    <Image width={117} src={salary} alt="recieve money" />
                </div>
                <button onClick={() => {handleChangeStatus(orderStatus._6_CLOSED, "โอนเงินไปยังบัญชีของคุณเรียบร้อย ขอบคุณที่บริการลูกค้าครับ")}} className="bg-neutral-50 hover:bg-[var(--light-red)] text-black font-bold py-2 px-4 mt-3 rounded-[50px] w-[11rem] border-2 border-[var(--light-red)] hover:border-white drop-shadow-lg">รับเงิน</button>
            </div>
        </div>   
    );
}

export default RecieveMoney;