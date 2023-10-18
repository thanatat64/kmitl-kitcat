import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import Link from "next/link";
import catTopBg from "../../../../public/image/cat-top-bg.svg";

export default function BannerTopPage() {
    return (
        <div className="bg-[var(--white-cream)]">
            <section className="container flex justify-center py-4">
                <div className="flex flex-col lg:flex-row items-center lg:w-[1200px] md:w-[600px] justify-between">
                    <div className="text-center">
                        <div className="text-[36px] md:text-[52px] lg:text-[64px] font-bold mb-3 text-[var(--navy)] lg:text-left lg:w-[650px]">
                            รักแมวของคุณได้ทุกวัน
                            <br />
                            ไม่ว่าคุณจะอยู่ที่ไหน
                        </div>
                        <div className="text-[24px] md:text-[28px] lg:text-[32px] font-medium mb-4 md:mb-5 text-[var(--navy)] lg:text-left">
                            เราคือพี่เลี้ยงแมวที่คุณไว้วางใจได้มากที่สุด
                        </div>
                        <div className="flex justify-center lg:justify-start pb-3 ">
                            <Link href="/booking" className="w-fit">
                                <button className="bg-[var(--red)] text-[20px] font-medium hover:bg-blue-700 text-white py-2 px-4 rounded-full hover:scale-105 duration-300">
                                    จองบริการ
                                </button>
                            </Link>
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
