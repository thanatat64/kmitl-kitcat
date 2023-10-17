'use client'

import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import catTopBg from "../../public/image/cat-top-bg.svg";
import qrCodeLine from "../../public/image/qrCodeLine.png";
import { BsLine } from "react-icons/bs"
import { useState } from "react";
import  Modal  from "react-modal";
import { IoClose } from "react-icons/io5";

export default function findcatsitterBanner() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal=()=>{
        setIsModalOpen(true);
    }

    const closeModal=()=>{
        setIsModalOpen(false);
    }

    return (
        <div className="bg-[var(--white-cream)]">
            <section className="container flex justify-center py-4">
                <div className="flex flex-col lg:flex-row items-center lg:w-[1200px] md:w-[600px] justify-between">
                    <div className="text-center">
                        <div className="text-[36px] md:text-[52px] lg:text-[64px] font-bold mb-3 text-[var(--navy)] lg:text-left lg:w-[650px]">
                            รับสมัครพี่เลี้ยงแมว
                            <br />
                            สมัครง่าย รายได้ดี
                        </div>
                        <div className="text-[24px] md:text-[28px] lg:text-[32px] font-medium mb-4 md:mb-5 text-[var(--navy)] lg:text-left">
                            รายได้มากกว่า 20,000 บาทต่อเดือน
                        </div>
                        <div className="flex justify-center lg:justify-start pb-3">
                            <button onClick={openModal} className="flex bg-[var(--red)] text-[20px] hover:bg-[var(--navy)] text-white font-medium py-2 px-4 rounded-full shadow">
                                <BsLine className="w-[30px] h-[30px] mr-2" />คลิกแอดไลน์
                            </button>
                        </div>
                    </div>
                    <div className="my-3 w-[250px] md:w-[300px] lg:w-full flex justify-end">
                        <Image className="imgConfig" src={catTopBg} alt={catTopBg}
                        />
                    </div>
                </div>
            </section>
            <Modal ariaHideApp={false}
            isOpen={isModalOpen}
            className="z-10">
                <div className=" flex justify-center items-center w-screen h-screen">
                    <div className="bg-white w-[280px] h-[380px] md:w-[480px] md:h-[480px] rounded-[20px] shadow flex flex-col">
                        <div className="flex items-center justify-between border-b-2 border-gray-200  px-3">
                            <div className="pt-3 text-[#08c454]"><h3>LINE</h3></div>
                            <div onClick={closeModal}><IoClose size={25}/></div>
                        </div>
                        <div className="flex justify-center items-center h-[210px] md:h-[270px] ">
                            <Image className="w-[160px] md:w-[200px] bg-slate-400 p-1 md:p-5 rounded-[15px] " src={qrCodeLine} alt="" />
                        </div>
                        <div className="flex flex-col">
                            <h5 className="text-center text-base md:text-lg">Add LINE Friends via QR Code</h5>
                            <h6 className="text-gray-400 px-4 text-xs md:text-sm text-center">Open the Friends tab in your LINE app, tap the add friends icon in
                                the top right, select "QR code," and then scan this QR code.</h6>
                        </div>
                    </div>
                </div>

            </Modal>
        </div>
    );
}
