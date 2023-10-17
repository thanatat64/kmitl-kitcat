'use client'

import React, { useState } from "react";
import Modal from "react-modal"
import Image from 'next/image'
import WaitOrder from "./OrderObject/WaitOrder";
import Sitter from "./OrderObject/Sitter";
import WaitForReview from "./OrderObject/WaitForReview";
import OrderDone from "./OrderObject/OrderDone";
import Swal from "sweetalert2";
import { link } from "fs";
import Link from 'next/link';


const SeeOrder: React.FC = () => {

    // const [imageUrl, setImageUrl] = useState(toDoList);
    const [backgroundColor, setBackgroundColor] = useState('bg-[var(--grey)]');
    const [check2, setCheck2] = useState(false)

    const pageStatus = ['n', 'wait', 'working', 'done']

    const [page, setPage] = useState(false)

    const [status, setStatus] = useState(0);
    const handleChangeStatus = () => {
        // ฟังก์ชันนี้เปลี่ยนค่า status เมื่อมีการคลิก
        setStatus(status < 4 ? status + 1 : 0);
    }

    return (
        <div className="bg-[var(--cream)] mx-auto h-[88rem] lg:h-auto w-[300px] md:w-[700px] lg:w-[1300px] rounded-br-[50px] md:rounded-tr-[50px] rounded-bl-[50px] shadow-md mb-5">
            
            <div className="p-4">
                <div className="flex flex-col justify-center  items-center mt-[1rem]">
                    <div className="flex flex-col mt-4">
                        <div className="flex flex-col lg:flex-row lg:justify-center h-[20rem]">
                            {/* <Confirm status={status} /> */}
                            <WaitOrder status={status}/>
                            <Sitter status={status}/>
                            <WaitForReview status={status}/>
                            <OrderDone status={status}/>
                            {/* <Working status={status} />
                            <Checkout status={status} /> */}
                        </div>
                    </div>
                    {/* <input  
                        className="mt-1 border-1 border-black" 
                        type="submit" id="status"
                        name="status"
                        // value={status}
                        /> */}
                    <button onClick={handleChangeStatus} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-[15rem] mt-2">Click to Change</button>
                    {/* <button onClick={showAleart} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[15rem] mt-2">Click aleart</button> */}

                </div>
            </div>
        </div>
    );
};

export default SeeOrder;
