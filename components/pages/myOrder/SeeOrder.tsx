'use client'

import {IOrder} from "@/class/Order";
import React from "react";
import OrderDone from "./OrderObject/OrderDone";
import Sitter from "./OrderObject/Sitter";
import WaitForReview from "./OrderObject/WaitForReview";
import WaitOrder from "./OrderObject/WaitOrder";


interface SeeOrderProps {
    handleChangeStatus: any
    currentOrder: IOrder;
}

const SeeOrder: React.FC<SeeOrderProps> = ({currentOrder, handleChangeStatus}) => {
    return (
        <div className="bg-[var(--cream)] mx-auto h-[88rem] lg:h-auto w-[300px] md:w-[700px] lg:w-[1300px] rounded-br-[50px] md:rounded-tr-[50px] rounded-bl-[50px] shadow-md">
            <div className="p-4">
                <div className="flex flex-col justify-center  items-center mt-[1rem]">
                    <div className="flex flex-col mt-4">
                        <div className="flex flex-col lg:flex-row lg:justify-center h-[20rem]">
                            <WaitOrder handleChangeStatus={handleChangeStatus} currentOrder={currentOrder} status={currentOrder.status - 1}/>
                            <Sitter handleChangeStatus={handleChangeStatus} currentOrder={currentOrder} status={currentOrder.status - 1}/>
                            <WaitForReview status={currentOrder.status - 1}/>
                            <OrderDone handleChangeStatus={handleChangeStatus} status={currentOrder.status - 1}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeeOrder;
