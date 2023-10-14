"use client"
import React, { useState, useEffect } from "react" 
import Footer from "@/components/footer/Footer"
import UserCatSitter from "../../../../public/image/userCatSitter.png" 
import PlaceMarker from "../../../../public/image/placeMarker.png" 
import Calendar from "../../../../public/image/calendar.png" 
import Notes from "../../../../public/image/notes.png" 
import KitCatPromptyPay from "../../../../public/image/kitCatPromptPay.png" 
import AnimationCheck from "../../../../public/image/animationCheck.gif" 
import LessThan from "../../../../public/image/lessThan.png" 
import Image from "next/image" 
import Link from "next/link" 
import Router from "next/router" 

const Page = () => {
  const [isOpenCancel, setIsOpenCancel] = useState(false) 
  const [isSlidingInCancel, setIsSlidingInCancel] = useState(false) 

  const [isOpenAccept, setIsOpenAccept] = useState(false) 
  const [isSlidingInAccept, setIsSlidingInAccept] = useState(false) 

  const [isHovered, setIsHovered] = useState(false) 

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
      console.log("hello")
      setIsOpenAccept(false) 
      setIsSlidingInAccept(false) 
    }, 100000) 
  } 

  const closeModalOfAccept = () => {
    setIsSlidingInAccept(false) 
    setTimeout(() => {
      setIsOpenAccept(false) 
    }, 600) 
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
      <div className="header flex items-center justify-center">
        <Link href="/booking/chooseCatSitter">
        <button className="text-blueText relative border-[3px] border-blueText bg-conclustion font-medium rounded-full px-4 py-2 pl-[150px] pr-[150px] ml-[50px] text-xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
        <span className="absolute left-[3px] top-[7px] pr-1">
          {isHovered && (
            <Image className="w-[30px] h-[30x]" src={LessThan} alt="" />
          )}
        </span>
        <span
          style={{
            transition: "left 0.3s ease-in-out",
            position: "relative",
            left: isHovered ? "7px" : "0",
        }}
      >
          ย้อนกลับ
        </span>
        </button>
        </Link>
        <h1 className="text-center mt-4 mb-4 inline-block pr-96 pl-96 mr-[128px] font-bold text-blueText">สรุปรายการ</h1>
      </div>

      <div className="flex justify-center bg-conclustion">
        <div className="w-[1221px] h-[720px] bg-card content-center mb-5 rounded-t-3xl rounded-b-3xl shadow-xl">
          <div className="flex justify-between">
            {/* ซ้าย */}
            <div className="w-[680px] h-[600px] ml-4 mt-[25px]">
              <div className="flex flex-col">
                <div className="detailCatSitter flex items-center">
                  <Image className="d-flex w-[96px] h-[96px] ml-24 mr-6" src={UserCatSitter} alt="" />
                  <text className="text-xl font-medium text-blueText">สมศรี รักสะอาด</text>
                </div>

                <div className="detailCatSitter flex items-center mt-3.5">
                  <Image className="d-flex w-[32.5px] h-[32.5px] ml-24 mr-6" src={PlaceMarker} alt="" />
                  <text className="text-xl font-medium mt-1 text-blueText">ลาดกระบัง 54 แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร</text>
                </div>

                <div className="detailCatSitter flex items-center mt-3.5">
                  <Image className="d-flex w-[32.5px] h-[32.5px] ml-24 mr-6" src={Calendar} alt="" />
                  <text className="text-xl font-medium mt-1 text-blueText">01 ต.ค. 2023 07:00 ถึง 01 ต.ค. 2023 09:00</text>
                </div>

                <div className="detailCatSitter flex items-center mt-3.5">
                  <Image className="d-flex w-[32.5px] h-[32.5px] ml-24 mr-6" src={Notes} alt="" />
                  <text className="text-xl font-medium mt-1 text-blueText">โน้ตถึงพี่เลี้ยง:</text>
                </div>

                <div className="detailCatSitter flex items-center mt-1">
                  <text className="text-xl font-medium ml-[152px] mr-3 text-blueText mb-[15px]">น้องชื่อจ้มจ้ม ชอบให้ลูบหัว</text>
                </div>

                <div className="detailCatSitter flex items-center mt-2">
                  <text className="text-xl font-medium ml-24 w-[120px] text-blueText">2 ชั่วโมง</text>
                  <text className="text-xl font-medium ml-[230px] w-[120px] text-right text-blueText">400 บาท</text>
                </div>
                <hr className="h-px ml-24 w-[470px] border-1"></hr>

                <div className="detailCatSitter flex items-center mt-px">
                  <text className="text-xl font-medium ml-24 w-[120px] text-blueText">อาบนํ้า</text>
                  <text className="text-xl font-medium ml-[230px] w-[120px] text-right text-blueText">100 บาท</text>
                </div>
                <hr className="h-px ml-24 w-[470px] border-1"></hr>

                <div className="detailCatSitter flex items-center mt-px">
                  <text className="text-xl font-medium ml-24 w-[120px] text-blueText">ตัดเล็บ</text>
                  <text className="text-xl font-medium ml-[230px] w-[120px] text-right text-blueText">100 บาท</text>
                </div>
                <hr className="h-px ml-24 w-[470px] border-1"></hr>

                <div className="detailCatSitter flex items-center mt-px">
                  <text className="text-xl font-medium ml-24 w-[120px] text-blueText">ตัดขน</text>
                  <text className="text-xl font-medium ml-[230px] w-[120px] text-right text-blueText">100 บาท</text>
                </div>
                <hr className="h-px ml-24 w-[470px] border-1"></hr>

                <div className="detailCatSitter flex items-center mt-px">
                  <text className="text-xl font-medium ml-24 w-[120px] text-blueText">ยอดรวม</text>
                  <text className="text-xl font-medium ml-[230px] w-[120px] text-right text-blueText">1700 บาท</text>
                </div>
              </div>
            </div>
            {/* ขวา */}
            <div className="bg-backgroud  w-[480px] h-[600px] mt-[25px] mr-4">
              <Image className="d-flex w-[372px] h-[462px] mt-[74px] ml-[40px] rounded-t-3xl rounded-b-3xl" src={KitCatPromptyPay} alt="" />
            </div>
          </div>
          {/* footer */}
          <div className="flex items-center justify-center bg-backgroud">
            <div id="bottom">
              <button
                onClick={openModalOfCancel}
                className="w-[86px] h-[43px] text-xl font-medium hover:border-[3px] border-blueText mr-[300px] rounded-full text-blueText">ยกเลิก</button>

                <button
                  onClick={openModalOfAccept}
                  className="w-[210px] h-[43px] text-[20px] font-bold shadow-2xl  hover:bg-accept-200 bg-accept-100 rounded-full text-blueText">ยืนยันการจอง</button>

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
                <button className="w-[70px] h-[43px] hover:bg-accept-200 bg-accept-100 text-blueText font-semibold rounded-full mt-[8px] text-center">OK</button>
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
