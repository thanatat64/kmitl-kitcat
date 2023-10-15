"use client"

import {IToken} from "@/class/Token"
import TokensDisplay from "@/components/displays/TokensDisplay"
import UsersDisplay from "@/components/displays/UsersDisplay"
import HomePage from "@/components/pages/home/Home"
import {IUser} from "@/lib/class/User"
import {useEffect, useState} from "react"

export default function Page() {
    const [users, setUsers] = useState<IUser[]>([])
    const [tokens, setTokens] = useState<IToken[]>([])

    async function fetchUsersData() {
        const response = await fetch("/api/user/getall")
        setUsers(await response.json())
    }

    async function fetchTokensData() {
        const response = await fetch("/api/token/getall")
        setTokens(await response.json())
    }

    useEffect(() => {
        fetchUsersData()
        fetchTokensData()
    }, [])

    return (
        <section>
            <UsersDisplay users={users}/>
            <TokensDisplay tokens={tokens}/>
            <HomePage/>
        </section>
    )
}
