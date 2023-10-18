'use client'

import {IOrder} from "@/class/Order";
import finished from '@/image/finish.png'
import toDoList from '@/image/todo.png'
import Image from 'next/image'
import React from "react";
import ConfirmDone from "./ConfirmDone";

interface ConfirmProps {
    currentOrder: IOrder
    status: number;
}

const Confirm: React.FC<ConfirmProps> = ({currentOrder, status}) => {
    return (
        <div>
            {status === 0 ?
                (<div className="flex flex-row justify-center h-[20rem]">
                    <div className="flex flex-col items-center w-[12.5rem]">
                        <h3 className="mt-3 font-extrabold">รอการยืนยัน</h3>
                        <div className='w-[12.5rem] h-[12.5rem] rounded-full bg-[var(--grey)] flex justify-center items-center'>
                            <Image width={117} src={toDoList} alt="toDoList"/>
                        </div>
                    </div>
                </div>) : status === 1 ? (<ConfirmDone currentOrder={currentOrder}/>) :
                    (<div className="flex flex-row justify-center h-[20rem]">
                        <div className="flex flex-col items-center w-[12.5rem]">
                            <h3 className="mt-3 font-extrabold">รอการยืนยัน</h3>
                            <div className='working w-[12.5rem] h-[12.5rem] rounded-full bg-[var(--light-blue)] flex justify-center items-center'>
                                <Image width={117} src={finished} alt="finished"/>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
}

export default Confirm;