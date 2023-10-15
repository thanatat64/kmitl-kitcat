import {NextResponse} from "next/server"

export async function POST() {
    return NextResponse.json("what are you doing here", {status: 405})
}