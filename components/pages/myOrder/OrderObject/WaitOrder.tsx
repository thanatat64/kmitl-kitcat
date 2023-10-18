'use client'

import {IOrder} from "@/class/Order";
import finished from '@/image/finish.png'
import waitOrder from '@/image/waitingOrder.png'
import Image from 'next/image'
import React from "react";
import FoundOrder from "./FoundOrder";

interface WaitOrderProps {
    handleChangeStatus: any
    currentOrder: IOrder;
    status: number;
}

const WaitOrder: React.FC<WaitOrderProps> = ({handleChangeStatus, currentOrder, status}) => {
    return (
        <div>
            {status === 0 ?
                (<div className="flex flex-row justify-center h-[20rem]">
                    <div className="flex flex-col items-center w-[12.5rem]">
                        <h3 className="mt-3 font-extrabold">รอออเดอร์</h3>
                        <div className='working w-[12.5rem] h-[12.5rem] rounded-full bg-[var(--grey)] border flex justify-center items-center'>
                            <Image width={117} src={waitOrder} alt="wating"/>
                        </div>
                    </div>
                </div>) : status === 1 ? (<FoundOrder currentOrder={currentOrder} handleChangeStatus={handleChangeStatus}/>) :
                    (<div className="flex flex-row justify-center h-[20rem]">
                        <div className="flex flex-col items-center w-[12.5rem]">
                            <h3 className="mt-3 font-extrabold">ยืนยันออเดอร์</h3>
                            <div className='working w-[12.5rem] h-[12.5rem] rounded-full bg-[var(--light-blue)] border flex justify-center items-center'>
                                <Image width={117} src={finished} alt="finished"/>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
}

export default WaitOrder;