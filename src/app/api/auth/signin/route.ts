import { NextRequest, NextResponse } from 'next/server'
import { User } from '@/lib/class/User';
import { KCUser } from '@/lib/method/KCUser';
import { KCPUser } from '@/lib/method/KCPUser';

export async function POST(request: NextRequest) {
    try {
        const userData = await request.json()
        const { email, password } = userData
        
        const user = await KCUser.getByEmail(email)
        return NextResponse.json(user, { status: 400 })
    } catch (error) {
        console.error('Error : ', error)
        return NextResponse.json(error, { status: 500 })
    }
}