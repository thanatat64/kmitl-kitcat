import {KCOrder} from "@/lib/method/KCOrder";
import {NextResponse} from "next/server"

export async function GET() {
    try {
        const result = await KCOrder.getAll()
        return NextResponse.json(result, {status: 200})
    } catch (error) {
        console.error("Error : ", error)
        return NextResponse.json(error, {status: 500})
    }
}