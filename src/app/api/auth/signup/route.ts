import {User} from "@/lib/class/User"
import {KCUser} from "@/lib/method/KCUser"
import {NextRequest, NextResponse} from "next/server"

export async function POST(request: NextRequest) {
    try {
        const userData = await request.json()
        const {name, email, password, passwordConfirm, telephone, address} = userData

        // Error Form Empty Fields
        if (name === "" || email === "" || password === "" || passwordConfirm === "" || telephone === "" || address === "")
            return NextResponse.json("กรุณากรอกข้อมูลให้ครบถ้วน", {status: 400})

        // Error Field Too Long
        if (name.length > 100 || email.length > 100 || password.length > 100 || passwordConfirm.length > 100 || telephone.length > 100 || address.length > 100)
            return NextResponse.json("กรุณากรอกข้อมูลไม่เกิน 100 ตัวอักษร", {status: 400})

        // Error Phone Number not number
        const containsNonNumbers = isNaN(Number(telephone));
        console.log(telephone)
        if (containsNonNumbers)
            return NextResponse.json("กรุณากรอกเบอร์โทรศัพท์แค่ตัวเลข", {status: 400})

        // Error Password Too Short
        if (password.length < 8)
            return NextResponse.json("กรุณากรอกรหัสผ่านอย่างน้อย 8 ตัวอักษร", {status: 400})

        // Error Password Doesn't Match
        if (password !== passwordConfirm)
            return NextResponse.json("กรุณายืนยันรหัสผ่านให้ถูกต้อง", {status: 400})

        const user = new User(-1, name, email, password, telephone, address, "", "", "", false)
        const result = await KCUser.add(user)

        // Error Email Already Exists
        if (result == -1)
            return NextResponse.json("อีเมลนี้มีอยู่ในระบบแล้ว", {status: 400})

        return NextResponse.json(result, {status: 201})
    } catch (error) {
        console.error("Error : ", error)
        return NextResponse.json(error, {status: 500})
    }
}