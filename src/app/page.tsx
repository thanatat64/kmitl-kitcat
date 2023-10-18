"use client"

import {IOrder} from "@/class/Order";
import {IToken} from "@/class/Token"
import HomePage from "@/components/pages/home/Home"
import {IUser} from "@/lib/class/User"
import {useEffect, useState} from "react"

export default function Page() {
    const [users, setUsers] = useState<IUser[]>([])
    const [tokens, setTokens] = useState<IToken[]>([])
    const [orders, setOrders] = useState<IOrder[]>([])

    async function fetchUsersData() {
        const response = await fetch("/api/user/getall")
        setUsers(await response.json())
    }

    async function fetchTokensData() {
        const response = await fetch("/api/token/getall")
        setTokens(await response.json())
    }

    async function fetchOrdersData() {
        const response = await fetch("/api/order/getall")
        setOrders(await response.json())
    }

    useEffect(() => {
        fetchUsersData()
        fetchTokensData()
        fetchOrdersData()
    }, [])

    return (
        <section>
            {/* <UsersDisplay users={users}/> */}
            {/* <TokensDisplay tokens={tokens}/> */}
            {/* <OrderDisplay orders={orders}/> */}
            <HomePage/>
        </section>
    )
}
