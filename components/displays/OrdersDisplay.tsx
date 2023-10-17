'use client'

import { IOrder } from "@/lib/class/Order"
import {orderStatusMeaning} from "../../src/app/data";

interface OrderDisplayProps {
    orders: IOrder[]
}

const OrderDisplay: React.FC<OrderDisplayProps> = ({ orders }) => {
    return (
        <div>
            <h4>Orders Display</h4>
            {orders.length > 0 ? (
                <ul>
                    {orders.map((order: IOrder) => order ? (
                        <li key={order.id}>
                            {order.id} - สถานะ: {orderStatusMeaning[order.status as any - 1]} - คนจอง: {order.owner?.name ?? "ไม่ควรไม่มีมึงทำเหี้ยไรพังเนี่ย"} - พี่เลี้ยง: {order.catsitter?.name ?? "ยังไม่มี"} - ฿{order.total}
                        </li>
                    ) : <li></li>)}
                </ul>
            ) : orders.length == 0 ? (<p>บ๋อแบ๋~</p>) : (<p>Loading...</p>)}
        </div>
    )
}

export default OrderDisplay