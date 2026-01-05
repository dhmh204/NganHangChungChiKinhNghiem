import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FaPen, FaBell, FaUserCircle, FaChevronDown, FaSignOutAlt, FaCog, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom"; 
import NotificationMenu from "~/layouts/CandidateLayout/components/Header/NotificationMenu"
import ProfileMenu from "./ProfileMenu";

const cx = classNames.bind(styles);

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
 <div className={cx("wrapper")}>
       <div className={cx("header")}>
        <div className={cx("left-side")}></div>

        <div className={cx("right-side")}>
            
            <Link to="/recruiter/posts/new" className={cx("btn-post")}>
                <FaPen className={cx("icon")} />
                <span>Đăng tin</span>
            </Link>
            
            <div className={cx("notification-wrapper")}>
                <NotificationMenu isRecruiterLayout/>
            </div>

          <ProfileMenu/>

        </div>
    </div>
 </div>
  );
}

export default Header;