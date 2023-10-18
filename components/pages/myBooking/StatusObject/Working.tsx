'use client'

import finished from '@/image/finish.png'
import paw from '@/image/paws.png'
import Image from 'next/image'
import React from "react";
import WorkingDone from "./WorkingDone";

interface WorkingProps {
    status: number;
}

const Working: React.FC<WorkingProps> = ({status}) => {
    return (
        <div>
            {status === 2 ? (<WorkingDone/>) : status === 3 ?
                (<div className="flex flex-col lg:flex-row justify-center h-[20rem]">
                    <div className="flex flex-col justify-center h-48 lg:h-auto">
                        <p className="hidden lg:block rotate-90 lg:rotate-0 w-48 h-1 mx-auto lg:my-4 bg-[var(--blue)] pb-[0.5rem]"></p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="mt-3 font-extrabold">กำลังดำเนินการ</h3>
                        <div className='w-[12.5rem] h-[12.5rem] rounded-full bg-[var(--yellow)] flex justify-center items-center'>
                            <Image width={117} src={finished} alt="finished"/>
                        </div>
                    </div>
                </div>) :
                (<div className="flex flex-col lg:flex-row justify-center h-[20rem]">
                    <div className="flex flex-col justify-center h-48 lg:h-auto">
                        <p className="hidden lg:block rotate-90 lg:rotate-0 w-48 h-1 mx-auto lg:my-4 bg-[var(--grey)] pb-[0.5rem]"></p>
                    </div>
                    <div className="flex flex-col items-center ">
                        <h3 className="mt-3 font-extrabold">กำลังดำเนินการ</h3>
                        <div className='w-[12.5rem] h-[12.5rem] rounded-full bg-[var(--grey)] flex justify-center items-center'>
                            <Image width={117} src={paw} alt="paw"/>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
}

export default Working;