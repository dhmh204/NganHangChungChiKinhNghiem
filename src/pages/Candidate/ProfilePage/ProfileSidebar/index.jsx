import React from "react";
import classNames from "classnames/bind";
import styles from "./ProfileSidebar.module.scss";

import { FaCamera, FaUser, FaLock } from "react-icons/fa";

const cx = classNames.bind(styles);

function ProfileSidebar({ activeTab, onChangeTab }) {

  const user = {
    name: "ĐỖ THỊ QUỲNH NHUNG",
    avatar: "",
  };
    const avatarUrlDefault = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    user.name
  )}&background=random&color=fff`;
  const menuItems = [
    { id: "info", label: "Thông tin cá nhân", icon: <FaUser /> },
    { id: "password", label: "Đổi mật khẩu", icon: <FaLock /> },
  ];

  return (
    <div className={cx("wrapper")}>
      
      <div className={cx("avatar-section")}>
        <div className={cx("avatar-box")}>
          <img src={user.avatar || avatarUrlDefault} alt="avatar" />
          <button className={cx("camera-btn")}>
            <FaCamera />
          </button>
        </div>
        <div className={cx("welcome-text")}>Chào mừng trở lại,</div>
        <h3 className={cx("user-name")}>{user.name}</h3>
      </div>

      <div className={cx("menu-list")}>
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={cx("menu-item", { active: activeTab === item.id })}
            onClick={() => onChangeTab(item.id)}
          >
            <span className={cx("icon")}>{item.icon}</span>
            <span className={cx("label")}>{item.label}</span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default ProfileSidebar;