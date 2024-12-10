import React, { createContext, useState } from "react";

// Tạo context
const UserContext = createContext();

// Tạo Provider component
export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("Lê Văn Nhật"); // Giá trị mặc định
  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};
// Custom hook để sử dụng UserContext dễ dàng hơn
export const useUser = () => React.useContext(UserContext);

export default UserContext;
