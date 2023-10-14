"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import Image from "next/image";
import toDoList from "@/image/todo.png";
import found from "@/image/foundOrder.png"
import BookingModal from "../../myBooking/BookingModal/BookingModal";

const FoundOrder: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex flex-row justify-center h-[25rem]">
      <div className="flex flex-col items-center w-[12.5rem]">
        <h3 className="mt-3 font-extrabold">พบออเดอร์แล้ว</h3>
        <div className="working w-[12.5rem] h-[12.5rem] rounded-full bg-[var(--light-blue)] border flex justify-center items-center">
          <Image className="ml-4" width={117} src={found} alt="foundOrder" />
        </div>
        
        <div onClick={openModal} className="mt-3 ">
            <p className="text-[var(--navy)] font-bold hover:text-[var(--light-blue)] cursor-pointer">รายละเอียดออเดอร์</p>
        </div>
        <button
          className="bg-neutral-50 hover:bg-[var(--light-blue)] text-black font-bold py-2 px-4 mt-2 rounded-[50px] w-[9rem] border-2 border-[var(--light-blue)] hover:border-white drop-shadow-lg"
        >
          ยืนยัน
        </button>
      </div>

      <Modal isOpen={isModalOpen} className="z-10">
        <BookingModal isOpen={isModalOpen} onClose={closeModal} />
      </Modal>
    </div>
  );
};

export default FoundOrder;
