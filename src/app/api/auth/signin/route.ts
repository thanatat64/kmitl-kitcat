import {Token} from "@/lib/class/Token"

import {KCToken} from "@/lib/method/KCToken"
import {KCUser} from "@/lib/method/KCUser"
import {NextRequest, NextResponse} from "next/server"

export async function POST(request: NextRequest) {
    try {
        const userData = await request.json()
        const {email, password} = userData

        // Error Form Empty Fields
        if (email === "" || password === "")
            return NextResponse.json("กรุณากรอกข้อมูลให้ครบถ้วน", {status: 400})

        const user = await KCUser.getByEmail(email)

        // Error User Not Exists
        if (user === null)
            return NextResponse.json("อีเมลหรือรหัสผ่านผิดพลาด", {status: 400})

        // Error Wrong Password
        if (user.getPassword() != password)
            return NextResponse.json("อีเมลหรือรหัสผ่านผิดพลาด", {status: 400})

        await KCUser.clearToken(user)

        const tokenId = <number>(await KCToken.add(new Token(-1, user, "")))
        const token = await KCToken.get(tokenId)

        // Error Token Not Found
        if (token === null)
            return NextResponse.json("ไม่พบรหัสอ้างอิงการเข้าสู่ระบบ", {status: 400})

        return NextResponse.json(token, {status: 201})
    } catch (error) {
        console.error("Error : ", error)
        return NextResponse.json(error, {status: 500})
    }
}