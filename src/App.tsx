import "./App.css";
import { AuthProvider } from "./auth/AuthContext";
import Setting from "./auth/component/ComponentSetting";
import Header from "./Header/Header";
import { ThemeProvider } from "./theme/ThemeConText";
import { UserProvider } from "./user/UserContext";

function App() {
  return (
    <div className="App">
      {/* <UserProvider>
        <Header />
      </UserProvider> */}
      {/* <AuthProvider> */}
      <UserProvider>
        <ThemeProvider>
          <Setting />
        </ThemeProvider>
      </UserProvider>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
