'use client'

import React, { useState } from 'react'
import Data from "./data.json"
import './Accordion.css'
import { FaPlus, FaMinus } from "react-icons/fa6";
import Icon1 from "../../../../public/image/icon1.png";
import Icon2 from "../../../../public/image/icon2.png";
import Icon3 from "../../../../public/image/icon3.png";
import Icon4 from "../../../../public/image/icon4.png";
import Icon5 from "../../../../public/image/icon5.png";
import Icon6 from "../../../../public/image/icon6.png";
import Icon7 from "../../../../public/image/icon7.png";
import Icon8 from "../../../../public/image/icon8.png";
import Icon9 from "../../../../public/image/icon9.png";
import Image from 'next/image';

const Accordion = () => {
    const [Index, setIndex] = useState("no");

    const handleSetIndex = (idNum: string) => {
        const newIndex: string = Index === idNum ? "no" : idNum;
        setIndex(newIndex);
    };

    return (
        <div className="bgAccordion">
            <div className="container flex-shrink-0">
                <div className="flex flex-col justify-center p-4 ">

                    <div className='p-4 pb-2 text-center justify-center hover:cursor-pointer'>
                        <div>
                            <div onClick={() => handleSetIndex(Data[0].id)} className="flex justify-between pb-4 decoBorder">
                                <div className='d-flex fontT'>
                                    <div className={Data[0].id}>{Data[0].question}</div>
                                </div>
                                <div className="icon">
                                    {Index !== Data[0].id ? (<FaPlus className={Data[0].id} size={35} />) : (<FaMinus className={Data[0].id} size={35} />)}
                                </div>
                            </div>

                            {Index === Data[0].id && <div className="flex flex-col justify-between lg:flex-row pt-4 pb-4 gap ">
                                <div className='wth flex flex-col mx-auto'>
                                    <div className={Data[0].id}>
                                        <div className="tab"></div>
                                        <div className="flex justify-center paddingSet">
                                            <div className='rounded-circle flex justify-center items-center'>
                                                <Image className="mr-2" width={75} src={Icon1} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pl-4 pr-4">{Data[0].answer1}</div>
                                </div>
                                <div className='wth flex flex-col mx-auto'>
                                    <div className={Data[0].id}>
                                        <div className="tab"></div>
                                        <div className="flex justify-center paddingSet">
                                            <div className='rounded-circle flex justify-center items-center'>
                                                <Image className="flex justify-center" width={80} src={Icon2} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pl-4 pr-4">{Data[0].answer2}</div>
                                </div>
                                <div className='wth flex flex-col mx-auto'>
                                    <div className={Data[0].id}>
                                        <div className="tab"></div>
                                        <div className="flex justify-center paddingSet">
                                            <div className='rounded-circle flex justify-center items-center'>
                                                <Image className="flex justify-center " width={80} src={Icon3} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pl-4 pr-4">{Data[0].answer3}</div>
                                </div>
                            </div>}
                        </div>
                    </div>

                    <div className='p-4 pb-2 text-center hover:cursor-pointer'>
                        <div>
                            <div onClick={() => handleSetIndex(Data[1].id)} className="flex justify-between pb-4 decoBorder">
                                <div className='flex fontT'>
                                    <div className={Data[1].id}>{Data[1].question}</div>
                                </div>
                                <div className="icon">
                                    {Index !== Data[1].id ? (<FaPlus className={Data[1].id} size={35} />) : (<FaMinus className={Data[1].id} size={35} />)}
                                </div>
                            </div>

                            {Index === Data[1].id && <div className="flex flex-col justify-between lg:flex-row pt-4 pb-4 gap ">
                                <div className='wth flex flex-col mx-auto'>
                                    <div className={Data[1].id}>
                                        <div className="tab"></div>
                                        <div className="flex justify-center paddingSet">
                                            <div className='rounded-circle flex justify-center items-center'>
                                                <Image className="flex justify-center " width={75} src={Icon4} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pl-4 pr-4">{Data[0].answer1}</div>
                                </div>
                                <div className='wth flex flex-col mx-auto'>
                                    <div className={Data[1].id}>
                                        <div className="tab"></div>
                                        <div className="flex justify-center paddingSet">
                                            <div className='rounded-circle flex justify-center items-center'>
                                                <Image className="flex justify-center " width={75} src={Icon5} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pl-4 pr-4">{Data[1].answer2}</div>
                                </div>
                                <div className='wth flex flex-col mx-auto'>
                                    <div className={Data[1].id}>
                                        <div className="tab"></div>
                                        <div className="flex justify-center paddingSet">
                                            <div className='rounded-circle flex justify-center items-center'>
                                                <Image className="flex justify-center " width={80} src={Icon6} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ps-4 pe-4">{Data[1].answer3}</div>
                                </div>
                            </div>}
                        </div>
                    </div>

                    <div className='p-4 pb-2 text-center hover:cursor-pointer'>
                        <div>
                            <div onClick={() => handleSetIndex(Data[2].id)} className="flex justify-between pb-4 decoBorder">
                                <div className='flex fontT'>
                                    <div className={Data[2].id}>{Data[2].question}</div>
                                </div>
                                <div className="icon">
                                    {Index !== Data[2].id ? (<FaPlus className={Data[2].id} size={35} />) : (<FaMinus className={Data[2].id} size={35} />)}
                                </div>
                            </div>

                            {Index === Data[2].id && <div className="flex flex-col justify-between lg:flex-row pt-4 pb-4 gap ">
                                <div className='wth flex flex-col mx-auto'>
                                    <div className={Data[2].id}>
                                        <div className="tab"></div>
                                        <div className="flex justify-center paddingSet">
                                            <div className='rounded-circle flex justify-center items-center'>
                                                <Image className="flex justify-center " width={75} src={Icon7} alt="" />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="pl-4 pr-4">{Data[2].answer1}</div>
                                </div>
                                <div className='wth flex flex-col mx-auto'>
                                    <div className={Data[2].id}>
                                        <div className="tab"></div>
                                        <div className="flex justify-center paddingSet">
                                            <div className='rounded-circle flex justify-center items-center'>
                                                <Image className="flex justify-center " width={75} src={Icon8} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pl-4 pr-4">{Data[2].answer2}</div>
                                </div>
                                <div className='wth flex flex-col mx-auto'>
                                    <div className={Data[2].id}>
                                        <div className="tab"></div>
                                        <div className="flex justify-center paddingSet">
                                            <div className='rounded-circle flex justify-center items-center'>
                                                <Image className="flex justify-center " width={75} src={Icon9} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ps-4 pe-4">{Data[2].answer3}</div>
                                </div>
                            </div>}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Accordion

