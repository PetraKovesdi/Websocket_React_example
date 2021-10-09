import React, {useState} from 'react'

export const DisplayUsers = () => {

    const [users, setUsers] =  useState([]);

    function getUsers(){
        fetch("http://127.0.0.1:8080/fetchAllUsers")
        .then(resp=>resp.json())
        .then(data=>{
            console.log(data);
            setUsers([...data])})
    }

    return (
        <div>
            <button onClick={getUsers}>Get all users</button>
            <ul>
                {users.map((user)=>
                    <li key={user}>
                        {user}
                    </li>)}
            </ul>    
        </div>
    )
}
