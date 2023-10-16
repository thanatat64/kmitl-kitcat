"use client"
import React from "react"
import { useState } from "react"
import CardCatSitter from "@/components/cardCatSitter/CardCatSitter"
import Link from "next/link"
import LessThan from "../../../../public/image/lessThan.png"
import Image from "next/image"


const page = () => {
  return (
    <div className="bg-[var(--white-cream)]">
      <div className="container flex-shrink-0">
        <Link href="/booking">
          <button className="text-blueText border-[3px] mt-[50px] border-blueText bg-conclustion font-medium rounded-full px-4 py-2 pl-[150px] pr-[150px] text-xl ml-[40px] md:ml-0">
            ย้อนกลับ
          </button>
        </Link>
        <h1 className="text-center pt-5 mb-5 text-[30px] md:text-[40px] font-bold text-[var(--navy)]">เลือกพี่เลี้ยงของคุณ</h1>
        <div className="flex flex-wrap gap-x-12 gap-y-[60px] justify-center pb-[100px]">
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
