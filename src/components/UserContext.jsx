import React from 'react'
import { createContext, useState } from 'react';


export const UserContext = createContext();

export const UserProvider = (props) => {

    const [user, setUser] = useState("");
    const [selectedUser, setSelectedUser] = useState("");

    return (
        <UserContext.Provider value={{"user": user, "setUser": setUser, "selectedUser": selectedUser, "setSelectedUser": setSelectedUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider;