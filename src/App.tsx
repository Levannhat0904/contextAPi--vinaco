import "./App.css";
import Header from "./Header/Header";
import { UserProvider } from "./UserProfile/UserProfile";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Header />
      </UserProvider>
    </div>
  );
}

export default App;
