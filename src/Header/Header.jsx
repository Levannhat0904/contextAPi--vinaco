import "../css/header.css";
import { useUser } from "../UserProfile/UserProfile";
const Header = () => {
  const { userName } = useUser();
  return <div className="header">Header-{userName} </div>;
};
export default Header;
