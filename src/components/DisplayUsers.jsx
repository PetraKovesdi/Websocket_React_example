import React, {useState, useContext, useEffect} from 'react'
import { UserContext } from './UserContext';

export const DisplayUsers = () => {

    const [users, setUsers] =  useState([]);
    const [chatPartner, setChatPartner] = useState("");
    const setSelectedUser = useContext(UserContext).setSelectedUser;
    const selectedUser = useContext(UserContext).selectedUser;


    function getUsers(){
        fetch("http://127.0.0.1:8080/fetchAllUsers")
        .then(resp=>resp.json())
        .then(data=>{
            console.log(data);
            setUsers([...data])})
    }

    useEffect(() => {
        setSelectedUser(chatPartner);
        console.log("Wanna chat with " + selectedUser);
    }, [chatPartner, setSelectedUser,selectedUser])



    return (
        <div>
            <button onClick={getUsers}>Get all users</button>
            <ul>
                {users.map((user)=>
                    <li key={user}>
                        <button onClick={(e)=>setChatPartner(user)}>Chat with {user}</button>
                    </li>)}
            </ul>    
        </div>
    )
}
