"use client";

import { useEffect, useState } from "react"
import { KCPUser } from "@/lib/method/KCPUser"
import { User } from "@/lib/class/User"
import UsersDisplay from "@/components/displays/UsersDisplay"

export default function Page() {
    const [users, setUsers] = useState<User[]>([]);

    async function fetchUsersData() {
        try {
            const response = await fetch("/api/user/getall");
            const usersData = KCPUser.processObjects(await response.json());
            setUsers(usersData);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }

    useEffect(() => {
        fetchUsersData();
    }, []);

    return (
        <section>
            {/* <h1>Home</h1> */}
            <HomePage />
            {/* <UsersDisplay users={users} /> */}
        </section>
    );
}
