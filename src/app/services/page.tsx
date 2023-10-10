import Link from "next/link";
import CardService from "@/components/cardService/CardService";


export default function Page() {
    return (
        <div className="bg-[var(--white-cream)]">
            <div className="container flex-shrink-0">
                <h1 className="text-center pt-4 pb-4 text-[40px] font-bold text-[var(--navy)]">ค่าบริการ</h1>
                <div className="border-b-[2px] border-[##93A8D6]">
                    <h2 className="text-[32px] font-bold text-[var(--navy)] pt-[10px] pb-[10px]">ค่าบริการรายชั่วโมง</h2>
                </div>
                <div className="flex justify-between">
                    <CardService time="2 ชั่วโมง" price={200} color="blue"/>
                    <CardService time="3 ชั่วโมง" price={300} color="aqua"/>
                    <CardService time="4 ชั่วโมง" price={400} color="yellow"/>
                    <CardService time="5 ชั่วโมง" price={450} color="light-red"/>
                </div>
                <div className="flex justify-center gap-[50px]">
                    <CardService time="6 ชั่วโมง" price={550} color="blue"/>
                    <CardService time="7 ชั่วโมง" price={675} color="aqua"/>
                    <CardService time="8 ชั่วโมง" price={750} color="yellow"/>
                </div>
                <div className="border-b-[2px] border-[##93A8D6]">
                    <h2 className="text-[32px] font-bold text-[var(--navy)] pt-[10px] pb-[10px]">ค่าบริการรายวัน</h2>
                </div>
                <div className="flex justify-center gap-[70px]">
                    <CardService time="1 ชั่วโมง" price={1000} color="blue"/>
                    <CardService time="2 ชั่วโมง" price={2000} color="aqua"/>
                    <CardService time="3 ชั่วโมง" price={2750} color="yellow"/>
                </div>
                <div className="flex justify-center gap-12">
                    <CardService time="4 ชั่วโมง" price={3500} color="light-red"/>
                    <CardService time="5 ชั่วโมง" price={4500} color="blue"/>
                </div>
            </div>
        </div>
    )
}