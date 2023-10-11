import "./BannerBottom.css";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import catBottomBg from "../../../../public/image/cat-bottom-bg.svg";

export default function BannerBottom() {
    return (
        <div className="bg-[var(--white-cream)]">
            <section className="container">
                <div className="flex flex-row items-center">

                    <div className="mb-4 flex justify-center">
                        <Image width={650} src={catBottomBg} alt='catBottomBg' />
                    </div>

                    <div className="flex flex-col mx-auto">
                        <div className="lg:text-[48px] font-bold text-[var(--navy)] mb-3">
                            มาร่วมเป็นพี่เลี้ยงแมว
                            <br />
                            กับ KitCat
                        </div>
                        <div className="lg:text-[24px] font-medium text-[var(--navy)] mb-3">
                            ผลตอบแทนสูง สมัครได้ง่าย ๆ
                        </div>
                        <div className="lg:text-[24px] font-medium text-[var(--navy)] mb-4">
                            ไม่เสียค่าใช้จ่าย คลิกเลย!
                        </div>
                        <a href="#" className="w-[193px]">
                            <button className="bg-[var(--red)] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                สมัครเป็นพี่เลี้ยง
                            </button>
                        </a>
                    </div>

                </div>
            </section>
        </div>
    );
}
