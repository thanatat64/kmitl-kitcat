'use client'

import React, { useState } from 'react'
import data from "./data.json"
import AccordionUI from "./AccordionUI"
import './Accordion.css'

interface Accordion {
    title: string;
    id: string;
    children1: string;
    children2: string;
    children3: string;
  }

const Accordion:React.FC<Accordion>=({
    title,
    id,
    children1,
    children2,
    children3,
})=> {
    const [Index, setIndex] = useState("no");


    return (
        <div className="bgAccordion">
            <div className="container flex-shrink-0">
                <div className="d-flex flex-column justify-content-center align-item-center p-4 ">
                        {data.map((data)=>{
                            return(
                                <div className='p-4 pb-2 text-center'>
                                    <AccordionUI 
                                        title={data.question}
                                        id={data.id}
                                        children1={data.answer1}
                                        children2={data.answer2}
                                        children3={data.answer3}
                                        index={Index}
                                        setIndex={setIndex}
                                    />
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default Accordion

