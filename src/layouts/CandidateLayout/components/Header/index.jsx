import React from "react";
import classNames from "classnames/bind";
import { FaRegBookmark } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom"; 

import LogoWhite from "~/assets/images/LogoWhite";
import styles from "./Header.module.scss";

import ProjectMenu from "./ProjectMenu";
import NotificationMenu from "./NotificationMenu";
import ProfileMenu from "./ProfileMenu";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("logo")}>
        <Link to="/">
          <LogoWhite width={70} height={47} />
        </Link>
      </div>

      <div className={cx("nav")}>
        <ul className={cx("nav-content")}>
          
          <li className={cx("nav-item", "nav-link")}>
            <ProjectMenu />
          </li>

          <li>
            <NavLink 
              to="/profile" 
              className={({ isActive }) => cx("nav-link", { active: isActive })}
            >
              Quản lý CV
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/certificates" 
              className={({ isActive }) => cx("nav-link", { active: isActive })}
            >
              Quản lý chứng chỉ
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/profile" 
              className={({ isActive }) => cx("nav-link", { active: isActive })}
            >
              Quản lý thông tin cá nhân
            </NavLink>
          </li>
        </ul>
      </div>

      <div className={cx("action")}>
        <ul className={cx("list-icon")}>
          <li>
            <NavLink 
                to="/saved-projects" 
                title="Đã lưu" 
                className={({ isActive }) => cx("icon-link", { active: isActive })}
            >
              <FaRegBookmark />
            </NavLink>
          </li>
          
          <li>
            <NotificationMenu />
          </li>
          
          <li>
            <ProfileMenu />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;