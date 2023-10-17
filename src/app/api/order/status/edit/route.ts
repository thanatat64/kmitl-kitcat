import {KCOrder} from "@/lib/method/KCOrder";
import {NextRequest, NextResponse} from "next/server"

export async function POST(request: NextRequest) {
    try {
        const orderData = await request.json()
        const {orderId, newStatus} = orderData

        const order = await KCOrder.get(orderId)

        // Error Cannot Find Order
        if (order === null)
            return NextResponse.json("ไม่เจอการจองเก่าจากรหัสอ้างอิง", {status: 400})

        // Error Unknown Status Number
        if (newStatus < 1 || newStatus > 6)
            return NextResponse.json("รหัสสถานะไม่ถูกต้อง", {status: 400})

        order.setStatus(newStatus)
        return NextResponse.json(await KCOrder.editStatus(order), {status: 200})
    } catch (error) {
        console.error("Error : ", error)
        return NextResponse.json(error, {status: 500})
    }
}
