import Link from "next/link" 
import CardService from "@/components/cardService/CardService" 

export default function Page() {
    return (
        <div className="bg-[var(--white-cream)]">
            <div className="container flex-shrink-0">
                <h1 className="text-center pt-5 pb-4 text-[40px] font-bold text-[var(--navy)]">ค่าบริการ</h1>
                <div className="border-b-[2px] border-[#93A8D6] text-center">
                    <h2 className="text-[32px] font-bold text-[var(--navy)] pt-[10px] pb-[10px] lg:text-left">ค่าบริการรายชั่วโมง</h2>
                </div>
                <div className="flex justify-center">
                    <div className="flex md:justify-between flex-col md:flex-row md:w-full">
                        <CardService time="2 ชั่วโมง" price={200} color="bg-[var(--blue)]" />
                        <CardService time="3 ชั่วโมง" price={300} color="bg-[var(--aqua)]" />
                        <CardService time="4 ชั่วโมง" price={400} color="bg-[var(--yellow)]" />
                        <CardService time="5 ชั่วโมง" price={450} color="bg-[var(--light-red)]" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-col justify-center md:flex-row md:w-full md:gap-x-[35px] lg:gap-x-[60px]">
                        <CardService time="6 ชั่วโมง" price={550} color="bg-[var(--blue)]" />
                        <CardService time="7 ชั่วโมง" price={675} color="bg-[var(--aqua)]" />
                        <CardService time="8 ชั่วโมง" price={750} color="bg-[var(--yellow)]" />
                    </div>
                </div>
                <div className="border-b-[2px] border-[#93A8D6] text-center">
                    <h2 className="text-[32px] font-bold text-[var(--navy)] pt-[10px] pb-[10px] lg:text-left">ค่าบริการรายวัน</h2>
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-col justify-center md:flex-row md:w-full md:gap-[35px] lg:gap-x-[60px]">
                        <CardService time="1 วัน" price={1000} color="bg-[var(--blue)]" />
                        <CardService time="2 วัน" price={2000} color="bg-[var(--aqua)]" />
                        <CardService time="3 วัน" price={2750} color="bg-[var(--yellow)]" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-col justify-center md:flex-row md:w-full md:gap-x-9 lg:gap-x-[60px]">
                        <CardService time="4 วัน" price={3500} color="bg-[var(--light-red)]" />
                        <CardService time="5 วัน" price={4500} color="bg-[var(--blue)]" />
                    </div>
                </div>

            </div>
        </div>
    )
}