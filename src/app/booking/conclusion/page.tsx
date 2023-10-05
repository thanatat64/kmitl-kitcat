import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='flex flex-col  bg-red-200 '>
      <h1 className='text-center mt-4 mb-4'>สรุปรายการ</h1>
        <div className='flex justify-center'>
            <div className='w-[1221px] h-[720px]  bg-red-100'>
                <Link href="/mybooking">
                  <button className='w-[210px] h-[43px]  bg-teal-300 text-black'>ยืนยันการจอง</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default page
