import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import catBottomBg from "../../../../public/image/cat-bottom-bg.svg";

export default function BannerBottom() {
    return (
        <div className="bg-[var(--white-cream)] w-screen py-4">
            <section className="container flex justify-center">
                <div className="flex flex-col md:flex-row items-center lg:w-[1200px] md:w-[600px]">
                    <div className="mb-4 flex justify-center">
                        <Image className=" w-[320px] md:w-[300px] lg:w-[640px]" src={catBottomBg} alt='catBottomBg' />
                    </div>
                    <div className="flex flex-col md:ml-7 lg:ml-[110px] text-center ">
                        <div className="text-[28px] md:text-[30px] lg:text-[48px] font-bold text-[var(--navy)] md:mt-2 lg:mb-3 md:text-left">
                            มาร่วมเป็นพี่เลี้ยงแมว
                            <br />
                            กับ KitCat
                        </div>
                        <div className="text-[20px] lg:text-[24px] font-medium text-[var(--navy)] lg:mb-3 md:text-left">
                            ผลตอบแทนสูง สมัครได้ง่าย ๆ
                        </div>
                        <div className="text-[20px] lg:text-[24px] font-medium text-[var(--navy)] mb-3 md:mb-2 lg:mb-4 md:text-left">
                            ไม่เสียค่าใช้จ่าย คลิกเลย!
                        </div>
                        <div className="mb-4 flex justify-center md:justify-start">
                            <a href="/findcatsitters" className="w-fit">
                                <button className="bg-[var(--red)] text-[20px] font-medium hover:bg-blue-700 text-white  py-2 px-4 rounded-full hover:scale-105 duration-300">
                                    สมัครเป็นพี่เลี้ยง
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
