import {IOrder} from "@/class/Order";
import CardBookingHistory from "@/components/pages/myBooking/cardBookingHistory/CardBookingHistory";
import React from "react";

interface BookingHistoryProps {
    orders: IOrder[]
    isCatSitter: boolean
}

const BookingHistory: React.FC<BookingHistoryProps> = ({orders, isCatSitter}) => {
    return (
        <div className="md:rounded-tr-[50px] mb-5 rounded-br-[50px] rounded-bl-[50px] shadow-[0_10px_10px_0px_rgba(0,0,0,0.15)] bg-[var(--cream)] ">
            <div className="flex justify-center">
                <div className="flex flex-col flex-wrap md:mt-[42px] gap-y-6 md:mb-[31px]">
                    {orders && orders.length > 0 ? (
                        <ul>
                            {orders.map((order: IOrder) => order ? (
                                <CardBookingHistory
                                    order={order}
                                    isCatSitter={isCatSitter}
                                />
                            ) : <div></div>)}
                        </ul>
                    ) : orders && orders.length == 0 ? (<p>ไม่เคยทำรายการ</p>) : (<p>Loading...</p>)}
                </div>
            </div>
        </div>
    );
};

export default BookingHistory;
