'use client'

import React from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6";
import './Accordion.css'

interface AccordionUIProps {
    title: string;
    id: string;
    children1: string;
    children2: string;
    children3: string;
    index: string; 
    setIndex: (index: string) => void; 
}

const AccordionUI: React.FC<AccordionUIProps> = ({
    title,
    id,
    children1,
    children2,
    children3,
    index,
    setIndex,
}) => {

    const handleSetIndex = (idNum: string) => {
        const newIndex:string = index === idNum ? "no" : idNum;
        setIndex(newIndex);
    };

    return (
        <div>
            <div onClick={() => handleSetIndex(id)} className="d-flex justify-content-between pb-4 decoBorder">
                <div className='d-flex fontT'>
                    <div className={id}>{title}</div>
                </div>
                <div className="icon">
                    {index !== id ? (<FaPlus className={id} size={35} />) : (<FaMinus className={id} size={35} />)}
                </div>
            </div>

            {index === id && <div className="d-flex flex-row justify-content-between pt-4 pb-4 gap">
                <div className='wth d-flex flex-column'>
                    <div className={id}>
                        <div className="tab"></div>
                        <div className="d-flex justify-content-center paddingSet">
                            <div className='rounded-circle'></div>
                        </div>
                    </div>
                    <div className="ps-4 pe-4">{children1}</div>
                </div>
                <div className='wth d-flex flex-column'>
                <div className={id}>
                        <div className="tab"></div>
                        <div className="d-flex justify-content-center paddingSet">
                            <div className='rounded-circle'></div>
                        </div>
                    </div>
                    <div className="ps-4 pe-4">{children2}</div>
                </div>
                <div className='wth d-flex flex-column'>
                <div className={id}>
                        <div className="tab"></div>
                        <div className="d-flex justify-content-center paddingSet">
                            <div className='rounded-circle'></div>
                        </div>
                    </div>
                    <div className="ps-4 pe-4">{children3}</div>
                </div>
            </div>}
        </div>
    )
}

export default AccordionUI


