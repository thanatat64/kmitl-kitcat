import {Order} from "@/class/Order";
import {KCOrder} from "@/lib/method/KCOrder";
import {KCUser} from "@/lib/method/KCUser"
import {NextRequest, NextResponse} from "next/server"
import {calculateTotalPrice} from "../../../data";

export async function POST(request: NextRequest) {
    try {
        const orderData = await request.json()
        const {id, address, note, additional, datestart, dateend, userId, catsitterId} = orderData

        let order: Order|null = new Order(-1, null, null, "", "", "", "", "", "", 0, 1, "");

        if (id != -1)
            order = await KCOrder.get(id)

        // Error Cannot Find Order
        if (order === null)
            return NextResponse.json("ไม่เจอการจองเก่าจากรหัสอ้างอิง", {status: 400})

        // Error Form Empty Fields
        if (address === "" || datestart === "" || dateend === "" || userId === "")
            return NextResponse.json("กรุณากรอกข้อมูลให้ครบถ้วน", {status: 400})

        // Error Field Too Long
        if (address.length > 100 || note.length > 250)
            return NextResponse.json("กรุณากรอกข้อมูลไม่เกินจำนวนตัวอักษรที่กำหนดไว้", {status: 400})

        const user = await KCUser.get(userId)
        const catsitter = await KCUser.get(catsitterId)

        // Error Cannot Find CatSitter
        if (catsitterId !== -1 && catsitter === null)
            return NextResponse.json("ไม่พบพี่เลี้ยงจากรหัสอ้างอิงที่เป็นเจ้าของการจองครั้งนี้", {status: 400})
        if (catsitterId !== -1)
            order.setCatSitter(catsitter)

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

        order.setOwner(user)
        order.setAddress(address)
        order.setNote(note)
        order.setAdditional(additional.join(","))
        order.setDateStart(datestart)
        order.setDateEnd(dateend)
        order.setTotal(calculateTotalPrice(additional, dateStartObject, dateEndObject))

        if (id === -1)
            return NextResponse.json(await KCOrder.add(order), {status: 201})
        return NextResponse.json(await KCOrder.edit(order), {status: 200})
    } catch (error) {
        console.error("Error : ", error)
        return NextResponse.json(error, {status: 500})
    }
}
