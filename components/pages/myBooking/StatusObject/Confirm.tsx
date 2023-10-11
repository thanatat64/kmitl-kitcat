'use client'

import React, { useState } from "react";
import Modal from "react-modal"
import Image from 'next/image'
import toDoList from '@/image/todo.png'
import finised from '@/image/finish.png'

const Confirm: React.FC = () => {
    return (
        <div className="flex flex-row justify-center h-[20rem]">
            <div className="flex flex-col items-center w-[12.5rem]">
                <h3 className="mt-3 font-extrabold">รอการยืนยัน</h3>
                <div className='working w-[12.5rem] h-[12.5rem] rounded-full bg-[var(--grey)] border flex justify-center items-center'>
                    <Image width={117} src={toDoList} alt="toDoList" />
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <hr className="w-48 h-1 mx-auto my-4 bg-[var(--grey)] border-0  md:my-10 dark:bg-gray-700 pb-2" />
            </div>
        </div>   
    );
}

export default Confirm;