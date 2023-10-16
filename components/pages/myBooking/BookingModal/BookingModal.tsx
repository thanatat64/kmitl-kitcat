import React, { useState } from "react";
import Modal from "react-modal";
import Image from "next/image";
import toDoList from "@/image/todo.png";
import finised from "@/image/finish.png";
import UserCatSitter from "../../../../public/image/userCatSitter.png";
import PlaceMarker from "../../../../public/image/placeMarker.png";
import Calendar from "../../../../public/image/calendar.png";
import Notes from "../../../../public/image/notes.png";
import { IoClose } from "react-icons/io5";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(isOpen);
  };

  const closeModal1 = () => {
    setIsModalOpen(isOpen);
  };
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="scale-50 md:scale-90 lg:scale-100">
        <div className="bg-white w-[700px] h-[820px] rounded-[20px] shadow z-50">
          <div className="detailCatSitter flex justify-between ">

            <div className="flex justify-center mx-auto">
              <div className="flex flex-col mt-4">
                <Image
                  className="flex w-[150px] h-[150px] mx-auto mr-6"
                  src={UserCatSitter}
                  alt=""
                />
                <div className="detailCatSitter flex justify-center mt-3.5">
                  <text className="text-4xl md:text-2xl font-medium text-blueText">
                    สมศรี รักสะอาด
                  </text>
                </div>
              </div>
            </div>

            <div className="absolute right-0">
              <button
                onClick={onClose}
                className="flex justify-end text-[var(--navy)] py-2 px-4 rounded "
              >
                <IoClose size={35} />
              </button>
            </div>

          </div>

          <div className="ml-5">
            <div className="detailCatSitter flex items-center mt-3.5 mr-5">
              <Image
                className="d-flex w-[32.5px] h-[32.5px] ml-24 mr-6"
                src={PlaceMarker}
                alt=""
              />
              <text className="text-xl font-medium mt-1 text-blueText w-[400px]">
                ลาดกระบัง 54 แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร
              </text>
            </div>

            <div className="detailCatSitter flex items-center mt-3.5">
              <Image
                className="d-flex w-[32.5px] h-[32.5px] ml-24 mr-6"
                src={Calendar}
                alt=""
              />
              <text className="text-xl font-medium mt-1 text-blueText">
                01 ต.ค. 2023 07:00 ถึง 01 ต.ค. 2023 09:00
              </text>
            </div>

            <div className="detailCatSitter flex items-center mt-3.5">
              <Image
                className="d-flex w-[32.5px] h-[32.5px] ml-24 mr-6"
                src={Notes}
                alt=""
              />
              <text className="text-xl font-medium mt-1 text-blueText">
                โน้ตถึงพี่เลี้ยง: น้องชื่อจ้มจ้ม ชอบให้ลูบหัว
              </text>
            </div>
          </div>

          <hr className="h-px mx-auto w-[470px] border-3 md:border-1"></hr>
          <div className="detailCatSitter flex items-center mt-2">
            <text className="text-xl font-medium ml-[165px] text-blueText">
              การจอง
            </text>
            <text className="text-xl font-medium ml-[120px] text-right text-blueText">
              จองบริการรายชั่วโมง
            </text>
          </div>
          <hr className="h-px ml-[165px] w-[360px] border-3 md:border-1"></hr>

          <div className="detailCatSitter flex items-center mt-2">
            <text className="text-xl font-medium ml-[165px] w-[120px] text-blueText">
              2 ชั่วโมง
            </text>
            <text className="text-xl font-medium ml-[120px] w-[120px] text-right text-blueText">
              400 บาท
            </text>
          </div>
          <hr className="h-px ml-[165px] w-[360px] border-3 md:border-1"></hr>

          <div className="detailCatSitter flex items-center mt-2">
            <text className="text-xl font-medium ml-[165px] w-[120px] text-blueText">
              อาบนํ้า
            </text>
            <text className="text-xl font-medium ml-[120px] w-[120px] text-right text-blueText">
              100 บาท
            </text>
          </div>
          <hr className="h-px ml-[165px] w-[360px] border-3 md:border-1"></hr>

          <div className="detailCatSitter flex items-center mt-2">
            <text className="text-xl font-medium ml-[165px] w-[120px] text-blueText">
              ตัดเล็บ
            </text>
            <text className="text-xl font-medium ml-[120px] w-[120px] text-right text-blueText">
              100 บาท
            </text>
          </div>
          <hr className="h-px ml-[165px] w-[360px] border-3 md:border-1"></hr>

          <div className="detailCatSitter flex items-center mt-2">
            <text className="text-xl font-medium ml-[165px] w-[120px] text-blueText">
              ตัดขน
            </text>
            <text className="text-xl font-medium ml-[120px] w-[120px] text-right text-blueText">
              100 บาท
            </text>
          </div>
          <hr className="h-px ml-[165px] w-[360px] border-3 md:border-1"></hr>

          <div className="detailCatSitter flex items-center mt-2">
            <text className="text-xl font-medium ml-[165px] w-[120px] text-blueText">
              ยอดรวม
            </text>
            <text className="text-xl font-medium ml-[120px] w-[120px] text-right text-blueText">
              1700 บาท
            </text>
          </div>
          <hr className="h-px ml-[165px] w-[360px] border-3 md:border-1"></hr>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
