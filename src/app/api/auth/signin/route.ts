import { NextRequest, NextResponse } from "next/server"
import { IUser, User } from "@/lib/class/User"
import { KCUser } from "@/lib/method/KCUser"
import { KCToken } from "@/lib/method/KCToken"
import { Token } from "@/lib/class/Token"

export async function POST(request: NextRequest) {
    try {
        const userData = await request.json()
        const { email, password } = userData

        // Error Form Empty Fields
        if (email === "" || password === "")
            return NextResponse.json("กรุณากรอกข้อมูลให้ครบถ้วน", { status: 400 })

        const users = await KCUser.getByEmail(email) as IUser[]

        // Error User Not Exists
        if (users.length === 0)
            return NextResponse.json("อีเมลหรือรหัสผ่านผิดพลาด", { status: 400 })

        const user = users[0]

        // Error Wrong Password
        if (user.password != password)
            return NextResponse.json("อีเมลหรือรหัสผ่านผิดพลาด", { status: 400 })

        KCUser.doSignIn(await KCUser.processObject(user))

        const tokenId = <number>(await KCToken.add(new Token(-1, await KCUser.processObject(user), "")))
        const token = await KCToken.get(tokenId)

        return NextResponse.json(token?.getToken(), { status: 201 })
    } catch (error) {
        console.error("Error : ", error)
        return NextResponse.json(error, { status: 500 })
    }
}