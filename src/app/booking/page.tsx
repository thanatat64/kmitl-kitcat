'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const DateTimeInput: React.FC = () => {
  const [checkInDateTime, setCheckInDateTime] = useState<string>('');
  const [checkOutDateTime, setCheckOutDateTime] = useState<string>('');

  const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckInDateTime(e.target.value);
    if (checkOutDateTime < e.target.value) {
      setCheckOutDateTime(e.target.value);
    }
  };

  const handleCheckOutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckOutDateTime(e.target.value);
    if (e.target.value < checkInDateTime) {
      setCheckInDateTime(e.target.value);
    }
  };

  return (
    <div className="flex justify-center bg-[var(--white-cream)]">
      <div className='flex flex-col'>
        <p className="text-[40px] text-[#000958] font-bold text-center mt-3">จองบริการ</p>
        <div className='bg-[var(--cream)] w-[1200px] pr-[100px] pl-[100px] pt-[50px] pb-[50px] rounded-[30px] mb-5 shadow-lg'>

          <div className='p-2'>
            <label className="block text-[24px] font-semibold text-[#90CCFC]">
              สถานที่
            </label>
            <input
              type="text"
              className="mt-1 p-2 rounded-full w-full shadow-sm border-2 border-[#93A8D6] placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm "
              placeholder="กรุณาระบุตำแหน่งที่อยู่ของคุณ"
              required
            />
          </div>

          <div className='flex'>
            <div className="p-2 mt-4">
              <label className="block text-[24px] font-semibold text-[#5AD6E3]">
                วันที่ / เวลา
              </label>

              <div className='flex'>
                <input
                  type="datetime-local"
                  id="checkin"
                  name="checkin"
                  className="mt-1 p-2 h-[40px] rounded-full shadow-sm border-2 border-[#93A8D6]  ring-1 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 block w-[465px]  sm:text-sm"
                  value={checkInDateTime}
                  onChange={handleCheckInChange}
                />
                <p className='text-[20px] font-medium pl-3 pr-3 text-[var(--navy)] mt-[12px]'>ถึง</p>
                <input
                  type="datetime-local"
                  id="checkout"
                  name="checkout"
                  className="mt-1 p-2 rounded-full shadow-sm border-2 border-[#93A8D6] focus:ring-1 h-[40px] focus:ring-indigo-500 focus:border-indigo-500 block w-[465px] sm:text-sm"
                  value={checkOutDateTime}
                  onChange={handleCheckOutChange}
                  min={checkInDateTime} // Set min attribute to check-in value
                />
              </div>

            </div>
          </div>

          <div className='p-2 mt-2'>
            <label className="block text-[24px] font-semibold text-[#FFC74F]">
              บริการเพิ่มเติม
            </label>

            <div className='flex flex-row justify-between'>
              <div className='flex flex-col'>
                <div>
                  <input type="checkbox" className="w-7 h-7" />
                  <span className="text-[20px] font-medium pl-3 pr-3 text-[var(--navy)]">อาบน้ำ +100 บาท </span>
                </div>

                <div>
                  <input type="checkbox" className="w-7 h-7" />
                  <span className="text-[20px] font-medium pl-3 pr-3 text-[var(--navy)]">ตัดเล็บ +100 บาท </span>
                </div>
              </div>

              <div className='flex flex-col'>
                <div>
                  <input type="checkbox" className="w-7 h-7" />
                  <span className="text-[20px] font-medium pl-3 pr-3 text-[var(--navy)]">พาไปเดินเล่น +50 บาท</span>
                </div>
                <div>
                  <input type="checkbox" className="w-7 h-7" />
                  <span className="text-[20px] font-medium pl-3 pr-3 text-[var(--navy)]">พาไปหาหมอ +100 บาท</span>
                </div>
              </div>

              <div className='flex flex-col'>
                <div>
                  <input type="checkbox" className="w-7 h-7" />
                  <span className="text-[20px] font-medium pl-3 pr-3 text-[var(--navy)]">ตัดขน +100 บาท</span>
                </div>

                <div>
                  <input type="checkbox" className="w-7 h-7" />
                  <span className="text-[20px] font-medium pl-3 pr-3 text-[var(--navy)]">ขนมแมว +50 บาท</span>
                </div>
              </div>
            </div>

          </div>

          <div className='p-2 mt-4'>
            <label className="block text-[24px] font-semibold text-[#FF5A2D]">
              โน้ตถึงพี่เลี้ยง
            </label>
            <textarea
              id="textarea"
              name="textarea"
              rows={4}
              placeholder='เช่น แมวของฉันไม่ชอบให้โดนพุง'
              className="mt-1 p-2 border-2 rounded-md placeholder-gray-400 shadow-sm w-full border-gray-30 border-rose-500"
            />
          </div>

          <div className='p-2 mt-[15px]'>
            <div className='border-2 bg-white rounded border-[#90CCFC] p-2'>
              <div className='flex justify-between'>
                <div className='text-[24px] font-semibold text-[var(--navy)] ml-4'>ยอดรวม</div>
                <div className='text-[24px] font-semibold text-[var(--navy)] mr-4'>700</div>
              </div>
            </div>
          </div>

          <div className='flex justify-around mr-[200px] ml-[200px] mt-[30px]'>
            <button className="bg-[#FF5A2D] hover:bg-red-500 text-white font-bold w-[200px] h-[40px] rounded-full">
              <p className='text-[20px] font-semibold my-auto'>ยกเลิก</p>
            </button>
            <Link href="/booking/chooseCatSitter">
              <button className="bg-[#5AD6E3] hover:bg-cyan-500 text-white font-bold w-[200px] h-[40px] rounded-full">
                <p className='text-[20px] font-semibold my-auto'>หาพี่เลี้ยง</p>
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DateTimeInput;



