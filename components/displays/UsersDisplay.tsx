'use client'

import { User } from "@/lib/class/User"

interface UsersDisplayProps {
    users: User[]
}

const UsersDisplay: React.FC<UsersDisplayProps> = ({ users }) => {
    return (
        <div>
            <h4>Users Display (Temporary)</h4>
            {users.length > 0 ? (
                <ul>
                    {users.map((user: User) => user ? (
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

export default UsersDisplay