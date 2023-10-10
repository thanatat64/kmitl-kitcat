import React from 'react'
import Link from "next/link";
import Image from "next/image";
import heartIcon from "@/image/heartIcon.png";
import ratingIcon from "@/image/ratingIcon.png";
import avatar from "@/image/avatar.png"

interface CardCatSiiterProps{
  name:string;
  rating:number;
  heart:number;
  review:number;
  detail:string;
  color:string;
}

const CardCatSitter: React.FC<CardCatSiiterProps> = ({
  name,
  rating,
  review,
  heart,
  detail,
  color
}) => {
  return (
    <div>
      <div className='w-[330px] h-[489px] bg-white item-center rounded-[20px]'>
        <div className={`w-[330px] h-[137px] bg-[var(--${color})] rounded-t-[20px]`}/>
        <div className='w-[140px] h-[140px] rounded-full mt-[-67px] ml-[90px] bg-white flex justify-center items-end'>
          <Image className="rounded-full" width={120} src={avatar} alt="avatar" />
        </div>
        <div className='w-[274px] h-[171px] bg-white ml-[25px] mt-[25px] text-[20px] font-semibold text-[var(--navy)]'>
            <div className='text-center p-2'>{name}</div>
            <div className=' p-2 flex justify-between items-center border-b-[1px] border-[var(--navy)] mr-2 ml-2'>
              <div>{rating}</div>
              <div><Image width={68} src={ratingIcon} alt="ratingIcon" /></div>
              <div>{heart} รีวิว</div>
              <div><Image width={23} src={heartIcon} alt="hesrtIcon" /></div>
              <div>{review}%</div>
            </div>
            <div className='p-[13px]'>{detail}</div>
        </div>
        <Link href="/booking/conclusion">
            <button className='bottom-0 mt-[14px] w-[330px] h-[69px] rounded-b-[20px] bg-[var(--aqua)] text-white text-[20px] font-semibold'  >เลือกพี่เลี้ยง</button>
        </Link>
      </div>
    </div>
  )
}

export default CardCatSitter
