import React, { Suspense, useEffect, useState } from "react";
import { Tooltip } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import vector from "../../assates/images/Vector.png";
import { AllPage } from "../grouping/grouping";
import {
  setCurrentPage,
  setValue,
  startLoading,
  stopLoading,
} from "../../redux/stored_reducer";
import "./navbar.scss";
import Loading from "../Loading/Loading";
import ChangePasswordModal from "../ChangePasswordModal/ChangePasswordModal";
import { GET } from "../../functions/Methods";

function Navbar() {
  const { currentPage } = useSelector((s) => s?.unsaved__reducer);
  const [active, setAcitve] = useState(null);
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    let url = currentPage?.optionName;
    if (pathname !== currentPage?.path) {
      let page = AllPage?.find((page) => page?.path === pathname);
      dispatch(setCurrentPage(page));
    }

    if (url) {
      dispatch(startLoading());
      GET(currentPage?.optionName).then((res) => {
        console.log(res);
        if (res) {
          // dispatch(stopLoading());
        }
      });
    }

    dispatch(setValue({}));
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
        {AllPage?.map((page, i) => (
          <Suspense fallback={<Loading />}>
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
          </Suspense>
        ))}
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
          <UserOutlined onClick={() => setVisible(true)} />
          <ChangePasswordModal visible={visible} setVisible={setVisible} />
        </Tooltip>
      </div>
    </div>
  );
}

export default Navbar;
