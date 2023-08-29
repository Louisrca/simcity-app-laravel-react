import TabsList from "@mui/base/TabsList";
import Tabs from "@mui/base/Tabs";
import Option from "@mui/joy/Option";
import { useNavigate } from "react-router-dom";
// import s from "./Navbar.module.css";
import { postLogout } from "../../services/auth/authLogout/postLogout";
import { LogoutIcon } from "../../common/icons/LogoutIcon";
import { IconLayouts } from "../layout/iconLayouts/IconLayout";
import { CellnexTelcomLogo } from "../../common/icons/CellnexTelecomLogo";
import SelectIndicator from "./SelectIndicator";

export const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    postLogout();
    navigate("/");
  };

  return (
    <div className="w-full">
      <div className={s.grid}>
        <div className={s.logo}>
          <div>
            <IconLayouts>
              <CellnexTelcomLogo classname={s.img} />
            </IconLayouts>
          </div>
        </div>
        <div>
          <Tabs className={s.tabs}>
            <TabsList className={s.tabsList}>
              <button
                type="button"
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                Dashboard
              </button>
              <button
                type="button"
                onClick={() => {
                  navigate("/portails");
                }}
              >
                Portails
              </button>

              <SelectIndicator title="WIKI OUTILS">
                <Option
                  value="NOTICE SIMICITY"
                  onClick={() => {
                    navigate("/profile");
                  }}
                >
                  NOTICE SIMCITY
                </Option>
              </SelectIndicator>

              <SelectIndicator title="OUTILS">
                <Option value="Gestion des Users">Gestion des Users</Option>
                <Option value="archiTools">Architecture Outil</Option>
              </SelectIndicator>
              <button type="button">
                <a href="mailto: support.dev@cellnextelecom.fr" target="_blank">
                  HELP
                </a>
              </button>
              <button
                className={s.logoutButton}
                onClick={() => {
                  handleLogout();
                }}
              >
                <IconLayouts>
                  <LogoutIcon color={"#c62828"} />
                </IconLayouts>
              </button>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
