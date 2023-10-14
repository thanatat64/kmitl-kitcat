'use client'

import React, { useState } from "react";
import Modal from "react-modal"
import Image from 'next/image'
import paw from '@/image/paws.png'
import finised from '@/image/finish.png'

const WorkingDone: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center h-[20rem]">
            <div className="flex flex-col justify-center h-48 lg:h-auto">
                <p className="hidden lg:block rotate-90 lg:rotate-0 w-48 h-1 mx-auto lg:my-4 bg-[var(--light-blue)] pb-[0.5rem]"></p>
            </div>
            <div className="flex flex-col items-center">
                <h3 className="mt-3 font-extrabold">กำลังดำเนินการ</h3>
                <div className='w-[12.5rem] h-[12.5rem] rounded-full bg-[var(--yellow)] flex justify-center items-center'>
                    <Image width={117} src={paw} alt="paw" />
                </div>
            </div>
        </div>   
    );
}

export default WorkingDone;