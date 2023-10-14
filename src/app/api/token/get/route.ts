import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest,context: { params: any }) {
    return NextResponse.json("what are you doing here", { status: 405 })
}