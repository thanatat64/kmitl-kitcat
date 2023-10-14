'use client'

import React, { useState } from "react";
import Modal from "react-modal"
import Image from 'next/image'
import toDoList from '@/image/todo.png'
import finished from '@/image/finish.png'
import ConfirmDone from "./ConfirmDone";

interface ConfirmProps {
    status: number;
}

const Confirm: React.FC<ConfirmProps> = ({ status }) => {
    const [backgroundColor, setBackgroundColor] = useState('bg-[var(--grey)]');
    const [showImage, setShowImage] = useState(toDoList);

    const handleStatusChange = () => {
        // Change the image source when the button is clicked
        setShowImage(finished); // Update with the new image URL
        setBackgroundColor(backgroundColor === 'bg-[var(--grey)]' ? 'bg-[var(--light-blue)]' : 'bg-[var(--grey)]');
    };
    return (
        <div>
            {status === 0 ?
                (<div className="flex flex-row justify-center h-[20rem]">
                    <div className="flex flex-col items-center w-[12.5rem]">
                        <h3 className="mt-3 font-extrabold">รอการยืนยัน</h3>
                        <div className='w-[12.5rem] h-[12.5rem] rounded-full bg-[var(--grey)] flex justify-center items-center'>
                            <Image width={117} src={toDoList} alt="toDoList" />
                        </div>
                    </div>
                </div>) : status === 1 ? (<ConfirmDone />) : 
                (<div className="flex flex-row justify-center h-[20rem]">
                    <div className="flex flex-col items-center w-[12.5rem]">
                        <h3 className="mt-3 font-extrabold">รอการยืนยัน</h3>
                        <div className='working w-[12.5rem] h-[12.5rem] rounded-full bg-[var(--light-blue)] flex justify-center items-center'>
                            <Image width={117} src={finished} alt="finished" />
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
}

export default Confirm;