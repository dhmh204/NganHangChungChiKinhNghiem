import React, { useState } from "react";
import classNames from "classnames/bind";
import { IoMdArrowDropdown } from "react-icons/io";

import IconUserSecurity from "~/assets/icons/IconUserSecurity";
import IconPassword from "~/assets/icons/IconPassword";
import IconUser from "~/assets/icons/IconUser";
import IconCV from "~/assets/icons/IconCV";
import IconCertifUser from "~/assets/icons/IconCertifUser";
import Button from "~/components/Button";

import styles from "./ProfileMenu.module.scss";

const cx = classNames.bind(styles);

function ProfileMenu() {
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <div className={cx("profile-container")}>
      <a
        className={cx("dropdown-toggle", {active: openProfile})}
        onClick={() => setOpenProfile(!openProfile)}
      >
        <IconUser />
        <IoMdArrowDropdown className={cx("arrow-icon")} />
      </a>

      {openProfile && (
        <div className={cx("dropdown-menu")}>
          <div className={cx("dropdown-beak")}></div>
          <div className={cx("dropdown-content")}>
            <ul className={cx("menu-list")}>
              <li>
                <a href="" className={cx("menu-link")}>
                  <IconCV className={cx("icon")} /> Quản lý CV
                </a>
              </li>
              <li>
                <a href="" className={cx("menu-link")}>
                  <IconCertifUser className={cx("icon")} /> Quản lý chứng chỉ
                </a>
              </li>
              <li>
                <a href="" className={cx("menu-link")}>
                  <IconUserSecurity className={cx("icon")} /> Cài đặt thông tin cá nhân
                </a>
              </li>
              <li>
                <a href="" className={cx("menu-link")}>
                  <IconPassword className={cx("icon")} /> Đổi mật khẩu
                </a>
              </li>
              <li>
                <Button text="Đăng xuất" className={cx("btn-logout")} />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;