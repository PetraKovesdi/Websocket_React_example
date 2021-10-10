import React, {useContext, useState} from 'react';
import { UserContext } from './UserContext';

export const Registration = () => {
    const setUser = useContext(UserContext).setUser;
    const [input, setInput] = useState();


    function registerUser(){
        setUser(input);
        console.log("Registered as ", input);
        let xhr = new XMLHttpRequest();
        xhr.open('GET', `http://127.0.0.1:8080/registration/${input}`);
        xhr.send();
        
    }

    return (
        <div>
            <input onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={registerUser}>Log in/Register</button>
        </div>
    )
}
