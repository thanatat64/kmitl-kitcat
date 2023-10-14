'use client'

import React, { useState } from "react";
import Modal from "react-modal"
import Image from 'next/image'
import Confirm from "./StatusObject/Confirm";
import Working from "./StatusObject/Working";
import Checkout from "./StatusObject/Checkout";
import Swal from "sweetalert2";
import { link } from "fs";
import Link from 'next/link';


const Mystatus: React.FC = () => {

    // const [imageUrl, setImageUrl] = useState(toDoList);
    const [backgroundColor, setBackgroundColor] = useState('bg-[var(--grey)]');
    const [check2, setCheck2] = useState(false)

    const pageStatus = ['n', 'wait', 'working', 'done']

    const [page, setPage] = useState(false)

    const [status, setStatus] = useState(0);
    const handleChangeStatus = () => {
        // ฟังก์ชันนี้เปลี่ยนค่า status เมื่อมีการคลิก
        setStatus(status < 3 ? status + 1 : 0);
    }

    // const handleStatusChange = () => {
    //     // Change the image source when the button is clicked
    //     setCheck2(!check2)
    //     setImageUrl(finised); // Update with the new image URL
    //     setBackgroundColor(backgroundColor === 'bg-[var(--grey)]' ? 'bg-[var(--light-blue)]' : 'bg-[var(--grey)]');
    // };

    return (
        <div className="bg-[var(--cream)] mx-auto h-[75rem] lg:h-auto w-[300px] md:w-[700px] lg:w-[1300px] rounded-br-[50px] md:rounded-tr-[50px] rounded-bl-[50px] shadow-md mb-5">
            <div className="p-4">
                <div className="flex justify-center flex-col items-center mt-[1rem]">
                    <div className="flex flex-col mt-4">
                        <div className="flex flex-col lg:flex-row justify-center lg:h-[20rem]">
                            <Confirm status={status} />
                            <Working status={status} />
                            <Checkout status={status} />
                        </div>
                    </div>
                    {/* <input  
                    className="mt-1 border-1 border-black" 
                    type="submit" id="status"
                    name="status"
                    // value={status}
                     /> */}
                    <button onClick={handleChangeStatus} className="absolute bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-[15rem]">Click to Change</button>
                    {/* <button onClick={showAleart} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[15rem] mt-2">Click aleart</button> */}

                </div>
            </div>
        </div>
    );
};

export default Mystatus;
