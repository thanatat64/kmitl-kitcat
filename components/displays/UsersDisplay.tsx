'use client'

import { User } from "@/lib/class/User"

export default function UsersDisplay(props: any) {
    return (
        <div>
            <h1>Users Display</h1>
            {props.users.length > 0 ? (
                <ul>
                    {props.users.map((user: User) => user ? (
                        <li key={user.getId()}>
                            {user.getId()} - {user.getName()} - {user.getEmail()}
                        </li>
                    ) : <li></li>)}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}