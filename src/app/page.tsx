"use client";

import { useEffect, useState } from "react"
import { KCPUser } from "@/lib/method/KCPUser"
import { User } from "@/lib/class/User"
import HomePage from "@/components/pages/home/Home";
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
            <UsersDisplay users={users}/>
            <HomePage/>
        </section>
    );
}
