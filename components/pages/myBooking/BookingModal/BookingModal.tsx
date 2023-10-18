import {IOrder} from "@/class/Order";
import PictureDisplay from "@/components/other/PictureDisplay";
import Image from "next/image";
import React from "react";
import {IoClose} from "react-icons/io5";
import Calendar from "../../../../public/image/calendar.png";
import Notes from "../../../../public/image/notes.png";
import PlaceMarker from "../../../../public/image/placeMarker.png";
import {priceData} from "../../../../src/app/data";

interface BookingModalProps {
    currentOrder: IOrder
    isOpen: boolean;
    onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({currentOrder, isOpen, onClose}) => {
    if (!isOpen) {
        return null;
    }

    const calculateDurationPoint = (dateStart: any, dateEnd: any) => {
        if (dateStart === dateEnd)
            return {price: 0, msg: 0}
        const durationInHours = Math.ceil((dateEnd.getTime() - dateStart.getTime()) / 3600000);
        const durationInDays = Math.ceil(durationInHours / 24);

        let firstEntry = null
        if (durationInHours <= 8) {
            for (const entry of priceData.hourlyPricing) {
                firstEntry = firstEntry ?? entry
                if (durationInHours == entry.hours)
                    return {price: entry.cost, msg: `${durationInDays} ชั่วโมง`}
            }
            return {price: firstEntry?.cost ?? 0, hour: `${durationInDays} ชั่วโมง`}
        } else if (durationInDays <= 5) {
            for (const entry of priceData.dailyPricing) {
                firstEntry = firstEntry ?? entry
                if (durationInDays == entry.days)
                    return {price: entry.cost, msg: `${durationInDays} วัน`}
            }
            return {price: firstEntry?.cost ?? 0, msg: `${durationInDays} วัน`}
        }
        return {price: 0, msg: 0}
    }

    const additionalOptions = currentOrder?.additional.split(",").map((id) => {
        const option: any = priceData.additionalOptions.find((option: any) => option.id === parseInt(id));
        if (option) {
            return option;
        }
        return {id, name: "Unknown Option", price: 0};
    });

    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="scale-50 md:scale-90 lg:scale-100">
                <div className="bg-white w-[700px] h-[820px] rounded-[20px] shadow z-50 px-24 pt-12">
                    <div className='overflow-auto h-[820px]'>
                        <div className="detailCatSitter flex justify-between ">
                            <div className="absolute right-0">
                                <button
                                    onClick={onClose}
                                    className="flex justify-end text-[var(--navy)] py-2 px-4 mr-8 rounded "
                                >
                                    <IoClose size={35}/>
                                </button>
                            </div>
                        </div>

                        <div className="detailCatSitter flex flex-col md:flex-row items-center my-3">
                            <PictureDisplay picture={currentOrder?.catsitter.picture ?? ""} size={6} isCircle={true}/>
                            <div className="text-xl md:text-2xl font-medium text-blueText md:ml-7 mt-2">{currentOrder?.catsitter?.name ?? "กำลังดึงข้อมูล..."}</div>
                        </div>

                        <div className="detailCatSitter flex items-center mt-3.5">
                            <Image className="d-flex w-[32.5px] h-[32.5px] mr-6" src={PlaceMarker} alt=""/>
                            <div className="md:text-xl font-medium mt-1 text-blueText">{currentOrder?.address ?? "กำลังดึงข้อมูล..."}</div>
                        </div>

                        <div className="detailCatSitter flex items-center mt-3.5">
                            <Image className="d-flex w-[32.5px] h-[32.5px] mr-6" src={Calendar} alt=""/>
                            <div className="md:text-xl font-medium mt-1 text-blueText">{new Date(currentOrder?.dateStart ?? "").toLocaleDateString('th-TH')} {new Date(currentOrder?.dateStart ?? "").toLocaleTimeString('th-TH')} ถึง {new Date(currentOrder?.dateEnd ?? "").toLocaleDateString('th-TH')} {new Date(currentOrder?.dateEnd ?? "").toLocaleTimeString('th-TH')}</div>
                        </div>

                        <div className="detailCatSitter flex items-center mt-3.5">
                            <Image className="d-flex w-[32.5px] h-[32.5px] mr-6" src={Notes} alt=""/>
                            <div className="md:text-xl font-medium mt-1 text-blueText">โน้ตถึงพี่เลี้ยง:</div>
                        </div>

                        <div className="detailCatSitter flex items-center mt-1">
                            <div className="md:text-xl font-medium ml-[55px] mr-3 text-blueText mb-[15px]">{currentOrder?.note ?? "กำลังดึงข้อมูล..."}</div>
                        </div>

                        <div className="detailCatSitter flex justify-between mt-2">
                            <div className="md:text-xl font-medium w-[120px] text-blueText">{calculateDurationPoint(new Date(currentOrder?.dateStart ?? ""), new Date(currentOrder?.dateEnd ?? "")).msg}</div>
                            <div className="md:text-xl font-medium w-[120px] text-right text-blueText">{calculateDurationPoint(new Date(currentOrder?.dateStart ?? ""), new Date(currentOrder?.dateEnd ?? "")).price} บาท</div>
                        </div>
                        <hr/>

                        {additionalOptions?.map((item) => (
                            <div key={item.id} className="detailCatSitter flex justify-between mt-2">
                                <div className="md:text-xl font-medium w-[120px] text-blueText">{item.name}</div>
                                <div className="md:text-xl font-medium w-[120px] text-right text-blueText">{item.price} บาท</div>
                            </div>
                        ))}
                        <hr/>

                        <div className="detailCatSitter flex justify-between">
                            <div className="md:text-xl font-medium text-blueText">ยอดรวม</div>
                            <div className="md:text-xl text-nowrap font-medium text-right text-blueText">{currentOrder?.total ?? "กำลังประมวลผล..."} บาท</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
