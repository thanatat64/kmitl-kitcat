'use client'

import Link from 'next/link'
import SignUpForm from '@/components/auth/signup/SignUpForm'
import UsersDisplay from '@/components/displays/UsersDisplay'
import { useEffect, useState } from 'react'

export default function SignUp() {
    const [users, setUsers] = useState([])

    async function fetchUsersData() {
        try {
            const response = await fetch('/api/user/getall')
            const userData = await response.json()
            setUsers(userData)
        } catch (error) {
            console.error('Error fetching users:', error)
        }
    }

    const updateUserList = (newUser: never) => {
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