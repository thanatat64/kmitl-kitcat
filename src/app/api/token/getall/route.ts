import { NextResponse } from "next/server"
import { KCToken } from "@/lib/method/KCToken"

export async function GET() {
    try {
        const result = await KCToken.getAll()
        return NextResponse.json(result, { status: 200 })
    } catch (error) {
        console.error("Error : ", error)
        return NextResponse.json(error, { status: 500 })
    }
}