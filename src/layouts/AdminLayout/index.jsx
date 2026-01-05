import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./AdminLayout.module.scss";
import classNames from "classnames/bind";
import Sidebar from "../RecruiterLayout/components/Sidebar";
import { FaBuilding, FaChartPie, FaExclamationTriangle, FaUsers } from "react-icons/fa";

const cx = classNames.bind(styles);

function AdminLayout() {
    const menuItems = [
    { path: "/admin/dashboard", icon: <FaChartPie />, label: "Thống kê" },
    { path: "/admin/users", icon: <FaUsers />, label: "Quản lý tài khoản" },
    { path: "/admin/businesses", icon: <FaBuilding />, label: "Doanh nghiệp" },
    { path: "/admin/reports", icon: <FaExclamationTriangle />, label: "Báo cáo vi phạm" },
  ];
  return (
    <div className={cx("wrapper")}>
      <Sidebar menuItems={menuItems}/>
      <div className={cx("content")}>
        <header className={cx("header")}>
            <div className={cx("user-profile")}>
                <span>Admin System</span>
                <div className={cx("avatar")}>H</div>
            </div>
        </header>
        <div className={cx("body")}>
             <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;