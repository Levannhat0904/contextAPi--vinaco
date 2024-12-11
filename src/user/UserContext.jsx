// import { createContext, useState } from "react";
// export const userContext = createContext();
// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState({
//     name: "le nhat",
//     email: "nhat@gmail.com",
//   });
//   return (
//     <userContext.Provider value={{ user, setUser }}>
//       {children}
//     </userContext.Provider>
//   );
// };
import { createContext, useState } from "react";
export const UserContext = createContext(); // Đặt tên theo PascalCase
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "le nhat",
    email: "nhat@gmail.com",
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
