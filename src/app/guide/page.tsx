import Link from "next/link" 
import CardGuide from "@/components/cardGuide/CardGuide" 
import Card from "@/components/cardHome/CardHome" 
import calendar from "@/image/pickCalendar.png"
import { guides1 } from "../data" 
import { guides2 } from "../data" 

export default function Page() {
    return (
        <section>
            <div className="bg-[var(--white-cream)] text-center">
                <div className="container flex-shrink-0 ">
                    <h1 className="text-center pt-5 pb-4 text-[40px] font-bold text-[var(--navy)]">วิธีการใช้งาน</h1>
                    <div className="border-b-[2px] border-[#93A8D6]">
                        <h2 className="text-[32px] font-bold text-[var(--navy)] pt-[10px] pb-[10px] lg:text-left">การจอง</h2>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col lg:flex-row sm:flex-col lg:gap-12">
                            {guides1.map((item, i) => (
                                <CardGuide
                                    color={item.color}
                                    icon={item.icon}
                                    num={item.num}
                                    descript1={item.descript1}
                                    descript2={item.descript2} />
                            ))}
                        </div>
                    </div>
                    <div className="border-b-[2px] border-[#93A8D6] mt-2">
                        <h2 className="text-[32px] font-bold text-[var(--navy)] pt-[10px] pb-[10px] lg:text-left">ขั้นตอนการบริการ</h2>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col lg:flex-row sm:flex-col lg:gap-12">
                            {guides2.map((item, i) => (
                                <CardGuide
                                    color={item.color}
                                    icon={item.icon}
                                    num={item.num}
                                    descript1={item.descript1}
                                    descript2={item.descript2} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}