import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames/bind";
import { FaRegBell } from "react-icons/fa";

import styles from "./NotificationMenu.module.scss";

const cx = classNames.bind(styles);

const NOTIFICATIONS_DATA = [
  {
    id: 1,
    title: "Nhà tuyển dụng đã đăng việc làm mới",
    text: "CÔNG TY TNHH DKSH VIỆT NAM vừa đăng tải tin tuyển dụng mới. Vào xem ngay!",
    time: "27/11/2025",
    isRead: false,
  },
  {
    id: 2,
    title: "Job mới dành riêng cho bạn. Tham khảo ngay!",
    text: "Chuyên Viên Điều Phối Dự Án - Lĩnh Vực Ô Tô",
    time: "21/11/2025",
    isRead: true,
  },
  {
    id: 3,
    title: "Nhà tuyển dụng đã đăng việc làm mới",
    text: "CÔNG TY TNHH DKSH VIỆT NAM vừa đăng tải tin tuyển dụng mới.",
    time: "19/11/2025",
    isRead: true,
  },
];

function NotificationMenu({isRecruiterLayout=false}) {
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
    <div ref={notiRef} className={cx("notification-container")}>
      <a
        className={cx("btn-icon", 
          {"icon-recruiter": isRecruiterLayout}
        )}
        onClick={() => setShowNotifications(!showNotifications)}
      >
        <FaRegBell />
        <span className={cx("badge", {
          "badge-recruiter": isRecruiterLayout
        })}>1</span>
      </a>

      {showNotifications && (
        <div className={cx("dropdown-menu",    {
          "dropdown-menu-recruiter": isRecruiterLayout
        })}>
          <div className={cx("dropdown-beak", 
            {
          "dropdown-beak-recruiter": isRecruiterLayout
        }
          )}></div>

          <div className={cx("dropdown-content")}>
            <div className={cx("header")}>
              <span className={cx("title")}>Thông báo</span>
              <div className={cx("pull-right")}>
                <span className={cx("mark-viewed-all")}>Đánh dấu là đã đọc</span>
              </div>
            </div>

            <div className={cx("body")}>
              <ul className={cx("notification-list")}>
                {NOTIFICATIONS_DATA.map((notification) => (
                  <li
                    key={notification.id}
                    className={cx("notification-item", {
                      unread: !notification.isRead,
                    })}
                  >
                    <a href="/" target="_blank" rel="noreferrer">
                      <div className={cx("notification-item-title")}>
                        <span>{notification.title}</span>
                      </div>
                      <div className={cx("notification-item-text")}>
                        {notification.text}
                      </div>
                    </a>
                    <div className={cx("notification-item-sub")}>
                      <span className={cx("notification-item-time")}>
                        {notification.time}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NotificationMenu;