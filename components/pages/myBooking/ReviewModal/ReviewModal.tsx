import React, { useState } from "react";
import Modal from "react-modal";
import Image from "next/image";
import toDoList from "@/image/todo.png";
import finised from "@/image/finish.png";
import UserCatSitter from "../../../../public/image/userCatSitter.png";
import PlaceMarker from "../../../../public/image/placeMarker.png";
import Calendar from "../../../../public/image/calendar.png";
import Notes from "../../../../public/image/notes.png";
import tuatueng from '@/image/gameTuatuengIcon.jpg'
import '@/components/pages/myBooking/ReviewModal/ReviewModal.css'
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
      <div className="scale-75 md:scale-100">
        <div className="bg-white w-[400px] md:w-[500px] h-[550px] p-4 rounded-[20px] shadow">
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
                  เกมตัวตึง รักสะอาด
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
          <div className="reviewStar flex flex-row justify-center mt-2 mb-2">
            <form>
              <div className="rate">
                <input type="radio" id="starS5" name="rate" value="5" />
                <label htmlFor="starS5" title="text">5 stars</label>
                <input type="radio" id="starS4" name="rate" value="4" />
                <label htmlFor="starS4" title="text">4 stars</label>
                <input type="radio" id="starS3" name="rate" value="3" />
                <label htmlFor="starS3" title="text">3 stars</label>
                <input type="radio" id="starS2" name="rate" value="2" />
                <label htmlFor="starS2" title="text">2 stars</label>
                <input type="radio" id="starS1" name="rate" value="1" />
                <label htmlFor="starS1" title="text">1 star</label>
              </div>
            </form>
          </div>
          <div className="reviewText">
            <form >
              <label htmlFor="message" className="block mb-1 mt-1 text-[var(--navy)] font-bold ">บอกเราเกี่ยวกับบริการครั้งนี้</label>
              <div className="flex flex-col justify-center items-center">
                <textarea id="message" rows={7} className="resize-none block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-[#93A8D6]" placeholder="เช่น บริการดีมาก"></textarea>
                <button
                  onClick={onClose}
                  className="bg-[var(--aqua)] hover:bg-[var(--aqua)] text-[var(--navy)] font-bold py-2 px-4 mt-3 rounded-[50px] w-[9rem] drop-shadow-lg"
                >
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
