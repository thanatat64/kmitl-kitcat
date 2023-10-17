"use client"
import Image from "next/image"
import Link from "next/link"
import React, {useEffect, useState} from "react"
import AnimationCheck from "../../../../public/image/animationCheck.gif"
import Calendar from "../../../../public/image/calendar.png"
import KitCatPromptyPay from "../../../../public/image/kitCatPromptPay.png"
import Notes from "../../../../public/image/notes.png"
import PlaceMarker from "../../../../public/image/placeMarker.png"
import UserCatSitter from "../../../../public/image/userCatSitter.png"

const Page = () => {
  const [isOpenCancel, setIsOpenCancel] = useState(false)
  const [isSlidingInCancel, setIsSlidingInCancel] = useState(false)

  const [isOpenAccept, setIsOpenAccept] = useState(false)
  const [isSlidingInAccept, setIsSlidingInAccept] = useState(false)

  const openModalOfCancel = () => {
    setIsOpenCancel(true)
  }

  const closeModalOfCancel = () => {
    setIsSlidingInCancel(false)
    setTimeout(() => {
      setIsOpenCancel(false)
    }, 300)
  }

  useEffect(() => {
    if (isOpenCancel) {
      setIsSlidingInCancel(true)
    }
  }, [isOpenCancel])

  useEffect(() => {
    if (!isOpenCancel) {
      setIsSlidingInCancel(false)
    }
  }, [isOpenCancel])

  const openModalOfAccept = () => {
    setIsOpenAccept(true)
    setTimeout(() => {
      setIsOpenAccept(false)
      setIsSlidingInAccept(false)
    }, 100000)
  }

  useEffect(() => {
    if (isOpenAccept) {
      setIsSlidingInAccept(true)
    }
  }, [isOpenAccept])

  useEffect(() => {
    if (!isOpenAccept) {
      setIsSlidingInAccept(false)
    }
  }, [isOpenAccept])

  return (
    <div className="flex flex-col bg-conclustion">
      <div className="flex justify-center">
        <div className="w-[300px] md:w-[700px] lg:w-[1300px]">
          <Link href="/booking/chooseCatSitter">
            <button className="text-blueText border-[3px] mt-[50px] border-blueText bg-conclustion font-medium rounded-full px-4 py-2 pl-[150px] pr-[150px] text-xl hover:scale-105 duration-300">
              ย้อนกลับ
            </button>
          </Link>
          <div className="flex justify-center">
            <h1 className="text-center mb-5 inline-block font-bold text-blueText mt-4">สรุปรายการ</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-conclustion mb-3">
        <div className="w-[300px] md:w-[700px] lg:w-[1300px] bg-card content-center mb-5 rounded-t-3xl rounded-b-3xl shadow-xl pb-5">
          <div className="flex flex-col lg:flex-row lg:justify-between">
            {/* ซ้าย */}
            <div className="md:w-[680px] mx-auto">
              <div className="flex flex-col m-4 md:m-10">

                <div className="detailCatSitter flex flex-col md:flex-row items-center my-3">
                  <Image className="flex w-[96px] h-[96px]" src={UserCatSitter} alt="" />
                  <text className="text-xl md:text-2xl font-medium text-blueText md:ml-7 mt-2">สมศรี รักสะอาด</text>
                </div>

                <div className="detailCatSitter flex items-center mt-3.5">
                  <Image className="d-flex w-[32.5px] h-[32.5px] mr-6" src={PlaceMarker} alt="" />
                  <text className="md:text-xl font-medium mt-1 text-blueText">ลาดกระบัง 54 แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร</text>
                </div>

                <div className="detailCatSitter flex items-center mt-3.5">
                  <Image className="d-flex w-[32.5px] h-[32.5px] mr-6" src={Calendar} alt="" />
                  <text className="md:text-xl font-medium mt-1 text-blueText">01 ต.ค. 2023 07:00 ถึง 01 ต.ค. 2023 09:00</text>
                </div>

                <div className="detailCatSitter flex items-center mt-3.5">
                  <Image className="d-flex w-[32.5px] h-[32.5px] mr-6" src={Notes} alt="" />
                  <text className="md:text-xl font-medium mt-1 text-blueText">โน้ตถึงพี่เลี้ยง:</text>
                </div>

                <div className="detailCatSitter flex items-center mt-1">
                  <text className="md:text-xl font-medium ml-[55px] mr-3 text-blueText mb-[15px]">น้องชื่อจ้มจ้ม ชอบให้ลูบหัว</text>
                </div>

                <div className="detailCatSitter flex justify-between mt-2">
                  <text className="md:text-xl font-medium w-[120px] text-blueText">2 ชั่วโมง</text>
                  <text className="md:text-xl font-medium w-[120px] text-right text-blueText">400 บาท</text>
                </div>
                <hr className="h-px border-1"></hr>

                <div className="detailCatSitter flex justify-between mt-px">
                  <text className="md:text-xl font-medium w-[120px] text-blueText">อาบนํ้า</text>
                  <text className="md:text-xl font-medium w-[120px] text-right text-blueText">100 บาท</text>
                </div>
                <hr className="h-px border-1"></hr>

                <div className="detailCatSitter flex justify-between mt-px">
                  <text className="md:text-xl font-medium w-[120px] text-blueText">ตัดเล็บ</text>
                  <text className="md:text-xl font-medium w-[120px] text-right text-blueText">100 บาท</text>
                </div>
                <hr className="h-px border-1"></hr>

                <div className="detailCatSitter flex justify-between mt-px">
                  <text className="md:text-xl font-medium w-[120px] text-blueText">ตัดขน</text>
                  <text className="md:text-xl font-medium w-[120px] text-right text-blueText">100 บาท</text>
                </div>
                <hr className="h-px border-1"></hr>

                <div className="detailCatSitter flex justify-between mt-px">
                  <text className="md:text-xl font-medium w-[120px] text-blueText">ยอดรวม</text>
                  <text className="md:text-xl font-medium w-[120px] text-right text-blueText">1700 บาท</text>
                </div>
              </div>
            </div>
            {/* ขวา */}
            <div className="bg-backgroud w-[300px] h-[400px] md:w-[480px] md:h-[600px] mt-[25px] flex justify-center mx-auto my-auto">
              <Image className="d-flex w-10/12 h-10/12 my-auto md:w-[372px] md:h-[462px] mt-[74px] rounded-t-3xl rounded-b-3xl" src={KitCatPromptyPay} alt="" />
            </div>
          </div>
          {/* footer */}
          <div className="flex items-center justify-center bg-backgroud mt-4">
            <div id="bottom" className="flex flex-row">
              <button
                onClick={openModalOfCancel}
                className="w-[86px] h-[43px] text-xl font-medium hover:border-[3px] border-blueText mr-3 md:mr-[300px] rounded-full text-blueText">ยกเลิก</button>

              <button
                onClick={openModalOfAccept}
                className="w-[160px] md:w-[210px] h-[43px] text-[20px] font-bold shadow-2xl  hover:bg-cyan-500 bg-accept-100 rounded-full text-white hover:scale-105 duration-300">ยืนยันการจอง</button>

            </div>
          </div>
        </div>
      </div>

      {isOpenCancel && (
        <div className={`fixed inset-0 flex items-center justify-center z-10 ${isSlidingInCancel ? "opacity-100" : "opacity-0"} transition-opacity`}>
          <div className="backdrop-filter backdrop-blur-sm absolute inset-0 bg-gray-300 opacity-40"></div>
          {/* ส่วน Modal ที่ Popup */}
          <div className={`modal-container absolute w-[521px] h-[334px] rounded-t-3xl rounded-b-3xl bg-white transform ${isSlidingInCancel ? "translate-y-0" : "translate-y-full"} transition-transform`}>
            <div className="modal-content p-4">
              <text className="font-semibold text-[32px] mt-[40px] ml-[30px] text-blueText">ยกเลิกการจองบริการ</text>
              <text className="font-semibold text-[20px] mt-[30px] ml-[45px] text-blueText">คุณยืนยันที่จะยกเลิกการจองบริการหรือไม่?</text>
            </div>
            {/* ส่วนยกเลิก ยืนยัน */}
            <div className="modal-actions flex justify-center p-4">
              <button
                onClick={closeModalOfCancel}
                className="w-[86px] h-[43px] hover:bg-red-500 bg-red-400 text-blueText font-semibold rounded-full mr-[70px]"
              >ยกเลิก
              </button>
              <Link href="/">
                <button
                  onClick={closeModalOfCancel}
                  className="w-[79px] h-[43px] hover:bg-accept-200 bg-accept-100 text-blueText font-semibold rounded-full"
                >ยืนยัน
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {isOpenAccept && (
        <div className={`fixed inset-0 flex items-center justify-center z-10 ${isSlidingInAccept ? "opacity-100" : "opacity-0"} transition-opacity`}>
          <div className="backdrop-filter backdrop-blur-sm absolute inset-0 bg-gray-300 opacity-40"></div>
          <div className={`modal-container absolute w-[521px] h-[419px] rounded-t-3xl rounded-b-3xl bg-white transform ${isSlidingInAccept ? "translate-y-0" : "translate-y-full"} transition-transform`}>
            <div className="modal-content p-4">
              <text className="font-medium text-[32px] text-center mt-[3px] text-blueText">ชำระเงินเรียบร้อยแล้ว</text>
              <Image className="ml-[130px] w-[226px] h-[226px]" src={AnimationCheck} alt="Your GIF" />
              <text className="font-medium text-[32px] text-center text-blueText">ขอบคุณที่เลือก KitCat</text>
              <div className="flex items-center justify-center">
                <Link href="/mybooking">
                  <button className="w-[70px] h-[43px] hover:bg-cyan-500 bg-accept-100 text-white font-semibold rounded-full mt-[8px] text-center hover:scale-105 duration-300">OK</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Page 
