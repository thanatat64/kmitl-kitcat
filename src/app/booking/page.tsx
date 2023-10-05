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
    <div className="flex justify-center">
      <div>

        <div className='p-2'>
          <label htmlFor="checkin" className="block text-sm font-medium text-gray-700">
            Location:
          </label>
          <input
            type="text"
            className="mt-1 p-2 border rounded-md shadow-sm focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 block w-[400px] sm:text-sm border-gray-300"
            placeholder="กรุณาระบุตำแหน่งที่อยู่ของคุณ"
            required
          />
        </div>

        <div className="p-2">
          <label htmlFor="checkin" className="block text-sm font-medium text-gray-700">
            From:
          </label>
          <input
            type="datetime-local"
            id="checkin"
            name="checkin"
            className="mt-1 p-2 border rounded-md shadow-sm focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 block w-[400px] sm:text-sm border-gray-300"
            value={checkInDateTime}
            onChange={handleCheckInChange}
          />
        </div>

        <div className="p-2">
          <label htmlFor="checkout" className="block text-sm font-medium text-gray-700">
            To:
          </label>
          <input
            type="datetime-local"
            id="checkout"
            name="checkout"
            className="mt-1 p-2 border rounded-md shadow-sm focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 block w-[400px] sm:text-sm border-gray-300"
            value={checkOutDateTime}
            onChange={handleCheckOutChange}
            min={checkInDateTime} // Set min attribute to check-in value
          />
        </div>

        <div>
          <input type="checkbox" />
          <span className="ml-2 text-gray-700">Option</span>
        </div>

        <div>
          <input type="checkbox" />
          <span className="ml-2 text-gray-700">Option</span>
        </div>

        <div>
          <input type="checkbox" />
          <span className="ml-2 text-gray-700">Option</span>
        </div>

        <div>
          <input type="checkbox" />
          <span className="ml-2 text-gray-700">Option</span>
        </div>

        <div>
          <input type="checkbox" />
          <span className="ml-2 text-gray-700">Option</span>
        </div>

        <div>
          <input type="checkbox" />
          <span className="ml-2 text-gray-700">Option</span>
        </div>

        <div>
          <label htmlFor="textarea" className="text-sm font-medium text-gray-700">
            Note:
          </label>
          <textarea
            id="textarea"
            name="textarea"
            rows={4}
            className="mt-1 p-2 border rounded-md shadow-sm w-full border-gray-300"
          />
        </div>

        <div>
          700 บาท
        </div>

        <div>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
            ยกเลิก
          </button>
          <Link href="/booking/chooseCatSitter">
            <button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full">
              หาพี่เลี้ยง
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default DateTimeInput;



