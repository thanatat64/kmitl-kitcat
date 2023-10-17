'use client'

import {IUser} from "@/lib/class/User"

interface ProfileImageProps {
    user: IUser
}

const ProfileImage: React.FC<ProfileImageProps> = ({ user }) => {
    return (
        <div className="me-3 rounded-full overflow-hidden" style={{width: '50px', height: '50px'}}>
            <img src={user.picture} alt="Image" className="h-full w-full object-cover" />
        </div>
    )
}

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
                        <li className="d-flex align-items-center" key={user.id}>
                            {user.picture === "" ? <span></span> : <ProfileImage user={user}/>} {user.id} - {user.name} - {user.email} - {user.password} - {user.catsitter as unknown as string === "true" ? "พี่เลี้ยงแมว" : "คนเลี้ยงแมว"}
                        </li>
                    ) : <li></li>)}
                </ul>
            ) : users.length == 0 ? (<p>บ๋อแบ๋~</p>) : (<p>Loading...</p>)}
        </div>
    )
}

export default UsersDisplay