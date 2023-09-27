import { NextRequest, NextResponse } from 'next/server'
import { User } from '@/lib/class/User';
import { KCUser } from '@/lib/method/KCUser';

export async function POST(request: NextRequest) {
    try {
        const userData = await request.json()
        const {email, password} = userData
        
        const result = await KCUser.getByEmail(email)
        console.log(result[0].password)
        if (result[0].password != password)
            return NextResponse.json('-1', { status: 400 })
        
        return NextResponse.json(result, { status: 201 })
    } catch (error) {
        console.error('Error : ', error)
        return NextResponse.json(error, { status: 500 })
    }
}