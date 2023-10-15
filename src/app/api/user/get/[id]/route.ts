import {KCUser} from "@/lib/method/KCUser"
import {NextRequest, NextResponse} from "next/server"

export async function GET(_request: NextRequest, context: { params: any }) {
    try {
        const id = context.params.id
        if (!id)
            return NextResponse.json("Missing id parameter", {status: 400})

        const idNumber = parseInt(id, 10)
        if (isNaN(idNumber))
            return NextResponse.json("Invalid id parameter", {status: 400})

        const result = await KCUser.get(idNumber)
        if (result === null)
            return NextResponse.json("User not found", {status: 400})

        return NextResponse.json(result, {status: 200})
    } catch (error) {
        console.error("Error : ", error)
        return NextResponse.json(error, {status: 500})
    }
}