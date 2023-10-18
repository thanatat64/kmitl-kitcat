import {Order} from "@/class/Order";
import {KCOrder} from "@/lib/method/KCOrder";
import {NextRequest, NextResponse} from "next/server"

export async function POST(request: NextRequest) {
    try {
        const orderData = await request.json()
        const {id, picture, feedback} = orderData

        let order: Order | null = null;

        if (id != -1)
            order = await KCOrder.get(id)

        // Error Cannot Find Order
        if (order === null)
            return NextResponse.json("ไม่เจอการจองเก่าจากรหัสอ้างอิง", {status: 400})

        // Error Form Empty Fields
        if (feedback === "" || picture === "")
            return NextResponse.json("กรุณากรอกข้อมูลให้ครบถ้วน", {status: 400})

        // Error Field Too Long
        if (feedback.length > 100)
            return NextResponse.json("กรุณากรอกข้อมูลไม่เกินจำนวนตัวอักษรที่กำหนดไว้", {status: 400})

        order.setFeedback(feedback)
        order.setPicture(picture)

        return NextResponse.json(await KCOrder.edit(order), {status: 200})
    } catch (error) {
        console.error("Error : ", error)
        return NextResponse.json(error, {status: 500})
    }
}
