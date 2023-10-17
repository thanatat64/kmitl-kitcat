'use client'

import React, { useState } from "react";
import Modal from "react-modal"
import Image from 'next/image'
import fast from '@/image/goFast.png'
import finished from '@/image/finish.png'
import SitterDone from "./SitterDone";

interface SitterProps {
    status: number;
}

const Sitter: React.FC<SitterProps> = ({ status }) => {
    return (
        <div>
            {status === 2 ? (<SitterDone />) : status === 3 || status === 4 ?
                (<div className="flex flex-row justify-center h-[20rem]">
                    <div className="flex flex-col justify-center">
                        <p className="hidden lg:block rotate-90 lg:rotate-0 w-16 h-1 mx-auto lg:my-4 bg-[var(--light-blue)] pb-[0.5rem]"></p>
                    </div>
                    <div className="flex flex-col items-center w-[12.5rem]">
                        <h3 className="mt-3 font-extrabold">เสร็จสิ้นออเดอร์</h3>
                        <div className='working w-[12.5rem] h-[12.5rem] rounded-full bg-[var(--aqua)] border flex justify-center items-center'>
                            <Image width={117} src={finished} alt="finished" />
                        </div>
                    </div>
                </div>) :
                (<div className="flex flex-row justify-center h-[20rem]">
                    <div className="flex flex-col justify-center">
                        <p className="hidden lg:block rotate-90 lg:rotate-0 w-16 h-1 mx-auto lg:my-4 bg-[var(--grey)] pb-[0.5rem]"></p>
                    </div>
                    <div className="flex flex-col items-center w-[12.5rem]">
                        <h3 className="mt-3 font-extrabold">รอดำเนินการ</h3>
                        <div className='working w-[12.5rem] h-[12.5rem] rounded-full bg-[var(--grey)] border flex justify-center items-center'>
                            <Image width={117} src={fast} alt="wait" />
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
}

export default Sitter;