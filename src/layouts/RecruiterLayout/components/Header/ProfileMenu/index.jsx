import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./ProfileMenu.module.scss";
import { Link } from "react-router-dom";
import { FaUserCircle, FaChevronDown, FaCog, FaLock, FaSignOutAlt } from "react-icons/fa";
import IconUser from "~/assets/icons/IconUser"

const cx = classNames.bind(styles);

function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const user = {
    name: "Đỗ Thị Quỳnh Nhung",
    avatar: null 
  };

  return (
    <div className={cx("wrapper")} onClick={toggleDropdown}>
      <div className={cx("user-profile")}>
        <IconUser className={cx("avatar")} />
        <span className={cx("username")}>{user.name}</span>
        <FaChevronDown className={cx("arrow", { open: isOpen })} />
      </div>

      {isOpen && (
        <div className={cx("dropdown-menu")}>
          <div className={cx("dropdown-beak")}></div>

        <div className={cx("drop-content")}>
              <Link to="/recruiter/profile" className={cx("menu-item")}>
            <FaCog className={cx("item-icon")} /> Cài đặt thông tin cá nhân
          </Link>
          
          <Link to="/recruiter/change-password" className={cx("menu-item")}>
            <FaLock className={cx("item-icon")} /> Đổi mật khẩu
          </Link>
          
          <div className={cx("menu-divider")}></div>
          
          <button className={cx("menu-item", "logout")}>
            <FaSignOutAlt className={cx("item-icon")} /> Đăng xuất
          </button>
        </div>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;