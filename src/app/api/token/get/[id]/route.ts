import {KCToken} from "@/lib/method/KCToken"
import {NextRequest, NextResponse} from "next/server"

export async function GET(_request: NextRequest, context: { params: any }) {
    try {
        const id = context.params.id
        if (!id)
            return NextResponse.json("Missing id parameter", {status: 400})

        const result = await KCToken.getByToken(id)
        if (result === null)
            return NextResponse.json(null, {status: 200})

        return NextResponse.json(result, {status: 200})
    } catch (error) {
        console.error("Error : ", error)
        return NextResponse.json(error, {status: 500})
    }
}