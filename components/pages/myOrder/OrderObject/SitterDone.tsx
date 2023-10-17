'use client'

import { FormEvent, useState } from "react"
import { useAppContext } from "src/app/context/app"
import Modal from "react-modal"
import Image from 'next/image'
import work from '@/image/sitter.png'
import finised from '@/image/finish.png'
import { IoClose } from "react-icons/io5"

const SitterDone: React.FC = () => {

    const { user, setUser } = useAppContext()
    const [formData, setFormData] = useState({
        id: user?.id ?? -1,
        picture: user?.picture ?? "",
    })

    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const files = event.target.files
        if (!files)
            return
        const file = files[0]

        const reader = new FileReader()
        reader.onloadend = () => {
            setFormData({ ...formData, picture: reader.result as string })
        }
        reader.readAsDataURL(file)
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-row justify-center h-[20rem]">
            <div className="flex flex-col justify-center">
                <p className="hidden lg:block rotate-90 lg:rotate-0 w-16 h-1 mx-auto lg:my-4 bg-[var(--light-blue)] pb-[0.5rem]"></p>
            </div>
            <div className="flex flex-col items-center w-[12.5rem]">
                <h3 className="mt-3 font-extrabold">กำลังดำเนินการ</h3>
                <div className='working w-[12.5rem] h-[12.5rem] rounded-full bg-[var(--aqua)] border flex justify-center items-center'>
                    <Image width={117} src={work} alt="inprocess" />
                </div>
                <button
                    className="bg-neutral-50 hover:bg-[var(--aqua)] text-black font-bold py-2 px-4 mt-2 rounded-[50px] w-[9rem] border-2 border-[var(--aqua)] hover:border-white drop-shadow-lg"
                    onClick={openModal}
                >
                    ส่งผลลัพธ์
                </button>
            </div>
            <Modal isOpen={isModalOpen} className="z-10">
                <div className="flex justify-center items-center w-screen h-screen">
                    <div className="scale-75 md:scale-100">
                        <div className="bg-white w-[400px] md:w-[500px] h-[550px] p-4 rounded-[20px] shadow">
                            <div className="detailCatSitter  flex justify-between">
                                <div>
                                    <button
                                        onClick={closeModal}
                                        className="flex justify-end text-[var(--navy)] py-2 px-4 rounded "
                                    >
                                        <IoClose size={35} />
                                    </button>
                                </div>
                            </div>
                            <div className="chooseImg flex justify-center">
                                <div className=" flex flex-col items-center justify-center">
                                    <div className="flex flex-col items-center justify-center">
                                        <img
                                            className="mt-4 w-[8rem] h-[8rem] md:w-[12.5rem] md:h-[12.5rem]"
                                            src={formData.picture}
                                            alt="Cat picture"
                                        />
                                        <label className="cursor-pointer border-2 border-[var(--navy)] bg-slate-50 rounded-full py-1 px-3 mt-2 hover:scale-105 duration-300 ">
                                            <span className="text-[var(--navy)] font-medium">Choose a file</span>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={handleFileInputChange}
                                            />
                                        </label>
                                    </div>
                                </div>
                                <Image width={32} src={work} alt="inprocess" />
                            </div>
                            <div className="reviewText mt-2">
                                <form >
                                    <label htmlFor="message" className="block mb-1 mt-1 text-[var(--navy)] font-bold ">ฝากข้อความถึงเจ้าของน้องแมว</label>
                                    <div className="flex flex-col justify-center items-center">
                                        <textarea id="message" rows={3} className="resize-none block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-[#93A8D6]" placeholder="เช่น น้องทานข้าวล่าสุดตอนบ่ายโมงนะคะ"></textarea>
                                        <button
                                            onClick={closeModal}
                                            className="bg-[var(--aqua)] hover:bg-cyan-500 text-[var(--navy)] font-bold py-2 px-4 mt-3 rounded-[50px] w-[9rem] drop-shadow-lg hover:scale-105 duration-300"
                                        >
                                            ยืนยัน
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default SitterDone;