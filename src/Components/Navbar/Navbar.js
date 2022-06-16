import React, { useEffect, useState } from "react";
import { Tooltip } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import vector from "../../assates/images/Vector.png";
import { AllPage } from "../grouping/grouping";
import { setCurrentPage } from "../../redux/stored_reducer";
import "./navbar.scss";

function Navbar() {
  const { currentPage } = useSelector((s) => s?.unsaved__reducer);
  const [active, setAcitve] = useState(null);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (pathname !== currentPage?.path) {
      let page = AllPage?.find((page) => page?.path === pathname);
      dispatch(setCurrentPage(page));
    }
    // GET(currentPage?.optionName).then((res) => console.log(res));
    // GET(currentPage?.optionRegion).then((res) => console.log(res));
  }, [pathname]);

  return (
    <div className="site-navbar">
      <div className="site-navbar_logo">
        <h2>
          <img src={vector} />
          АДМИН ПАНЕЛ
        </h2>
      </div>
      <div className="site-navbar_menu">
        {AllPage?.map((page, i) => {
          // page.path == pathname && dispatch(setCurrentPage(page));
          return (
            <NavLink
              to={page?.path}
              className={({ isActive }) =>
                isActive || active === i
                  ? "active_link menu__link"
                  : "menu__link"
              }
              onClick={() => setAcitve(i)}
            >
              {page?.text}
            </NavLink>
          );
        })}
      </div>
      <div className="icons">
        <div
          style={{ display: "inline-block" }}
          //   onClick={() => handleLogout()}
        >
          <Tooltip placement="bottom" title="Тизимдан чиқиш">
            <LogoutOutlined />
          </Tooltip>
        </div>

        <Tooltip placement="bottom" title="Паролни узгартириш">
          <UserOutlined />
        </Tooltip>
      </div>
    </div>
  );
}

export default Navbar;
