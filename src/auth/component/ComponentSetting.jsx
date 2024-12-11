import { useContext } from "react";
import { ThemeContext } from "../../theme/ThemeConText"; // Tên phải khớp
import { UserContext } from "../../user/UserContext"; // T
const Setting = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, setUser } = useContext(UserContext);
  const updateName = () => {
    const newName = prompt("enter new name:", user.name);
    if (newName) setUser((pre) => ({ ...pre, name: newName }));
  };
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h1>Setting</h1>
      <p> theme: {theme}</p>
      <button onClick={toggleTheme}>toggleTheme</button>
      <p>user name: {user.name}</p>
      <button onClick={updateName}>change name</button>
    </div>
  );
};
export default Setting;
