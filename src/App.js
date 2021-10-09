import "./App.css";
import UserProvider from "./components/UserContext";
import { Registration } from "./components/Registration";
import { MyWebsocket } from "./components/MyWebsocket";
import { Greeting } from "./components/Greeting";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Registration />
        <MyWebsocket />
        <Greeting />
      </UserProvider>
    </div>
  );
}

export default App;
