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
        <div className="w-[278px] h-[167px] bg-white rounded-[20px]">
            <div className={`w-[278px] h-[70px] ${color} rounded-t-[20px] flex justify-center items-center`}>
                <h3 className="text-[24px] text-[var(--navy)] font-bold">{time}</h3>
            </div>
            <div className="w-[278px] h-[97px] rounded-b-[20px] flex justify-center items-center">
                <h1 className="text-[40px] text-[var(--navy)]">{price} บาท</h1>
            </div>
        </div>
    </div>
  )
}

export default CardService
