import { NextResponse, NextRequest } from 'next/server'
import { KCUser } from '@/lib/method/KCUser';

export async function GET(request: NextRequest, context: { params: any } ) {
    try {
        const id = context.params.id
        if (!id)
            return NextResponse.json('Missing id parameter', { status: 400 })

        const idNumber = parseInt(id, 10)
        if (isNaN(idNumber))
            return NextResponse.json('Invalid id parameter', { status: 400 })

        const result = await KCUser.get(idNumber)
        if (!result)
            return NextResponse.json('User not found', { status: 404 })

        return NextResponse.json(result, { status: 200 })
    } catch (error) {
        console.error('Error : ', error)
        return NextResponse.json(error, { status: 500 })
    }
}