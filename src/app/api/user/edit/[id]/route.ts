import { NextRequest, NextResponse } from 'next/server'
import { KCUser } from '@/lib/method/KCUser';

export async function POST(request: NextRequest,context: { params: any }) {
    try {
        const id = context.params.id
        if (!id)
            return NextResponse.json('Missing id parameter', { status: 400 })

        const idNumber = parseInt(id, 10)
        const userData = await request.json()
        const {name, email, telephone } = userData
        const result = await KCUser.editData(idNumber,name,email,telephone)
        if (result==0) return NextResponse.json('Edit successfully.', { status: 201 }) 
        return NextResponse.json('Edit fail.', { status: 400 }) 
    } catch (error) {
        console.error('Error : ', error)
        return NextResponse.json(error, { status: 500 })
    }
}