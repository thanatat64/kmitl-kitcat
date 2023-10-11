'use client'

import React, { useState } from "react";
import Modal from "react-modal"
import Image from 'next/image'
import Confirm from "./StatusObject/Confirm";
import ConfirmDone from "./StatusObject/ConfirmDone";
import Working from "./StatusObject/Working";
import WorkingDone from "./StatusObject/WorkingDone";
import Checkout from "./StatusObject/Checkout";
import CheckoutDone from "./StatusObject/CheckoutDone";

const Mystatus: React.FC = () => {

    // const [imageUrl, setImageUrl] = useState(toDoList);
    const [backgroundColor, setBackgroundColor] = useState('bg-[var(--grey)]');
    const [check2, setCheck2] = useState(false)

    // const handleStatusChange = () => {
    //     // Change the image source when the button is clicked
    //     setCheck2(!check2)
    //     setImageUrl(finised); // Update with the new image URL
    //     setBackgroundColor(backgroundColor === 'bg-[var(--grey)]' ? 'bg-[var(--light-blue)]' : 'bg-[var(--grey)]');
    // };

    return (
        <div className="h-auto bg-[var(--cream)] p-4 rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px] shadow-[0_10px_10px_0_rgba(0,0,0,0.15)]"> 
            <div className="flex justify-center flex-col items-center mt-[8rem]">
                <div className="flex flex-col mt-4">
                    <div className="flex flex-row justify-center h-[20rem]">
                        <ConfirmDone/>
                        <WorkingDone/>
                        <CheckoutDone/>
                    </div>
                </div>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-[15rem] mt-[6rem]">Click to Change</button>
            </div>
        </div>
    );
};

export default Mystatus;
