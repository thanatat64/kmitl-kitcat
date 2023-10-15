import { KCToken } from "@/lib/method/KCToken"
import { KCUser } from "@/lib/method/KCUser"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    try {
        const tokenData = await request.json()
        const { userToken } = tokenData

        // Error Token Not Found
        if (userToken === "")
            return NextResponse.json("ไม่พบรหัสอ้างอิงการเข้าสู่ระบบ", { status: 400 })

        const user = await KCToken.getByToken(userToken)

        // Error User Not Exists
        if (user === null)
            return NextResponse.json("ไม่พบผู้ใช้งานจากรหัสอ้างอิง", { status: 400 })

        KCUser.clearToken(user)

        return NextResponse.json("", { status: 200 })
    } catch (error) {
        console.error("Error : ", error)
        return NextResponse.json(error, { status: 500 })
    }
}