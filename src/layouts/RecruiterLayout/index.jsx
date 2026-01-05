import React from "react";
import { Outlet } from "react-router-dom"; 
import classNames from "classnames/bind";
import styles from "./RecruiterLayout.module.scss";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import { MdDashboard } from "react-icons/md";
import IconBuilding from "~/assets/icons/IconBuilding";
import IconPosts from "~/assets/icons/IconPosts";
import IconClipboardList from "~/assets/icons/IconClipboardList";
import IconCertificate from "~/assets/icons/IconCertificate";

import { GrDocumentText } from "react-icons/gr";
import { BsChatSquareDotsFill } from "react-icons/bs";

const cx = classNames.bind(styles);

function RecruiterLayout() {
    const menuItems = [
      { path: "/recruiter/dashboard", icon: <MdDashboard />, label: "Dashboard" },
      { path: "/recruiter/company-info", icon: <IconBuilding />, label: "Thông tin công ty" },
      { path: "/recruiter/projects", icon: <IconClipboardList />, label: "Quản lý dự án" },
      { path: "/recruiter/posts", icon: <IconPosts size={20} />, label: "Quản lý bài đăng" },
      { path: "/recruiter/cv", icon:<GrDocumentText />, label: "Quản lý CV" },
      { path: "/recruiter/certificates", icon: <IconCertificate  size={20} />, label: "Cấp chứng chỉ" },
      { path: "/recruiter/chat", icon: <BsChatSquareDotsFill />, label: "Trò chuyện" },
    ];
  return (
    <div className={cx("wrapper")}>
      <Sidebar menuItems={menuItems} />
      <div className={cx("main-content")}>
        <Header />
        <div className={cx("page-container")}>
           <Outlet /> 
        </div>
      </div>
    </div>
  );  
}

export default RecruiterLayout;