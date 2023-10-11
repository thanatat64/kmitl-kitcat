'use client'

import React, { useState } from "react";
import Modal from "react-modal"
import Image from 'next/image'
import toDoList from '@/image/todo.png'
import finised from '@/image/finish.png'

const ConfirmDone: React.FC = () => {
    return (
        <div className="flex flex-row justify-center h-[20rem]">
            <div className="flex flex-col items-center w-[12.5rem]">
                <h3 className="mt-3 font-extrabold">รอการยืนยัน</h3>
                <div className='working w-[12.5rem] h-[12.5rem] rounded-full bg-[var(--light-blue)] border flex justify-center items-center'>
                    <Image width={117} src={toDoList} alt="toDoList" />
                </div>
                <button className="bg-neutral-50 hover:bg-[var(--light-blue)] text-black font-bold py-2 px-4 mt-3 rounded-[50px] w-[9rem] border-2 border-[var(--light-blue)] hover:border-white drop-shadow-lg">ดูรายละเอียด</button>
            </div>
            <div className="flex flex-col justify-center">
                <p className="w-48 h-1 mx-auto my-4 bg-[var(--grey)] pb-[0.5rem]"></p>
            </div>
        </div>   
    );
}

export default ConfirmDone;