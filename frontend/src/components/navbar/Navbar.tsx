import TabsList from "@mui/base/TabsList";
import Tabs from "@mui/base/Tabs";
import Option from "@mui/joy/Option";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import s from "./Navbar.module.css";
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

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="w-full">
      <div className={s.grid}>
        <div className={s.logo}>
          <div
            className={s.anchorLogo}
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            <IconLayouts>
              <CellnexTelcomLogo classname={s.img} />
            </IconLayouts>
          </div>
        </div>
        <div>
          <Tabs className={s.tabs}>
            <TabsList className={s.tabsList}>
              <Button className={s.button}>
                <button
                  type="button"
                  onClick={() => {
                    navigate("/dashboard");
                  }}
                >
                  Dashboard
                </button>
              </Button>
              <Button className={s.button}>
                <button
                  type="button"
                  onClick={() => {
                    navigate("/portails");
                  }}
                >
                  Portails
                </button>
              </Button>

              <Button
                className={s.button}
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <button>Wiki Outils</button>
              </Button>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    navigate("/portails");
                  }}
                >
                  Notice SimCity
                </MenuItem>
              </Menu>

              <Button
                className={s.button}
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <button className={s.button}>OUTILS</button>
              </Button>
              <Menu
                className={s.button}
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    navigate("/portails");
                  }}
                >
                  Gestion des Users
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    navigate("/portails");
                  }}
                >
                  Architecture Outil
                </MenuItem>
              </Menu>
              <Button className={s.button}>
                <button type="button">
                  <a
                    className={s.buttonAnchor}
                    href="mailto: support.dev@cellnextelecom.fr"
                    target="_blank"
                  >
                    HELP
                  </a>
                </button>
              </Button>
              <Button className={s.button}>
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
              </Button>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
