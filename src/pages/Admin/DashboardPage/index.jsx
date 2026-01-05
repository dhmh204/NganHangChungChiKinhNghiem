import React from "react";
import classNames from "classnames/bind";
import styles from "./DashboardPage.module.scss";
import { FaUser, FaBriefcase, FaFlag } from "react-icons/fa";

import StatCard from "~/pages/Admin/DashboardPage/StatCard";
import ActivityTable from "~/pages/Admin/DashboardPage/ActivityTable";

const cx = classNames.bind(styles);

function DashboardPage() {
  const activities = [
    { time: "10:00 AM", user: "Đào Hoàng Minh Hằng", action: "Nộp CV vào công ty X", status: "Thành công", statusType: "success" },
    { time: "09:45 AM", user: "Nguyễn Văn B", action: "Đăng ký tài khoản doanh nghiệp", status: "Chờ duyệt", statusType: "pending" },
    { time: "09:30 AM", user: "Trần Thị C", action: "Báo cáo tin tuyển dụng ảo", status: "Đã xử lý", statusType: "success" },
  ];

  return (
    <div className={cx("container")}>
      <h2 className={cx("page-title")}>Tổng quan hệ thống</h2>
      
      <div className={cx("stats-grid")}>
        <StatCard 
            count="1203" 
            title="Người dùng" 
            icon={<FaUser />} 
            color="#E9D5FF" 
        />
        <StatCard 
            count="450" 
            title="Doanh nghiệp" 
            icon={<FaBriefcase />} 
            color="#FEF3C7"
        />
        <StatCard 
            count="10" 
            title="Báo cáo mới" 
            icon={<FaFlag />} 
            color="#FEE2E2" 
        />
      </div>

      {/* 2. Bảng hoạt động gần đây */}
      <div className={cx("activity-section")}>
        <ActivityTable activities={activities} />
      </div>
    </div>
  );
}

export default DashboardPage;