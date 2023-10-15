import { NextRequest, NextResponse } from "next/server"
import { User } from "@/lib/class/User" 
import { KCUser } from "@/lib/method/KCUser" 

export async function POST(request: NextRequest) {
    try {
        const userData = await request.json()
        const { name, email, password, telephone, address } = userData

        // Error Form Empty Fields
        if (name === "" || email === "" || password === "" || telephone === "" || address === "")
            return NextResponse.json("กรุณากรอกข้อมูลให้ครบถ้วน", { status: 400 })

        // Error Field Too Long
        if (name.length > 50 || email.length > 50 || password.length > 50 || telephone.length > 50 || address.length > 50)
            return NextResponse.json("กรุณากรอกข้อมูลไม่เกิน 50 ตัวอักษร", { status: 400 })

        // Error Password Too Short
        if (password.length < 8)
            return NextResponse.json("กรุณากรอกรหัสผ่านอย่างน้อย 8 ตัวอักษร", { status: 400 })

        const user = new User(-1, name, email, password, telephone, address, "", "", "", false)
        const result = await KCUser.add(user)

        // Error Email Already Exists
        if (result == -1)
            return NextResponse.json("อีเมลนี้มีอยู่ในระบบแล้ว", { status: 400 })

        return NextResponse.json(result, { status: 201 })
    } catch (error) {
        console.error("Error : ", error)
        return NextResponse.json(error, { status: 500 })
    }
}