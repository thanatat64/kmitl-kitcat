"use client"
import React from "react"
import { useState } from "react" 
import CardCatSitter from "@/components/cardCatSitter/CardCatSitter"
import Link from "next/link"
import LessThan from "../../../../public/image/lessThan.png" 
import Image from "next/image" 


const page = () => {
  const [isHovered, setIsHovered] = useState(false) 

  return (
    <div className="bg-[var(--white-cream)]">
      <div className="container flex-shrink-0">
        <Link href="/booking">
          <button className="text-blueText border-[3px] mt-[50px] border-blueText bg-conclustion font-medium rounded-full px-4 py-2 pl-[150px] pr-[150px] ml-[50px] text-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="absolute left-[3px] top-[7px] pr-1">
              {isHovered && (
                <Image className="w-[30px] h-[30x]" src={LessThan} alt="" />
              )}
            </span>
            <span
              style={{
                transition: "left 0.3s ease-in-out",
                position: "relative",
                left: isHovered ? "7px" : "0",
              }}

            >
              ย้อนกลับ
            </span>
          </button>
        </Link>
        <h1 className="text-center pt-5 mb-5 text-[30px] md:text-[40px] font-bold text-[var(--navy)]">เลือกพี่เลี้ยงของคุณ</h1>
        <div className="flex flex-wrap gap-x-12 gap-y-10 justify-center pb-[100px]">
          <CardCatSitter name="สมศรี รักสะอาด" rating={4.0} heart={86} review={7} detail="lorem" color="bg-[var(--blue)]" isButton={1} />
          <CardCatSitter name="สมศรี รักสะอาด" rating={4.0} heart={86} review={7} detail="lorem" color="bg-[var(--yellow)]" isButton={1} />
          <CardCatSitter name="สมศรี รักสะอาด" rating={4.0} heart={86} review={7} detail="lorem" color="bg-[var(--light-red)]" isButton={1} />
          <CardCatSitter name="สมศรี รักสะอาด" rating={4.0} heart={86} review={7} detail="lorem" color="bg-[var(--blue)]" isButton={1} />
          <CardCatSitter name="สมศรี รักสะอาด" rating={4.0} heart={86} review={7} detail="lorem" color="bg-[var(--yellow)]" isButton={1} />
          <CardCatSitter name="สมศรี รักสะอาด" rating={4.0} heart={86} review={7} detail="lorem" color="bg-[var(--light-red)]" isButton={1} />
        </div>
      </div>
    </div>
  )
}

export default page
