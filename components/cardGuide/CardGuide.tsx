import { StaticImageData } from 'next/image';
import Image from 'next/image'
import React from 'react'

interface CardGuideProps {

    color: string
    icon: StaticImageData,
    num: string,
    descript1: string,
    descript2: string
}

const CardGuide: React.FC<CardGuideProps> = ({
    color,
    icon,
    num,
    descript1,
    descript2
}) => {
    return (
        <div className="pt-[30px] pb-[40px]">
            <div className="w-[266px] h-[320px] shadow-xl bg-white rounded-[20px] ">
                <div className={`w-[266px] h-[20px] ${color} rounded-t-[20px]`}>
                </div>
                <div className='flex justify-center items-center'>
                    <div className={`w-[145px] h-[145px] rounded-full ${color} border flex justify-center items-center mt-9`}>
                        <Image width={88} src={icon} alt="_icon" />
                    </div>
                </div>
                <div className="rounded-b-[20px] flex justify-center items-center mt-3">
                    <div className='flex flex-col'>
                        <div className='text-center'>
                            <h5>{num}</h5>
                        </div>
                        <div className='text-center'>
                            <h5>{descript1}</h5>
                        </div>
                        <div className='text-center'>
                            <h5>{descript2}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardGuide;