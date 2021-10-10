import React, {useContext,useEffect, useState} from 'react';
import { UserContext } from './UserContext';

export const Greeting = () => {

    const user = useContext(UserContext).user;
    const [userDisplayed, setUserDisplayed] = useState("");

    let isLoggedIn = userDisplayed === "" ? false : true; 
    

    useEffect(() => {
        setUserDisplayed(user);
        console.log("Welcome, " , userDisplayed);
        
    }, [user, setUserDisplayed, userDisplayed])

    return (
        <div>
            {isLoggedIn ? 
            `Logged in as ${userDisplayed}.` : "Please log in."}
        </div>
    )
}
