import {Order} from "@/class/Order";
import {Review} from "@/class/Review";
import {KCOrder} from "@/lib/method/KCOrder";
import {KCReview} from "@/lib/method/KCReview";
import {KCUser} from "@/lib/method/KCUser"
import {NextRequest, NextResponse} from "next/server"
import {calculateTotalPrice} from "../../../data";

export async function POST(request: NextRequest) {
    try {
        const reviewData = await request.json()
        const {orderId, review, rating} = reviewData

        let order: Order | null = null;

        if (orderId != -1)
            order = await KCOrder.get(orderId)

        // Error Cannot Find Order
        if (order === null)
            return NextResponse.json("ไม่เจอการจองเก่าจากรหัสอ้างอิง", {status: 400})

        // Error Form Empty Fields
        if (review === "" || rating === 0)
            return NextResponse.json("กรุณากรอกข้อมูลให้ครบถ้วน", {status: 400})

        // Error Field Too Long
        if (review.length > 100)
            return NextResponse.json("กรุณากรอกข้อมูลไม่เกินจำนวนตัวอักษรที่กำหนดไว้", {status: 400})

        const reviewObject = new Review(-1, order.getCatSitter(), order.getOwner(), rating, review)
        const result = await KCReview.add(reviewObject)

        return NextResponse.json(result, {status: 201})
    } catch (error) {
        console.error("Error : ", error)
        return NextResponse.json(error, {status: 500})
    }
}
