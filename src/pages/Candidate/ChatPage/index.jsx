import React, { useState } from "react";
import classNames from "classnames/bind";

import { IoSearchOutline, IoSend, IoAttach, IoImageOutline } from "react-icons/io5";

import styles from "./ChatPage.module.scss";
import CandidateLayout from "~/layouts/CandidateLayout";

import Sidebar from "./Sidebar"
import ChatWindow from "./ChatWindow"



const cx = classNames.bind(styles);

function ChatPage() {
  const [activeChatId, setActiveChatId] = useState(1);

  const conversations = [
    {
      id: 1,
      name: "ATG",
      company: "CÔNG TY TNHH PHÁT TRIỂN VĂN HÓA CÔNG NGHỆ ATG",
      avatar: "https://ui-avatars.com/api/?name=ATG&background=random",
      lastMessage: "Xin chào anh/chị...",
      time: "15:30",
    },
    {
      id: 2,
      name: "CyberCharge",
      company: "CYBERCHARGE",
      avatar: "https://ui-avatars.com/api/?name=Cyber&background=000&color=fff",
      lastMessage: "Cảm ơn bạn...",
      time: "14:20",
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "me",
      type: "text",
      content: "Xin chào anh/chị, tôi liên hệ để tìm hiểu thêm...",
    },
    {
      id: 2,
      sender: "me",
      type: "job_card",
      data: {
        title: "Fullstack Developer",
        description: "Thiết kế trang web sàn thương mại...",
        address: "12 Tân Trào, Quận 7, HCM",
        companyName: "ATG",
        logo: "https://ui-avatars.com/api/?name=ATG&background=random",
      },
    },
  ];

  const currentChat = conversations.find((c) => c.id === activeChatId);
  return (
    <div className={cx("chat-page")}>
        <div className={cx("container")}>
      <Sidebar 
        conversations={conversations}
        activeChatId={activeChatId}
        onSelectChat={setActiveChatId}
      />
      
      <ChatWindow 
        currentChat={currentChat}
        messages={messages}
      />
    </div>
    </div>
  );
}

export default ChatPage;
