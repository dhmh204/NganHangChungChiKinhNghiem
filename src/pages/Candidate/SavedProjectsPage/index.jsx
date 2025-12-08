import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./SavedProjectsPage.module.scss";

import SavedTabs from "./SaveTabs";
import SavedList from "./SavedList";
import CandidateLayout from "~/layouts/CandidateLayout";

const cx = classNames.bind(styles);

function SavedProjectsPage() {
  const [activeTab, setActiveTab] = useState("saved_projects");

  const tabs = [
    { id: "saved_projects", label: "Dự án đã lưu" },
    { id: "followed_companies", label: "Công ty đang theo dõi" },
  ];

  const savedJobs = [
    {
      id: 1,
      title: "Software Engineer",
      companyName: "CÔNG TY TNHH MTV GREENLARA",
      description: "Thiết kế trang web sàn thương mại...",
      tags: ["Còn 20 ngày", "Hà Nội"],
    },
    {
      id: 2,
      title: "React Frontend",
      companyName: "SUNTECH",
      description: "Phát triển UI/UX...",
      tags: ["Còn 15 ngày", "Đà Nẵng"],
    },
  ];

  const followedCompanies = [
    {
      id: 101,
      title: "Tuyển dụng IT",
      companyName: "FPT SOFTWARE",
      description: "Công ty công nghệ hàng đầu...",
      tags: ["Quy mô 1000+", "Hà Nội"],
    }
  ];

  const displayList = activeTab === "saved_projects" ? savedJobs : followedCompanies;

  return (
    <CandidateLayout>
    <div className={cx("container")}>
      <div className={cx("main-column")}>
        <SavedTabs 
            tabs={tabs} 
            activeTab={activeTab} 
            onChange={setActiveTab} 
        />
        
        <SavedList 
            list={displayList} 
            activeTab={activeTab} 
        />
      </div>

      <aside className={cx("sidebar-column")}>
        <div className={cx("banner-box")}>
            BANNER
        </div>
      </aside>
    </div>
    </CandidateLayout>
  );
}

export default SavedProjectsPage;