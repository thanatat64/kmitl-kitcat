"use client"

import FindcatsitterBanner from "@/components/findCatSitterBanner/FindCatSitterBanner"

import React from "react"
import {BsLine} from "react-icons/bs"

import {LiaHandPointRight} from "react-icons/lia"
import { useState } from "react";
import  Modal  from "react-modal";
import { IoClose } from "react-icons/io5";
import qrCodeLine from "../../../public/image/qrCodeLine.png";
import Image from "next/image";

const page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal=()=>{
        setIsModalOpen(true);
    }

    const closeModal=()=>{
        setIsModalOpen(false);
    }

    return (
        <div className="bg-[var(--white-cream)]">
            <FindcatsitterBanner />
            <div className="w-[300px] md:w-[700px] lg:w-[1250px] mx-auto">
                <div className="pt-[30px] pb-[40px]">
                    <div>
                        <div className="flex flex-col lg:flex-row  lg:justify-between gap-x-10">
                            <div className="md:w-[400px] lg:w-[600px] h-[530px] shadow-xl bg-white rounded-[20px] mx-auto mb-5">
                                <div className="w-full h-[20px] bg-[var(--blue)] rounded-t-[20px]" />
                                <div className="p-7">
                                    <p className="text-[var(--blue)] text-[24px] font-semibold text-center">สิ่งที่คุณจะได้รับ</p>
                                    <div className="">
                                        <div className="flex h-[35px] my-2 ">
                                            <LiaHandPointRight className="text-[var(--blue)] w-[35px] h-[35px]" />
                                            <p className="text-[18px] lg:text-[20px] font-medium ml-2 text-[var(--navy)] mt-2">ค่าจ้างสูง</p>
                                        </div>
                                        <div className="flex h-[35px] my-2">
                                            <LiaHandPointRight className="text-[var(--blue)] w-[35px] h-[35px]" />
                                            <p className="text-[18px] lg:text-[20px] font-medium ml-2 text-[var(--navy)] mt-2">โบนัสมากมาย</p>
                                        </div>
                                        <div className="flex h-[35px] my-2">
                                            <LiaHandPointRight className="text-[var(--blue)] w-[35px] h-[35px]" />
                                            <p className="text-[18px] lg:text-[20px] font-medium ml-2 text-[var(--navy)] mt-2 w-[200px] md:w-full">ค่าตอบแทนตามผลงาน<br/>(ยิ่งทำงานได้ดีมากเท่าไร
                                                ยิ่งได้รับค่าตอบแทนสูง)</p>
                                        </div>
                                        <div className="flex h-[35px] my-[65px] lg:my-9">
                                            <LiaHandPointRight className="text-[var(--blue)] w-[35px] h-[35px]" />
                                            <p className="text-[18px] lg:text-[20px] font-medium ml-2 text-[var(--navy)] mt-2">การทำงานที่ยืดหยุ่น</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-[400px] lg:w-[600px] h-[600px] md:h-[530px] shadow-xl bg-white rounded-[20px] mx-auto mb-10">
                                <div className="w-full h-[20px] bg-[var(--blue)] rounded-t-[20px]" />
                                <div className="p-7">
                                    <p className="text-[var(--blue)] text-[24px] font-semibold text-center">คุณสมบัติของผู้สมัคร</p>
                                    <div className="">
                                        <div className="flex h-[35px]">
                                            <LiaHandPointRight className="text-[var(--blue)] w-[35px] h-[35px]" />
                                            <p className="text-[18px] lg:text-[20px] font-medium ml-2 text-[var(--navy)] mt-2">มีสัญชาติไทย</p>
                                        </div>
                                        <div className="flex h-[35px] mt-2">
                                            <LiaHandPointRight className="text-[var(--blue)] w-[35px] h-[35px]" />
                                            <p className="text-[18px] lg:text-[20px] font-medium ml-2 text-[var(--navy)] mt-2 w-[200px] md:w-full">ไม่มีประวัติอาชญากรรม<br/>(ไม่มีข้อยกเว้นรวมถึงการพนัน
                                                ฯลฯ)</p>
                                        </div>
                                        <div className="flex h-[35px] my-[60px] md:my-9">
                                            <LiaHandPointRight className="text-[var(--blue)] w-[35px] h-[35px]" />
                                            <p className="text-[18px] lg:text-[20px] font-medium ml-2 text-[var(--navy)] mt-2 w-[200px] md:w-full">สามารถเดินทางไปตามสถานที่ต่าง
                                                ๆ ที่กรุงเทพ นนทบุรี หรือ สมุทรปราการ (ภายในรัศมี 10 กม. จากบ้านคุณ)</p>
                                        </div>
                                        <div className="flex h-[35px] mt-[110px] md:mt-[60px] lg:my-9">
                                            <LiaHandPointRight className="text-[var(--blue)] w-[35px] h-[35px]" />
                                            <p className="text-[18px] lg:text-[20px] font-medium ml-2 text-[var(--navy)] mt-2 w-[200px] md:w-full">ค่าตอบแทนตามผลงาน<br/>(ยิ่งทำงานได้ดีมากเท่าไร
                                                ยิ่งได้รับค่าตอบแทนสูง)</p>
                                        </div>
                                        <div className="flex h-[35px] mt-[60px] md:mt-[60px] lg:mt-10">
                                            <LiaHandPointRight className="text-[var(--blue)] w-[35px] h-[35px]" />
                                            <p className="text-[18px] lg:text-[20px] font-medium ml-2 text-[var(--navy)] mt-2">เลี้ยงแมว</p>
                                        </div>
                                        <div className="flex h-[35px] my-2">
                                            <LiaHandPointRight className="text-[var(--blue)] w-[35px] h-[35px]" />
                                            <p className="text-[18px] lg:text-[20px] font-medium ml-2 text-[var(--navy)] mt-2 w-[200px] md:w-[280px] lg:w-full">สามารถทำงานได้มากกว่า
                                                20 ชั่วโมงต่อสัปดาห์</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-[400px] lg:w-full h-[750px] md:h-[720px] lg:h-[570px] shadow-xl bg-white rounded-[20px] mx-auto">
                            <div className="w-full h-[20px] bg-[var(--blue)] rounded-t-[20px]" />
                            <div className="w-10/12 md:w-3/4 lg:w-1/2 mx-auto py-7">
                                <p className="text-[var(--blue)] text-[24px] font-semibold text-center">วิธีการสมัคร</p>
                                <p className="text-[var(--navy)] text-[20px] font-semibold text-center">กรุณาส่งข้อมูลต่อไปนี้ทาง
                                    LINE: @KitCat</p>
                                <div className="">
                                    <p className="text-[18px] lg:text-[20px] font-medium ml-2 text-[var(--navy)] mt-2">1.
                                        ชื่อและนามสกุล</p>
                                    <p className="text-[18px] lg:text-[20px] font-medium ml-2 text-[var(--navy)] mt-2">2.
                                        เบอร์โทร</p>
                                    <p className="text-[18px] lg:text-[20px] font-medium ml-2 text-[var(--navy)] mt-2">3.
                                        ที่อยู่ปัจจุบันของคุณ</p>
                                    <p className="text-[18px] lg:text-[20px] font-medium ml-2 text-[var(--navy)] mt-2">4.
                                        ประสบการณ์การเลี้ยงแมว (กี่ปี แมวกี่ตัว)</p>
                                    <p className="text-[18px] lg:text-[20px] font-medium ml-2 text-[var(--navy)] mt-2">5.
                                        จำนวนชั่วโมงต่อสัปดาห์ที่คุณต้องการทำงานนี้</p>
                                    <p className="text-[18px] lg:text-[20px] font-medium ml-2 text-[var(--navy)] mt-2">6.
                                        วันในสัปดาห์ที่คุณต้องการทำงาน (เช่น วันหยุด วันธรรมดา ทุกวัน)</p>
                                    <p className="text-[18px] lg:text-[20px] font-medium ml-2 text-[var(--navy)] mt-2">7.
                                        ยืนยันว่าคุณไม่มีประวัติอาชญากรรมใด ๆ</p>
                                </div>
                                <div className="flex justify-center py-3">
                                    <button onClick={openModal} className="flex bg-[var(--red)] text-[20px] hover:bg-[var(--navy)] text-white font-medium py-2 px-4 rounded-full shadow">
                                        <BsLine className="w-[30px] h-[30px] mr-2" />คลิกแอดไลน์
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
    )
}

export default page
