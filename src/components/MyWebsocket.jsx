import React, {useContext} from "react";
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";
import { UserContext } from "./UserContext";
 


const url = 'http://127.0.0.1:8080';
let stompClient = '';

export const MyWebsocket = () => {

    const user = useContext(UserContext).user;

    const selectedUser = useContext(UserContext).selectedUser;

    const connect =(username)=> {
        if (username === ""){
            return;
        }
        let socket = new SockJS(url + "/chat");
        stompClient = Stomp.over(socket);
        stompClient.connect(
          {},
          (frame) => {
            console.log("Connected to " + frame);
            stompClient.subscribe("/topic/messages/" + username, response => {
            let data = JSON.parse(response.body);
            console.log(data);
            });
          },
          error => {
            console.log(error);
          }
        );
    }
    
    const disconnect =()=> {
        if (stompClient) {
          stompClient.disconnect();
        }
    }



    const sendMessage = () => {

        stompClient.send(`/app/chat/${selectedUser}`,JSON.stringify({
            fromLogin: user,
            message: `Hi there ${selectedUser}`},{} )
        )
    }


    return (
        <div>
            <button onClick={()=>connect(user)}>Connect to chat</button>
            <button onClick={disconnect}>Disconnect from chat</button><br/>
            <button onClick={sendMessage}>Send welcome to selected user</button>
        </div>
    )
}

