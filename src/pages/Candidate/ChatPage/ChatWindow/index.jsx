import React from "react";
import classNames from "classnames/bind";
import styles from "./ChatWindow.module.scss";
import { IoSend, IoAttach, IoImageOutline } from "react-icons/io5";
import MessageBubble from "./MessageBubble";

const cx = classNames.bind(styles);

function ChatWindow({ currentChat, messages }) {
  if (!currentChat) {
    return <div className={cx("chat-window")}>Chọn một đoạn chat để bắt đầu</div>;
  }

  
  return (
    <div className={cx("chat-window")}>
      <div className={cx("chat-header")}>
        <div className={cx("header-avatar")}>
          <img src={currentChat.avatar} alt="avatar" />
        </div>
        <div className={cx("header-info")}>
          <h3>{currentChat.name}</h3>
          <p>{currentChat.company}</p>
        </div>
      </div>

      <div className={cx("message-list")}>
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
      </div>

      <div className={cx("input-area")}>
        <button className={cx("icon-btn")}>
          <IoAttach />
        </button>
        <button className={cx("icon-btn")}>
          <IoImageOutline />
        </button>

        <div className={cx("input-wrapper")}>
          <input type="text" placeholder="Nhập tin nhắn..." />
        </div>

        <button className={cx("send-btn")}>
          <IoSend />
        </button>
      </div>
    </div>
  );
}

export default ChatWindow;