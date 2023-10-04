import { NextRequest, NextResponse } from 'next/server'
import { User } from '@/lib/class/User';
import { KCUser } from '@/lib/method/KCUser';

export async function POST(request: NextRequest) {
    try {
        const userData = await request.json()
        const { name, email, password, telephone, address } = userData
        
        const user = new User(-1, name, email, password, telephone, address, false)
        const result = await KCUser.add(user)
        if (result == -1)
            return NextResponse.json('อีเมลนี้มีอยู่ในระบบแล้ว', { status: 400 })
        
        return NextResponse.json(result, { status: 201 })
    } catch (error) {
        console.error('Error : ', error)
        return NextResponse.json(error, { status: 500 })
    }
}