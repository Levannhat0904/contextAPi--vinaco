import "./App.css";
import { UserProvider } from "./context/UserContext";
import ParentComponent from "./Parent/ParentComponent";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <ParentComponent />
      </UserProvider>
    </div>
  );
}

export default App;
