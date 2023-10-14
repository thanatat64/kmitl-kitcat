import React from "react";
import CardBookingHistory from "@/components/pages/myBooking/cardBookingHistory/CardBookingHistory";

const BookingHistory: React.FC = () => {
    return (
        <div className="md:rounded-tr-[50px] mb-5 rounded-br-[50px] rounded-bl-[50px] shadow-[0_10px_10px_0px_rgba(0,0,0,0.15)] bg-[var(--cream)] ">
            <div className="flex justify-center">
                <div className="flex flex-col flex-wrap md:mt-[42px] gap-y-6 md:mb-[31px]">
                    <CardBookingHistory
                        name="สมศรี รักสะอาด"
                        rating={4.0}
                        heart={86}
                        review={7}
                        detail="lorem"
                        color="bg-[var(--blue)]"
                    />
                    <CardBookingHistory
                        name="สมศรี รักสะอาด"
                        rating={4.0}
                        heart={86}
                        review={7}
                        detail="lorem"
                        color="bg-[var(--blue)]"
                    />
                </div>
            </div>
        </div>
    );
};

export default BookingHistory;
