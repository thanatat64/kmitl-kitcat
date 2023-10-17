'use client'

import React from 'react'
import Image from 'next/image';
import Data from "./data.json";
import { AiFillStar, AiOutlineStar } from "react-icons/ai"



const Review = () => {
    return (
        <div>
            <hr />
            <div className='overflow-auto h-[240px]'>
                {Data.map((item, i) => (
                    <div className=''>

                        <div className='flex'>
                            <div className="mr-3 rounded-full overflow-hidden mb-[3px]" style={{ width: '70px', height: '70px' }}>
                                <img src={item.image} alt="" className='rounded-full ' />
                            </div>
                            <div className='flex flex-col md:flex-row'>
                                <div className=''>
                                    <div className='text-[var(--navy)] text-[20px] w-[140px] truncate'>
                                        {item.username}
                                    </div>
                                    <div className='flex'>
                                        {Array.from({ length: item.star }, (i) => (
                                            <AiFillStar key={i} className="text-[var(--yellow)]" />
                                        ))}
                                        {Array.from({ length: 5 - item.star }, (i) => (
                                            <AiOutlineStar key={i} className="text-[var(--yellow)]" />
                                        ))}
                                    </div>
                                </div>
                                <div className='text-gray-600 mt-1'>
                                    {item.date}
                                </div>
                            </div>
                        </div>
                        <div className='text-[var(--navy)] truncate mt-1'>
                            {item.review}
                        </div>

                        <hr />
                    </div>
                ))}
            </div>


        </div>
    )
}

export default Review
