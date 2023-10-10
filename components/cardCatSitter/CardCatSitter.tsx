import React from 'react'
import Link from "next/link";


const CardCatSitter = () => {
  return (
    <div>
      <div className='w-[330px] h-[489px] bg-white item-center rounded-[20px]'>
        <div className='w-[330px] h-[137px] bg-[var(--blue)] rounded-t-[20px]'/>
        <div className='w-[140px] h-[140px] rounded-full mt-[-67px] ml-[90px] bg-black'/>
        <div className='w-[274px] h-[171px] bg-white ml-[25px] mt-[25px]'>
            <div className='text-center bg-yellow-100 p-2'>name</div>
            <div className='bg-lime-300 p-2'>rating</div>
            <div className='p-2   '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, consequatur.</div>
        </div>
        <Link href="/booking/conclusion">
            <button className='bottom-0 mt-[14px] w-[330px] h-[69px] rounded-b-[20px] bg-[var(--aqua)] text-white text-[20px] font-semibold'  >เลือกพี่เลี้ยง</button>
        </Link>
      </div>
    </div>
  )
}

export default CardCatSitter



