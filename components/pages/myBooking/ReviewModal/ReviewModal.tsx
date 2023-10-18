// import '@/components/pages/myBooking/ReviewModal/ReviewModal.css'
import {IOrder} from "@/class/Order";
import PictureDisplay from "@/components/other/PictureDisplay";
import React, {FormEvent, useEffect, useState} from "react";
import {IoClose} from "react-icons/io5";
import Swal from "sweetalert2";
import {orderStatus} from "../../../../src/app/data";
import RatingStar from "../RatingStar/RatingStar";

interface ReviewModalProps {
    currentOrder: IOrder
    handleChangeStatus: any
    isOpen: boolean;
    onClose: () => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({currentOrder, handleChangeStatus, isOpen, onClose}) => {
    const [starRating, setStarRating] = useState<number>(0);
    const [reviewFormData, setReviewFormData] = useState({
        orderId: -1,
        review: "",
        rating: 0,
    })

    useEffect(() => {
       setReviewFormData({...reviewFormData, rating: starRating})
    }, [starRating])

    const maxReviewLength = 100

    const handleChange = (e: React.ChangeEvent<any>) => {
        const {name, value} = e.target

        if (value.length <= maxReviewLength) {
            setReviewFormData((prevData) => ({
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

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const response = await fetch("/api/review/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({...reviewFormData, orderId: currentOrder.id}),
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
            handleChangeStatus(orderStatus._5_REVIEWED, "ขอบคุณที่ใช้บริการของเราครับ โอกาสหน้าใช้งานใหม่")
        }
    }

    if (!isOpen) {
        return "";
    }

    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="scale-75 md:scale-100">
                <div className="bg-white w-[400px] md:w-[500px] h-[570px] p-4 rounded-[20px] shadow">
                    <div className="detailCatSitter  flex justify-between">
                        <div className=""></div>
                        <div className="felx flex-col pl-[85px]">
                            <div className='d-flex mx-auto mr-6'>
                                <PictureDisplay picture={currentOrder.catsitter.picture} size={9.5} isCircle={true}/>
                            </div>
                            <div className="detailCatSitter flex justify-center mt-3.5">
                                <div className="text-xl font-medium text-blueText">
                                    {currentOrder.catsitter.name}
                                </div>
                            </div>
                        </div>
                        <div>
                            <button
                                onClick={onClose}
                                className="flex justify-end text-[var(--navy)] py-2 px-4 rounded "
                            >
                                <IoClose size={35}/>
                            </button>
                        </div>
                    </div>
                    <RatingStar starRating={starRating} setStarRating={setStarRating}/>
                    <div className="reviewText">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="review" className="block mb-1 mt-1 text-[var(--navy)] font-bold ">บอกเราเกี่ยวกับบริการครั้งนี้</label>
                            <div className="flex flex-col justify-center items-center">
                                <textarea name="review" id="review" rows={7} className="resize-none block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-[#93A8D6]" placeholder="เช่น บริการดีมาก" onChange={handleChange}></textarea>
                                <div className="text-end font-bold text-[var(--navy)] ml-[270px] mt-1">
                                    จำนวนตัวอักษร: {reviewFormData.review.length}/{maxReviewLength}
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
    );
};

export default ReviewModal;
