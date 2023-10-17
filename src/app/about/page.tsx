import Link from "next/link"
import Card from "@/components/cardHome/CardHome"
import CardAbout from "@/components/cardAbout/CardAbout"
import CardMember from "@/components/cardMember/CardMember"
import { techStack } from "../data"
import { member } from "../data"

export default function Page() {
    return (
        <section>
            <div className="bg-[var(--white-cream)] text-center pb-5">
                <div className="container flex flex-col justify-center items-center">
                    <h1 className="text-center pt-5 pb-2 text-[40px] font-bold text-[var(--navy)]">เกี่ยวกับเรา</h1>
                    {/* <div className="flex flex-col lg:flex-row mx-auto w-fit lg:w-[1200px] md:justify-between"> */}
                    <div className="grid lg:grid-cols-5 sm:grid-cols-1 md:grid-cols-2 lg:w-[1200px] w-fit">
                        {member.map((item, i) => (
                            <CardMember
                                icon={item.icon}
                                title={item.title}
                                subtitle={item.subtitle}
                                key={i}
                            />
                        ))}
                    </div>
                    <div className="techStack bg-[var(--cream)] rounded-[50px] p-3 lg:p-5 md:p-5 w-[20rem] md:w-[37.5rem] lg:w-[80rem]">
                        <h1 className="text-center pt-5 font-bold text-[var(--navy)]">Tech Stack</h1>
                        <div className="flex flex-col lg:flex-row mx-auto justify-center items-center lg:w-[1200px] md:justify-evenly">
                            {techStack.map((item, i) => (
                                <CardAbout
                                    icon={item.icon}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    key={i}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}