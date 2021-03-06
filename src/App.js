import "./App.css";
import UserProvider from "./components/UserContext";
import { Registration } from "./components/Registration";
import { MyWebsocket } from "./components/MyWebsocket";
import { Greeting } from "./components/Greeting";
import { DisplayUsers } from "./components/DisplayUsers";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Greeting />
        <Registration />
        <MyWebsocket />
        <DisplayUsers />
      </UserProvider>
    </div>
  );
}

export default App;
