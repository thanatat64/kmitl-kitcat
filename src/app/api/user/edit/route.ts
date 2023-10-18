import {KCUser} from "@/lib/method/KCUser"
import {NextRequest, NextResponse} from "next/server"

export async function POST(request: NextRequest) {
    try {
        const userData = await request.json()
        const {
            id,
            name,
            email,
            passwordOld,
            passwordNew,
            passwordConfirm,
            telephone,
            address1,
            address2,
            address3,
            picture,
            catsitter,
        } = userData

        // Error No User Found
        const user = await KCUser.get(id)
        if (user == null)
            return NextResponse.json("ไม่พบผู้ใช้งานที่จะแก้ไขข้อมูล", {status: 400})

        // Error Form Empty Fields
        if (name === "" || email === "" || telephone === "")
            return NextResponse.json("กรุณากรอกข้อมูลให้ครบถ้วน (ชื่อ, อีเมล, เบอร์โทรศัพท์)", {status: 400})

        // Error Field Too Long
        if (name.length > 50 || email.length > 50 || passwordOld.length > 50 || passwordNew.length > 50 ||
            passwordConfirm.length > 50 || telephone.length > 50 || address1.length > 50 || address2.length > 50 ||
            address3.length > 50)
            return NextResponse.json("กรุณากรอกข้อมูลไม่เกิน 50 ตัวอักษร", {status: 400})

        // Error Password Too Short
        if (passwordOld.length >= 8 && (passwordConfirm.length < 8 || passwordNew.length < 8))
            return NextResponse.json("กรุณากรอกรหัสผ่านใหม่อย่างน้อย 8 ตัวอักษร", {status: 400})

        // Error Phone Number not number
        const containsNonNumbers = isNaN(Number(telephone));
        if (containsNonNumbers)
            return NextResponse.json("กรุณากรอกเบอร์โทรศัพท์แค่ตัวเลข", {status: 400})

        // Error Email Already Exists
        user.setEmail(email)
        const isDuplicatedUser = await KCUser.isDuplicateUser(user)
        if (isDuplicatedUser)
            return NextResponse.json("กรุณากรอกอีเมลอื่นเนื่องจากมีอีเมลนี้อยู่ในระบบแล้ว", {status: 400})

        // Error Password Not Match
        if (passwordOld.length >= 8 && passwordNew != passwordConfirm)
            return NextResponse.json("กรุณายืนยันรหัสผ่านให้ถูกต้อง", {status: 400})

        if (passwordOld.length >= 8 && user.getPassword() != passwordOld)
            return NextResponse.json("กรุณากรอกรหัสผ่านเก่าให้ถูกต้อง", {status: 400})

        if (passwordOld.length >= 8 && user.getPassword() == passwordOld)
            user.setPassword(passwordNew)

        user.setName(name)
        user.setTelephone(telephone)
        user.setAddress1(address1)
        user.setAddress2(address2)
        user.setAddress3(address3)
        user.setPicture(picture)
        user.setCatSitter(catsitter)
        await KCUser.edit(user)

        return NextResponse.json(user, {status: 201})
    } catch (error) {
        console.error("Error : ", error)
        return NextResponse.json(error, {status: 500})
    }
}