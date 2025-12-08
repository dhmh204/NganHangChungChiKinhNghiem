import React, { useState, useMemo } from "react";
import classNames from "classnames/bind";
import styles from "./MyJobsPage.module.scss";
import JobTabs from "./JobTabs";
import JobList from "./JobList";

import CandidateLayout from "~/layouts/CandidateLayout";

const cx = classNames.bind(styles);

function MyJobsPage() {
  const [activeTab, setActiveTab] = useState("contacted");

  const tabs = [
    { id: "contacted", label: "Đã liên hệ" },
    { id: "applied", label: "Đã gửi" },
    { id: "approved", label: "Đã duyệt" },
    { id: "rejected", label: "Đã bị từ chối" },
  ];

  const allJobs = [
    { id: 1, title: "Software Engineer", companyName: "SUNTECH", tags: ["Hà Nội", "Còn 20 ngày"], status: "contacted", description: "Mô tảaaaaaaaaa" },
    { id: 2, title: "React Native Developer", companyName: "FPT", tags: ["HCM", "Còn 20 ngày"], status: "applied", description: "Mô tảaaaaaaaaa" },
    { id: 3, title: "NodeJS Backend", companyName: "VNG", tags: ["Hà Nội", "Còn 20 ngày"], status: "applied", description: "Mô tảaaaaaaaaa" },
    { id: 4, title: "Fresher Java", companyName: "Viettel", tags: ["Hà Nội", "Còn 20 ngày"], status: "approved", description: "Mô tảaaaaaaaaa" },
  ];

  const filteredJobs = useMemo(() => {
    return allJobs.filter((job) => job.status === activeTab);
  }, [allJobs, activeTab]);

  return (
    <CandidateLayout>
    <div className={cx("container")}>
      <div className={cx("main-column")}>
        <JobTabs 
            tabs={tabs} 
            activeTab={activeTab} 
            onChange={setActiveTab} 
        />
        <JobList 
            jobs={filteredJobs} 
            activeTab={activeTab} 
        />

      </div>
      <div className={cx("sidebar-column")}>
        <div className={cx("banner-box")}>BANNER</div>
      </div>

    </div>
    </CandidateLayout>
  );
}

export default MyJobsPage;