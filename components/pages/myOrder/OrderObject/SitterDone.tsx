'use client'

import {IOrder} from "@/class/Order";
import PictureUploader from "@/components/other/PictureUploader"
import work from '@/image/sitter.png'
import Image from 'next/image'
import React, {FormEvent, useState, useEffect} from "react"
import {IoClose} from "react-icons/io5"
import Modal from "react-modal"
import Swal from "sweetalert2"
import {orderStatus} from "../../../../src/app/data";

interface SitterDoneProps {
    handleChangeStatus: any
    currentOrder: IOrder;
}

const SitterDone: React.FC<SitterDoneProps> = ({handleChangeStatus, currentOrder}) => {
    const [completeFormData, setCompleteFormData] = useState({
        id: -1,
        picture: "",
        feedback: "",
    })

    const [uploadPicture, setUploadPicture] = useState(completeFormData.picture)

    const maxFeedbackLength = 100

    const handleChange = (e: React.ChangeEvent<any>) => {
        const {name, value} = e.target

        if (value.length <= maxFeedbackLength) {
            setCompleteFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }))
        } else {
            Swal.fire({
                title: "คำเตือน!",
                text: "โปรดใส่ตัวอักษรไม่เกินจำนวนที่กำหนด",
                icon: "warning",
                confirmButtonText: "รับทราบ"
            })
        }
    }

    useEffect(() => {
        setCompleteFormData({...completeFormData, picture: uploadPicture})
    }, [uploadPicture])

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const response = await fetch("/api/order/status/catsitted", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({...completeFormData, id: currentOrder.id}),
        })
        if (!response.ok) {
            const error = await response.json()

            Swal.fire({
                title: "เกิดข้อผิดพลาด!",
                text: error,
                icon: "error",
                confirmButtonText: "รับทราบ"
            })
        } else {
            handleChangeStatus(orderStatus._4_COMPLETED, "อัปโหลดข้อมูลเรียบร้อย แจ้งให้ลูกค้ารับทราบเรียบร้อย")
        }
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-row justify-center h-[20rem]">
            <div className="flex flex-col justify-center">
                <p className="hidden lg:block rotate-90 lg:rotate-0 w-16 h-1 mx-auto lg:my-4 bg-[var(--light-blue)] pb-[0.5rem]"></p>
            </div>
            <div className="flex flex-col items-center w-[12.5rem]">
                <h3 className="mt-3 font-extrabold">กำลังดำเนินการ</h3>
                <div className='working w-[12.5rem] h-[12.5rem] rounded-full bg-[var(--aqua)] border flex justify-center items-center'>
                    <Image width={117} src={work} alt="inprocess"/>
                </div>
                <button
                    className="bg-neutral-50 hover:bg-[var(--aqua)] text-black font-bold py-2 px-4 mt-2 rounded-[50px] w-[9rem] border-2 border-[var(--aqua)] hover:border-white drop-shadow-lg"
                    onClick={openModal}
                >
                    ส่งผลลัพธ์
                </button>
            </div>
            <Modal ariaHideApp={false} isOpen={isModalOpen} className="z-10">
                <div className="flex justify-center items-center w-screen h-screen">
                    <div className="scale-75 md:scale-100">
                        <div className="bg-white w-[400px] md:w-[500px] h-[570px] p-4 rounded-[20px] shadow">
                            <div className="detailCatSitter  flex justify-between">
                                <div></div>
                                <div>
                                    <button
                                        onClick={closeModal}
                                        className="flex justify-end text-[var(--navy)] py-2 px-4 rounded "
                                    >
                                        <IoClose size={35}/>
                                    </button>
                                </div>
                            </div>
                            <div className="chooseImg flex justify-center mb-3">
                                <div className=" flex flex-col items-center justify-center">
                                    <div className="flex flex-col items-center justify-center">
                                        <PictureUploader picture={uploadPicture} setPicture={setUploadPicture} size={13} isCircle={false}/>
                                    </div>
                                </div>
                            </div>
                            <div className="reviewText mt-2">
                                <form onSubmit={handleSubmit}>
                                    <label htmlFor="feedback" className="block mb-1 mt-1 text-[var(--navy)] font-bold ">ฝากข้อความถึงเจ้าของน้องแมว</label>
                                    <div className="flex flex-col justify-center items-center">
                                        <textarea name="feedback" id="feedback" rows={3} className="resize-none block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-[#93A8D6]" placeholder="เช่น น้องทานข้าวล่าสุดตอนบ่ายโมงนะคะ" onChange={handleChange}></textarea>
                                        <div className="text-end font-bold text-[var(--navy)] ml-[270px] mt-1">
                                            จำนวนตัวอักษร: {completeFormData.feedback.length}/{maxFeedbackLength}
                                        </div>
                                        <button type="submit" className="bg-[var(--aqua)] hover:bg-cyan-500 text-[var(--navy)] font-bold py-2 px-4 mt-3 rounded-[50px] w-[9rem] drop-shadow-lg hover:scale-105 duration-300">
                                            ยืนยัน
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default SitterDone;