'use client'

import React, { useState } from "react";
import Modal from "react-modal"
import Image from 'next/image'
import toDoList from '@/image/todo.png'
import paw from '@/image/paws.png'
import check from '@/image/check.png'
import finised from '@/image/finish.png'

const Mystatus: React.FC = () => {

    const [imageUrl, setImageUrl] = useState(toDoList);
    const [backgroundColor, setBackgroundColor] = useState('bg-[var(--grey)]');

    const handleStatusChange = () => {
        // Change the image source when the button is clicked
        setImageUrl(finised); // Update with the new image URL
        setBackgroundColor(backgroundColor === 'bg-[var(--grey)]' ? 'bg-[var(--light-blue)]' : 'bg-[var(--grey)]');
    };

    return (
        <div className="h-[45rem] bg-[var(--cream)] p-4 rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px] shadow-[0_10px_10px_0_rgba(0,0,0,0.15)]"> 
            <div className="flex justify-center flex-col items-center mt-[8rem]">
                <div className="flex flex-col mt-4">
                    <div className="flex flex-row justify-center h-[20rem]">
                        <div className="flex flex-col items-center w-[12.5rem]">
                            <h3 className="mt-3 font-extrabold">รอการยืนยัน</h3>
                            <div className='w-[12.5rem] h-[12.5rem] rounded-full ${backgroundColor} border flex justify-center items-center'>
                                <Image width={117} src={imageUrl} alt="toDoList" />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <hr className="w-48 h-1 mx-auto my-4 bg-[var(--grey)] border-0 rounded md:my-10 dark:bg-gray-700 pb-2" />
                        </div>
                        <div className="flex flex-col items-center w-[12.5rem]">
                            <h3 className="mt-3 font-extrabold ">กำลังดำเนินการ</h3>
                            <div className='working w-[12.5rem] h-[12.5rem] rounded-full bg-[var(--grey)] border flex justify-center items-center'>
                                <Image width={117} src={paw} alt="paw" />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <hr className="w-48 h-1 mx-auto my-4 bg-[var(--grey)] border-0 rounded md:my-10 dark:bg-gray-700 pb-2" />
                        </div>
                        <div className="flex flex-col items-center w-[12.5rem]">
                            <h3 className="mt-3 font-extrabold">เสร็จสิ้น</h3>
                            <div className='done w-[12.5rem] h-[12.5rem] rounded-full bg-[var(--grey)] border flex justify-center items-center'>
                                <Image width={117} src={check} alt="check" />
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={handleStatusChange} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-[15rem] mt-[6rem]">Click to Change</button>
            </div>
        </div>
    );
};

export default Mystatus;
