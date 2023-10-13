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

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose }) => {
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
      <div className="bg-[var(--light-red)] w-[700px] h-[750px] p-4 rounded-[20px] shadow">
        <div className="detailCatSitter  flex justify-between">
          <div className=""></div>
          <div className="felx flex-col pl-[85px]">
            <Image
              className="d-flex w-[150px] h-[150px] mx-auto mr-6"
              src={UserCatSitter}
              alt=""
            />
            <div className="detailCatSitter flex justify-center mt-3.5">
              <text className="text-xl font-medium text-blueText">
                สมศรี รักสะอาด
              </text>
            </div>
          </div>
          <div>
            <button
              onClick={onClose}
              className="flex justify-end text-[var(--navy)] py-2 px-4 rounded "
            >
              <IoClose size={35} />
            </button>
          </div>
        </div>
        <div className=""></div>

        <div className="detailCatSitter flex items-center mt-3.5">
          <Image
            className="d-flex w-[32.5px] h-[32.5px] ml-24 mr-6"
            src={PlaceMarker}
            alt=""
          />
          <text className="text-l font-medium mt-1 text-blueText">
            ลาดกระบัง 54 แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร
          </text>
        </div>

        <div className="detailCatSitter flex items-center mt-3.5">
          <Image
            className="d-flex w-[32.5px] h-[32.5px] ml-24 mr-6"
            src={Calendar}
            alt=""
          />
          <text className="text-l font-medium mt-1 text-blueText">
            01 ต.ค. 2023 07:00 ถึง 01 ต.ค. 2023 09:00
          </text>
        </div>

        <div className="detailCatSitter flex items-center mt-3.5">
          <Image
            className="d-flex w-[32.5px] h-[32.5px] ml-24 mr-6"
            src={Notes}
            alt=""
          />
          <text className="text-l font-medium mt-1 text-blueText">
            โน้ตถึงพี่เลี้ยง: น้องชื่อจ้มจ้ม ชอบให้ลูบหัว
          </text>
        </div>

        <hr className="h-px ml-24 w-[470px] border-1"></hr>
        <div className="detailCatSitter flex items-center mt-2">
          <text className="text-l font-medium ml-[165px] text-blueText">
            การจอง
          </text>
          <text className="text-l font-medium ml-[165px] text-right text-blueText">
            จองบริการรายชั่วโมง
          </text>
        </div>
        <hr className="h-px ml-[165px] w-[360px] border-1"></hr>

        <div className="detailCatSitter flex items-center mt-2">
          <text className="text-l font-medium ml-[165px] w-[120px] text-blueText">
            2 ชั่วโมง
          </text>
          <text className="text-l font-medium ml-[120px] w-[120px] text-right text-blueText">
            400 บาท
          </text>
        </div>
        <hr className="h-px ml-[165px] w-[360px] border-1"></hr>

        <div className="detailCatSitter flex items-center mt-2">
          <text className="text-l font-medium ml-[165px] w-[120px] text-blueText">
            อาบนํ้า
          </text>
          <text className="text-l font-medium ml-[120px] w-[120px] text-right text-blueText">
            100 บาท
          </text>
        </div>
        <hr className="h-px ml-[165px] w-[360px] border-1"></hr>

        <div className="detailCatSitter flex items-center mt-2">
          <text className="text-l font-medium ml-[165px] w-[120px] text-blueText">
            ตัดเล็บ
          </text>
          <text className="text-l font-medium ml-[120px] w-[120px] text-right text-blueText">
            100 บาท
          </text>
        </div>
        <hr className="h-px ml-[165px] w-[360px] border-1"></hr>

        <div className="detailCatSitter flex items-center mt-2">
          <text className="text-l font-medium ml-[165px] w-[120px] text-blueText">
            ตัดขน
          </text>
          <text className="text-l font-medium ml-[120px] w-[120px] text-right text-blueText">
            100 บาท
          </text>
        </div>
        <hr className="h-px ml-[165px] w-[360px] border-1"></hr>

        <div className="detailCatSitter flex items-center mt-2">
          <text className="text-l font-medium ml-[165px] w-[120px] text-blueText">
            ยอดรวม
          </text>
          <text className="text-l font-medium ml-[120px] w-[120px] text-right text-blueText">
            1700 บาท
          </text>
        </div>
        <hr className="h-px ml-[165px] w-[360px] border-1"></hr>
      </div>
    </div>
  );
};

export default ReviewModal;
