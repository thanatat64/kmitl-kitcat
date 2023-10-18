"use client"

import PictureDisplay from "@/components/other/PictureDisplay";
import Link from "next/link"
import {useEffect} from "react"
import {useAppContext} from "../context/app"

export default function Page() {
    const {user, authentication} = useAppContext()

    useEffect(() => {
        authentication()
    }, []);

    return (
        <div className="flex justify-center bg-[var(--white-cream)] w-screen">
            <div className="flex flex-col">
                <p className="text-[40px] text-[var(--navy)] font-bold text-center mt-4">โปรไฟล์</p>
                <div className="flex justify-center">
                    <div className="bg-[var(--cream)] w-[300px] md:w-[700px] p-4 lg:w-[1300px] md:p-[50px] lg:m-[20px] rounded-[30px] mb-5 shadow-lg">
                        <div>
                            <div className="flex flex-col">
                                <div>
                                    <div className=" flex flex-col items-center justify-center">
                                        <div className="flex flex-col items-center justify-center">
                                            <PictureDisplay picture={user.picture} isCircle={true} size={20}/>
                                        </div>
                                    </div>
                                    <div className="text-[var(--navy)] text-xl md:text-2xl font-bold mt-4 lg:mt-10 lg:w-10/12 lg:mx-auto py-2 border-b-2 border-[#93A8D6]">
                                        ข้อมูลส่วนตัว
                                    </div>
                                    <div className="flex flex-col items-center lg:w-6/12 ml-5 md:ml-10 lg:mx-auto  mt-3 md:mt-4 lg:pt-4 gap-3">
                                        <div className="flex flex-row w-full">
                                            <label className="md:text-xl lg:text-2xl font-bold text-[var(--blue)]">ชื่อ</label>
                                            <p className="lg:text-2xl ml-5 font-medium text-[var(--navy)]">{user?.name}</p>
                                        </div>
                                        <div className="flex flex-row w-full">
                                            <label className="md:text-xl lg:text-2xl font-bold text-[var(--yellow)]">อีเมล</label>
                                            <p className="lg:text-2xl ml-5 font-medium text-[var(--navy)]">{user?.email}</p>
                                        </div>
                                        <div className="flex flex-row w-full">
                                            <label className="md:text-xl lg:text-2xl font-bold text-[var(--red)]">เบอร์โทรศัพท์</label>
                                            <p className="lg:text-2xl ml-5 font-medium text-[var(--navy)]">{user?.telephone}</p>
                                        </div>
                                        <div className="flex flex-row w-full">
                                            <label className="md:text-xl lg:text-2xl font-bold text-[var(--navy)]">สถานะ</label>
                                            <p className="lg:text-2xl ml-5 font-medium text-[var(--navy)]">{user?.catsitter as unknown as string === "true" ? "เป็นพี่เลี้ยง" : "เป็นคนเลี้ยงแมว"}</p>
                                        </div>
                                    </div>

                                    <div className="text-[var(--navy)] text-xl md:text-2xl font-bold lg:mt-10 lg:w-10/12 lg:mx-auto py-2 border-b-2 border-[#93A8D6]">
                                        สถานที่
                                    </div>
                                    <div className="flex flex-col items-center lg:w-6/12 ml-5 md:ml-10 lg:mx-auto mt-2 md:pt-2 lg:pt-4 gap-2">
                                        <div className="flex flex-row w-full">
                                            <label className="md:text-xl lg:text-2xl font-bold text-[var(--aqua)] md:w-3/12 lg:w-1/2">ตำแหน่งตั้งต้น 1</label>
                                            <p className="lg:text-2xl font-medium text-[var(--navy)] ml-3 md:ml-0">{user?.address1 === "" ? <span>-</span> : user?.address1}</p>
                                        </div>
                                        <div className="flex flex-row w-full">
                                            <label className="md:text-xl lg:text-2xl font-bold text-[var(--aqua)] md:w-3/12 lg:w-1/2">ตำแหน่งตั้งต้น 2</label>
                                            <p className="lg:text-2xl font-medium text-[var(--navy)] ml-3 md:ml-0">{user?.address2 === "" ? <span>-</span> : user?.address2}</p>
                                        </div>
                                        <div className="flex flex-row w-full">
                                            <label className="md:text-xl lg:text-2xl font-bold text-[var(--aqua)] md:w-3/12 lg:w-1/2">ตำแหน่งตั้งต้น 3</label>
                                            <p className="lg:text-2xl font-medium text-[var(--navy)] ml-3 md:ml-0">{user?.address3 === "" ? <span>-</span> : user?.address3}</p>
                                        </div>
                                    </div>

                                    <div className="text-[var(--navy)] text-xl md:text-2xl font-bold lg:mt-10 lg:w-10/12 lg:mx-auto py-2 border-b-2 border-[#93A8D6]">
                                        รหัสผ่าน
                                    </div>

                                    <div className="flex flex-col items-center lg:w-6/12 ml-5 md:ml-10 lg:mx-auto mt-2 md:pt-2 lg:pt-4 gap-3">
                                        <div className="flex flex-row w-full">
                                            <label className="md:text-xl lg:text-2xl font-bold text-[var(--blue)]">รหัสผ่าน</label>
                                            <p className="lg:text-2xl ml-5 font-medium text-[var(--navy)]">********</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-center lg:mt-6">
                                        <Link href="/personal/edit" className="text-xl font-bold text-white bg-[var(--red)] hover:bg-red-500 hover:scale-105 duration-300 px-8 py-2 rounded-full mt-3 mb-3 no-underline">
                                            แก้ไข
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}