import React from "react";
import classNames from "classnames/bind";
import { FaRegBookmark } from "react-icons/fa";

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
        <LogoWhite width={70} height={47} />
      </div>

      <div className={cx("nav")}>
        <ul className={cx("nav-content")}>
          <li className={cx("nav-item", "nav-link")}>
            <ProjectMenu />
          </li>
          <li>
            <a href="/" className={cx("nav-link")}>
              Quản lý CV
            </a>
          </li>
          <li>
            <a href="/" className={cx("nav-link")}>
              Quản lý chứng chỉ
            </a>
          </li>
          <li>
            <a href="/" className={cx("nav-link")}>
              Quản lý thông tin cá nhân
            </a>
          </li>
        </ul>
      </div>

      <div className={cx("action")}>
        <ul className={cx("list-icon")}>
          <li>
            <a href="/" title="Saved" className={cx("icon-link")}>
              <FaRegBookmark />
            </a>
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