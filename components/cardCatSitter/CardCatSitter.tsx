'use client'

import React, { useState } from "react";
import Modal from "react-modal"
import Link from "next/link";
import Image from "next/image";
import heartIcon from "@/image/heartIcon.png";
import ratingIcon from "@/image/ratingIcon.png";
import avatar from "@/image/avatar.png"
import { IoClose } from "react-icons/io5";


interface CardCatSiiterProps {
  name: string;
  rating: number;
  heart: number;
  review: number;
  detail: string;
  color: string;
  isButton?: number;
}

const CardCatSitter: React.FC<CardCatSiiterProps> = ({
  name,
  rating,
  review,
  heart,
  detail,
  color,
  isButton
}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="hover:scale-105 duration-300">
      <div className={`w-[300px] md:w-[330px] h-[420px] item-center bg-white shadow-xl rounded-[20px] ${isButton && 'h-[489px]'}`}>
        <div onClick={openModal} >
          <div className={`w-[300px] md:w-[330px] h-[137px] ${color} rounded-t-[20px]`} />
          <div className='w-[126px] md:w-[140px] h-[126px] md:h-[140px] rounded-full mt-[-67px] ml-[90px] bg-white flex justify-center items-end'>
            <Image className="rounded-full" width={120} src={avatar} alt="avatar" />
          </div>
          <div className='w-[274px] h-[171px] bg-white ml-[25px] mt-[25px] text-[20px] font-semibold text-[var(--navy)]'>
            <div className='text-center p-2'>{name}</div>
            <div className=' p-2 flex justify-between items-center border-b-[1px] border-[var(--navy)] mr-[20px] ml-0 md:mr-2 md:ml-2'>
              <div>{rating}</div>
              <div><Image width={68} src={ratingIcon} alt="ratingIcon" /></div>
              <div>{review} รีวิว</div>
              <div><Image width={23} src={heartIcon} alt="hesrtIcon" /></div>
              <div>{heart}%</div>
            </div>
            <div className='ml-2 mt-2 md:mt-0 md:p-[13px]'>{detail}</div>
          </div>
        </div>
        {isButton && (
          <Link href="/booking/conclusion">
            <button className='w-[300px] md:w-[330px] bottom-0 mt-[14px] h-[83px] rounded-b-[20px] bg-[var(--aqua)] hover:bg-cyan-400 text-white text-[20px] font-semibold'  >เลือกพี่เลี้ยง</button>
          </Link>
        )}

        <Modal
          isOpen={isModalOpen}
          className="z-10">
          <div className="flex justify-center items-center w-screen h-screen ">
            <div className="bg-white w-[320px] md:w-[600px] md:h-[500px] p-4 rounded-[20px] shadow">
              <div>
                <div className="flex justify-end">
                  <button onClick={closeModal} className="text-[var(--navy)] md:py-2 md:px-4 rounded ">
                    <IoClose size={35} />
                  </button>
                </div>
                <div className="flex flex-col md:flex-row md:mx-auto md:w-fit">
                  <Image className="rounded-full w-[80px] h-[80px] md:w-[120px] md:h-[120px] mx-auto mb-4 md:mb-0" src={avatar} alt="avatar" />
                  <div className="flex justify-center md:pl-[70px] mx-auto">
                    <div className="flex flex-col justify-center">
                      <p className="text-[20px] font-medium text-[var(--navy)] mx-auto md:mx-0">ชื่อ: {name}</p>
                      <div className="flex flex-row mx-auto">
                        <div className="text-[20px] font-medium text-[var(--navy)]">{rating}</div>
                        <div className="p-2"><Image width={68} src={ratingIcon} alt="ratingIcon" /></div>
                        <div className="text-[20px] font-medium text-[var(--navy)] ">{review} รีวิว</div>
                        <div className=" pl-2 pr-2"><Image width={23} src={heartIcon} alt="hesrtIcon" /></div>
                        <div className="text-[20px] font-medium text-[var(--navy)]">{heart}%</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 pb-4 pl-6 md:pl-[50px]">
                  {detail}
                </div>
                {isButton && (
                  <div className="pl-[50px] pr-[50px]">
                    <Link href="/booking/conclusion">
                      <button className='rounded-full bg-[var(--aqua)] text-[var(--navy)] w-full h-[40px] text-[20px] font-semibold'>เลือกพี่เลี้ยง</button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Modal>

      </div>
    </div>
  )
}

export default CardCatSitter
