import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import catTopBg from "../../public/image/cat-top-bg.svg";
import { BsLine } from "react-icons/bs"

export default function findcatsitterBanner() {
    return (
        <div className="bg-[var(--white-cream)]">
            <section className="container flex justify-center py-4">
                <div className="flex flex-col lg:flex-row items-center lg:w-[1200px] md:w-[600px] justify-between">
                    <div className="text-center">
                        <div className="text-[36px] md:text-[52px] lg:text-[64px] font-bold mb-3 text-[var(--navy)] lg:text-left lg:w-[650px]">
                            รับสมัครพี่เลี้ยงแมว
                            <br />
                            สมัครง่าย รายได้ดี
                        </div>
                        <div className="text-[24px] md:text-[28px] lg:text-[32px] font-medium mb-4 md:mb-5 text-[var(--navy)] lg:text-left">
                            รายได้มากกว่า 20,000 บาทต่อเดือน
                        </div>
                        <div className="flex justify-center lg:justify-start pb-3">
                            <button className="flex bg-[var(--red)] text-[20px] hover:bg-[var(--navy)] text-white font-medium py-2 px-4 rounded-full shadow">
                                <BsLine className="w-[30px] h-[30px] mr-2" />คลิกแอดไลน์
                            </button>
                        </div>
                    </div>
                    <div className="my-3 w-[250px] md:w-[300px] lg:w-full flex justify-end">
                        <Image className="imgConfig" src={catTopBg} alt={catTopBg}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
