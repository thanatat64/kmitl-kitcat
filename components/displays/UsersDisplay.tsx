'use client'

import { IUser } from "@/lib/class/User"

interface UsersDisplayProps {
    users: IUser[]
}

const UsersDisplay: React.FC<UsersDisplayProps> = ({ users }) => {
    return (
        <div>
            <h4>Users Display</h4>
            {users.length > 0 ? (
                <ul>
                    {users.map((user: IUser) => user ? (
                        <li key={user.id}>
                            {user.id} - {user.name} - {user.email} - {user.password} - {(user.catsitter == true) ? "พี่เลี้ยงแมว" : "คนเลี้ยงแมว"}
                        </li>
                    ) : <li></li>)}
                </ul>
            ) : users.length == 0 ? (<p>บ๋อแบ๋~</p>) : (<p>Loading...</p>)}
        </div>
    )
}

export default UsersDisplay