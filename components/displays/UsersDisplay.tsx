'use client'

import { useEffect, useState } from 'react';

export default function UsersDisplay(props: any) {
    return (
        <div>
            <h1>Users Display</h1>
            {props.users.length > 0 ? (
                <ul>
                    {props.users.map((user: any) => user ? (
                        <li key={user.id}>
                            {user.id} - {user.name} - {user.email}
                        </li>
                    ) : <li></li>)}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}