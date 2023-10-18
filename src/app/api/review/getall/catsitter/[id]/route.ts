import {KCOrder} from "@/lib/method/KCOrder";
import {KCReview} from "@/lib/method/KCReview";
import {NextRequest, NextResponse} from "next/server"

export async function GET(_request: NextRequest, context: { params: any }) {
    try {
        const id = context.params.id
        if (!id)
            return NextResponse.json("Missing id parameter", {status: 400})

        const result = await KCReview.getAllByCatSitter(id)
        return NextResponse.json(result, {status: 200})
    } catch (error) {
        console.error("Error : ", error)
        return NextResponse.json(error, {status: 500})
    }
}
