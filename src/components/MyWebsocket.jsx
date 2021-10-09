import React, {useContext} from "react";
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";
import { UserContext } from "./UserContext";
 


const url = 'http://127.0.0.1:8080';
let stompClient = '';

export const MyWebsocket = () => {

    const [user] = useContext(UserContext);

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



    return (
        <div>
            <button onClick={()=>connect(user)}>Connect to chat</button>
            <button onClick={disconnect}>Disconnect from chat</button>
        </div>
    )
}

