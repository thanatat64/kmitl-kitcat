'use client'

import {IOrder} from "@/class/Order";
import React from "react";
import Checkout from "./StatusObject/Checkout";
import Confirm from "./StatusObject/Confirm";
import Working from "./StatusObject/Working";


interface MyStatusProps {
    handleChangeStatus: any
    currentOrder: IOrder;
}

const Mystatus: React.FC<MyStatusProps> = ({currentOrder, handleChangeStatus}) => {
    return (
        <div className="bg-[var(--cream)] mx-auto h-[75rem] lg:h-[450px] w-[300px] md:w-[700px] lg:w-[1300px] rounded-br-[50px] md:rounded-tr-[50px] rounded-bl-[50px] shadow-md">
            <div className="p-4">
                <div className="flex justify-center flex-col items-center mt-[1rem]">
                    <div className="flex flex-col mt-4">
                        <div className="flex flex-col lg:flex-row justify-center lg:h-[20rem]">
                            <Confirm currentOrder={currentOrder} status={currentOrder.status - 1}/>
                            <Working status={currentOrder.status - 1}/>
                            <Checkout currentOrder={currentOrder} handleChangeStatus={handleChangeStatus} status={currentOrder.status - 1}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mystatus;
