'use client'

import React, { useState } from "react";
import Modal from "react-modal"
import Link from "next/link";
import Image from "next/image";
import heartIcon from "@/image/heartIcon.png";
import ratingIcon from "@/image/ratingIcon.png";
import avatar from "@/image/avatar.png"

interface CardCatSiiterProps {
  name: string;
  rating: number;
  heart: number;
  review: number;
  detail: string;
  color: string;
}

const CardCatSitter: React.FC<CardCatSiiterProps> = ({
  name,
  rating,
  review,
  heart,
  detail,
  color
}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className='w-[330px] h-[489px] bg-white item-center rounded-[20px]'>
        <div onClick={openModal}>
          <div className={`w-[330px] h-[137px] bg-[var(--${color})] rounded-t-[20px]`} />
          <div className='w-[140px] h-[140px] rounded-full mt-[-67px] ml-[90px] bg-white flex justify-center items-end'>
            <Image className="rounded-full" width={120} src={avatar} alt="avatar" />
          </div>
          <div className='w-[274px] h-[171px] bg-white ml-[25px] mt-[25px] text-[20px] font-semibold text-[var(--navy)]'>
            <div className='text-center p-2'>{name}</div>
            <div className=' p-2 flex justify-between items-center border-b-[1px] border-[var(--navy)] mr-2 ml-2'>
              <div>{rating}</div>
              <div><Image width={68} src={ratingIcon} alt="ratingIcon" /></div>
              <div>{review} รีวิว</div>
              <div><Image width={23} src={heartIcon} alt="hesrtIcon" /></div>
              <div>{heart}%</div>
            </div>
            <div className='p-[13px]'>{detail}</div>
          </div>
        </div>
        <Link href="/booking/conclusion">
          <button className='bottom-0 mt-[14px] w-[330px] h-[69px] rounded-b-[20px] bg-[var(--aqua)] text-white text-[20px] font-semibold'  >เลือกพี่เลี้ยง</button>
        </Link>

        <Modal
          isOpen={isModalOpen}
          className="z-10 "
        >
          <div className="flex justify-center">
            <div className="bg-white w-[600px] h-[500px] p-4 rounded shadow">
              <div>

                <div className="flex flex-row pl-[50px]">
                  <Image className="rounded-full" width={120} src={avatar} alt="avatar" />
                  <div className="flex flex-col pl-[70px]">
                    <p className="text-[20px] font-medium text-[var(--navy)]">ชื่อ: {name}</p>
                    <div className="flex flex-row">
                      <div className="text-[20px] font-medium text-[var(--navy)]">{rating}</div>
                      <div className="p-2"><Image width={68} src={ratingIcon} alt="ratingIcon" /></div>
                      <div className="text-[20px] font-medium text-[var(--navy)] ">{review} รีวิว</div>
                      <div className=" pl-2 pr-2"><Image width={23} src={heartIcon} alt="hesrtIcon" /></div>
                      <div className="text-[20px] font-medium text-[var(--navy)]">{heart}%</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 pb-4 pl-[50px]">
                  {detail}
                </div>
                <div className="pl-[50px] pr-[50px]">
                  <Link href="/booking/conclusion">
                    <button className='rounded-full bg-[var(--aqua)] text-[var(--navy)] w-full h-[40px] text-[20px] font-semibold'  >เลือกพี่เลี้ยง</button>
                  </Link>
                </div>
                <button onClick={closeModal} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  X
                </button>
              </div>
            </div>
          </div>
        </Modal>

      </div>
    </div>
  )
}

export default CardCatSitter
