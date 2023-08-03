import TabsList from "@mui/base/TabsList";
import Tabs from "@mui/base/Tabs";
import { useNavigate } from "react-router-dom";
import s from "./Navbar.module.css";
import { postLogout } from "../../services/auth/authLogout/postLogout";
export const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    postLogout();
    navigate("/");
  };
  return (
    <Tabs>
      <TabsList>
        <button
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Dashboard
        </button>
        <button
          onClick={() => {
            navigate("/profile");
          }}
        >
          Profile
        </button>

        <button
          className={s.logoutButton}
          onClick={() => {
            handleLogout();
          }}
        >
          LogOut
        </button>
      </TabsList>
    </Tabs>
  );
};
