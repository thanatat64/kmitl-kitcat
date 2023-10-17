import {Order} from "@/class/Order";
import {KCUser} from "@/lib/method/KCUser"
import {NextRequest, NextResponse} from "next/server"
import {calculateTotalPrice} from "../../../data";

export async function POST(request: NextRequest) {
    try {
        const orderData = await request.json()
        const {id, address, note, additional, datestart, dateend, user_id} = orderData

        let order = new Order(-1, null, null, "", "", "", "", "", 0, "", "");

        // Error Form Empty Fields
        if (address === "" || note === "" || /*additional === "" ||*/ datestart === "" || dateend === "" || user_id === "")
            return NextResponse.json("กรุณากรอกข้อมูลให้ครบถ้วน", {status: 400})

        // Error Field Too Long
        if (address.length > 100 || note.length > 250)
            return NextResponse.json("กรุณากรอกข้อมูลไม่เกินจำนวนตัวอักษรที่กำหนดไว้", {status: 400})

        const user = await KCUser.get(user_id)

        // Error Cannot Find User
        if (user === null)
            return NextResponse.json("ไม่พบผู้ใช้งานจากรหัสอ้างอิงที่เป็นเจ้าของการจองครั้งนี้", {status: 400})

        const dateStartObject = new Date(datestart)
        const dateEndObject = new Date(dateend)

        // Error Date Invalid
        if (isNaN(dateStartObject.getTime()) || isNaN(dateEndObject.getTime()))
            return NextResponse.json("วันที่จองมีปัญหากรุณาทำรายการใหม่", {status: 400})

        // Error Date Overlap
        if (dateStartObject >= dateEndObject)
            return NextResponse.json("วันและเวลาที่เริ่มต้นต้องมาก่อนวันและเวลาที่สิ้นสุด", {status: 400})

        order.setAddress(address)
        order.setNote(note)
        order.setAdditional(additional.join(","))
        order.setDateStart(datestart)
        order.setDateEnd(dateend)
        order.setTotal(calculateTotalPrice(additional, dateStartObject, dateEndObject))

        // Error Invalid Old Order ID


        return NextResponse.json("success", {status: 201})
    } catch (error) {
        console.error("Error : ", error)
        return NextResponse.json(error, {status: 500})
    }
}
