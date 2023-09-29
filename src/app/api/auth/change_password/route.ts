import { NextRequest, NextResponse } from 'next/server'
import { KCUser } from '@/lib/method/KCUser';

export async function POST(request: NextRequest) {
    try {
        const userData = await request.json()
        const {id,password, newPassword } = userData
        const result = await KCUser.editPassword(id, password, newPassword)
        if (result==-1) return NextResponse.json('Incorrect password.', { status: 400 }) 
        if (result==-2) return NextResponse.json('Please do not use the same password.', { status: 400 }) 
        return NextResponse.json('Password changed.', { status: 201 })
    } catch (error) {
        console.error('Error : ', error)
        return NextResponse.json(error, { status: 500 })
    }
}