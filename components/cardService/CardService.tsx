import React from 'react'

interface CardServiceProps{
    time:string,
    price:number,
    color:string
}

const CardService: React.FC<CardServiceProps> = ({
    time,
    price,
    color
  }) => {
  return (
    <div className="pt-[30px] pb-[40px]">
        <div className="w-[278px] h-[167px] md:w-[150px] lg:w-[278px] shadow-xl bg-white rounded-[20px]">
            <div className={`w-[278px] h-[70px] md:w-[150px] lg:w-[278px] ${color} rounded-t-[20px] flex justify-center items-center`}>
                <h3 className="text-[24px] text-[var(--navy)] font-bold">{time}</h3>
            </div>
            <div className="w-[278px] h-[97px] md:w-[150px] lg:w-[278px] rounded-b-[20px] flex justify-center items-center">
                <h1 className="text-[40px] md:text-[28px] lg:text-[40px] text-[var(--navy)]">{price} บาท</h1>
            </div>
        </div>
    </div>
  )
}

export default CardService
