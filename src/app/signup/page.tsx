'use client'

import Link from 'next/link'
import SignUpForm from '@/components/auth/signup/SignUpForm'
import UsersDisplay from '@/components/displays/UsersDisplay'
import { useEffect, useState } from 'react'
import { User } from '@/lib/class/User'
import { KCPUser } from '@/lib/method/KCPUser'

export default function SignUp() {
    const [users, setUsers] = useState<User[]>([])

    async function fetchUsersData() {
        try {
            const response = await fetch('/api/user/getall')
            const usersData = KCPUser.processObjects(await response.json())
            setUsers(usersData)
        } catch (error) {
            console.error('Error fetching users:', error)
        }
    }

    const updateUserList = (newUser: User) => {
        setUsers([...users, newUser])
    }

    useEffect(() => {
        fetchUsersData()
    }, [])

    return (
        <div>
            <h1>SignUp Form</h1>
            <Link href="/">Back to Home</Link>
            <SignUpForm updateUserList={updateUserList}></SignUpForm>
            <UsersDisplay users={users}></UsersDisplay>
        </div>
    )
}