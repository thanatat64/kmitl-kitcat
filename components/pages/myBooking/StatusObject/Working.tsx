'use client'

import React, { useState } from "react";
import Modal from "react-modal"
import Image from 'next/image'
import paw from '@/image/paws.png'
import finished from '@/image/finish.png'
import WorkingDone from "./WorkingDone";

interface WorkingProps {
    status: number;
}

const Working: React.FC<WorkingProps> = ({ status }) => {
    return (
        <div>
            {status === 2 ? (<WorkingDone />) : status === 3 ?
                (<div className="flex flex-row justify-center h-[20rem]">
                    <div className="flex flex-col justify-center">
                        <p className="w-48 h-1 mx-auto my-4 bg-[var(--yellow)] pb-[0.5rem]"></p>
                    </div>
                    <div className="flex flex-col items-center w-[12.5rem]">
                        <h3 className="mt-3 font-extrabold">กำลังดำเนินการ</h3>
                        <div className='working w-[12.5rem] h-[12.5rem] rounded-full bg-[var(--yellow)] border flex justify-center items-center'>
                            <Image width={117} src={finished} alt="finished" />
                        </div>
                    </div>
                </div>) :
                (<div className="flex flex-row justify-center h-[20rem]">
                    <div className="flex flex-col justify-center">
                        <p className="w-48 h-1 mx-auto my-4 bg-[var(--grey)] pb-[0.5rem]"></p>
                    </div>
                    <div className="flex flex-col items-center w-[12.5rem]">
                        <h3 className="mt-3 font-extrabold">กำลังดำเนินการ</h3>
                        <div className='working w-[12.5rem] h-[12.5rem] rounded-full bg-[var(--grey)] border flex justify-center items-center'>
                            <Image width={117} src={paw} alt="paw" />
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
}

export default Working;