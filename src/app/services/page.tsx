import Link from "next/link";


export default function Page() {
    return (
        <div className="bg-[var(--cream)]">
            <div className="container flex-shrink-0">
                <h1 className="text-center pt-4 pb-4 text-[40px] font-bold text-[var(--navy)]">ค่าบริการ</h1>
                <div className="border-b-[2px] border-[##93A8D6]">
                    <h2 className="text-[32px] font-bold text-[var(--navy)] pt-[10px] pb-[10px]">ค่าบริการรายชั่วโมง</h2>
                </div>
                <div className="pt-[30px] pb-[40px]">
                    <div className="w-[278px] h-[167px] bg-white rounded-[20px]">
                        <div className="w-[278px] h-[70px] bg-[var(--blue)] rounded-t-[20px] flex justify-center items-center">
                            <h3 className="text-[24px] text-[var(--navy)] font-bold">2 ชั่วโมง</h3>
                        </div>
                        <div className="w-[278px] h-[97px] rounded-b-[20px] flex justify-center items-center">
                            <h1 className="text-[40px] text-[var(--navy)]">200 บาท</h1>
                        </div>
                    </div>
                </div>
                <div className="border-b-[2px] border-[##93A8D6]">
                    <h2 className="text-[32px] font-bold text-[var(--navy)] pt-[10px] pb-[10px]">ค่าบริการรายวัน</h2>
                </div>
                <div className="pt-[30px] pb-[40px]">
                    <div className="w-[278px] h-[167px] bg-white rounded-[20px]">
                        <div className="w-[278px] h-[70px] bg-[var(--blue)] rounded-t-[20px] flex justify-center items-center">
                            <h3 className="text-[24px] text-[var(--navy)] font-bold">1 วัน</h3>
                        </div>
                        <div className="w-[278px] h-[97px] rounded-b-[20px] flex justify-center items-center">
                            <h1 className="text-[40px] text-[var(--navy)]">1,000 บาท</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}