import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { IoSearchOutline } from "react-icons/io5";

const cx = classNames.bind(styles);

function Sidebar({ 
  conversations, 
  activeChatId, 
  onSelectChat 
}) {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className={cx("sidebar")}>
      <div className={cx("sidebar-header")}>
        <h2>Trò chuyện</h2>
        <div className={cx("search-box")}>
          <input type="text" placeholder="Tìm kiếm cuộc trò chuyện" />
          <IoSearchOutline className={cx("search-icon")} />
        </div>

        <div className={cx("tabs")}>
          <span
            className={cx("tab", { active: activeTab === "all" })}
            onClick={() => setActiveTab("all")}
          >
            Tất cả
          </span>
          <span
            className={cx("tab", { active: activeTab === "unread" })}
            onClick={() => setActiveTab("unread")}
          >
            Chưa đọc
          </span>
        </div>
      </div>

      <div className={cx("conversation-list")}>
        {conversations.map((chat) => (
          <div
            key={chat.id}
            className={cx("conversation-item", {
              active: chat.id === activeChatId,
            })}
            onClick={() => onSelectChat(chat.id)}
          >
            <div className={cx("avatar")}>
              <img src={chat.avatar} alt={chat.name} />
            </div>
            <div className={cx("info")}>
              <div className={cx("top-row")}>
                <span className={cx("name")}>{chat.name}</span>
                <span className={cx("time")}>{chat.time}</span>
              </div>
              <span className={cx("company")}>{chat.company}</span>
              <p className={cx("message-preview")}>{chat.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;