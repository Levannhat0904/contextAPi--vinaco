import React from "react";
import { useUser } from "../context/UserContext";

const ChildComponent = () => {
  const { userName } = useUser(); // Lấy giá trị từ context

  return (
    <div>
      <h2>Child Component</h2>
      <p>Username: {userName}</p>
    </div>
  );
};

export default ChildComponent;
