import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames/bind";

import { FaBookmark, FaRegBell, FaRegBookmark } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

import IconSearch from "~/assets/icons/IconSearch";
import IconCheckList from "~/assets/icons/IconCheckList";
import IconBuilding from "~/assets/icons/IconBuilding";
import IconBarChart from "~/assets/icons/IconBarChart";
import LogoWhite from "~/assets/images/LogoWhite";
import IconUserSecurity from "~/assets/icons/IconUserSecurity";
import IconPassword from "~/assets/icons/IconPassword";
import IconUser from "~/assets/icons/IconUser";
import Button from "~/components/Button"
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  const [showNotifications, setShowNotifications] = useState(false);

  const notiRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (notiRef.current && !notiRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [notiRef]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("logo")}>
        <LogoWhite />
      </div>

      <div className={cx("nav")}>
        <ul>
          <li><a href="/">Dự án</a></li>
          <li><a href="/">Quản lý CV</a></li>
          <li><a href="/">Quản lý chứng chỉ</a></li>
          <li><a href="/">Quản lý thông tin cá nhân</a></li>
        </ul>

        <div className={cx("drop-down")}>
          <div className={cx("row")}>
            <div className={cx("col")}>
                <div className={cx("heading")}>Công ty</div>
                <ul>
                    <li>
                    <a href="/">
                        <IconSearch className={cx("icon")} />
                        Tìm dự án
                    </a>
                    </li>
                    <li>
                    <a href="/">
                        <FaBookmark className={cx("icon")} />
                        Dự án đã lưu
                    </a>
                    </li>
                    <li>
                    <a href="/">
                        <IconCheckList className={cx("icon")} />
                        Dự án đã ứng tuyển
                    </a>
                    </li>
                </ul>
            </div>
            
            <div className={cx("col")}>
                <div className={cx("heading")}>Dự án</div>
                <ul>
                    <li>
                    <a href="/">
                        <IconBuilding className={cx("icon")} />
                        Danh sách công ty
                    </a>
                    </li>
                    <li>
                    <a href="/">
                        <IconBarChart className={cx("icon")} />
                        Top công ty
                    </a>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={cx("action")}>
        <ul>
          <li>
            <a href="/" title="Saved">
              <FaRegBookmark />
            </a>
          </li>
          
          <li ref={notiRef} className={cx("notification-container")}>
            <a 
                className={cx("btn-icon")} 
                onClick={() => setShowNotifications(!showNotifications)}
            >
              <FaRegBell />
            </a>

            {showNotifications && (
              <div className={cx("drop-down", "noti")}>
                <div className={cx("header")}>
                  <span className={cx("title")}>Thông báo</span>
                  <div className={cx("pull-right")}>
                    <span className={cx("mark-viewed-all", "text-highlight")}>
                      Đánh dấu là đã đọc
                    </span>
                  </div>
                </div>
                
                <div className={cx("body")}>
                  <ul className={cx("notification-list")}>
                    <li className={cx("notification-item")}>
                      <a href="/" target="_blank" rel="noreferrer">
                        <div className={cx("notification-item-title")}>
                          <span>Nhà tuyển dụng đã đăng việc làm mới</span>
                        </div>
                        <div className={cx("notification-item-text")}>
                          CÔNG TY TNHH DKSH VIỆT NAM vừa đăng tải tin tuyển dụng mới. Vào xem ngay!
                        </div>
                      </a>
                      <div className={cx("notification-item-sub", "row")}>
                        <div className={cx("col-xs-6")}> 
                          <span className={cx("notification-item-time")}>
                            27/11/2025
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </li>
          
          {/* Avatar / Profile placeholder */}
          <li>
            <a href="/"> <IconUser /><IoMdArrowDropdown /></a>
            <div className={cx("drop-down")}> 
            <ul>
              <li><a href="">
                    <IconUserSecurity/> Cài đặt thông tin cá nhân
                </a></li>

                   <li><a href="">
                    <IconPassword/> Đổi mật khẩu
                </a></li>
            <Button text='Đăng xuất'
                className={cx('btn')}
            />
            </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;