import React from "react";
import classNames from "classnames/bind";
import styles from "./CertificatePage.module.scss";
import { useNavigate } from "react-router-dom";

import CVFilterBar from "../CVManagementPage/CVFilterBar";
import CertificateTable from "./CertificateTable";

const cx = classNames.bind(styles);

function CertificatePage() {
  const navigate = useNavigate();

  const candidates = [
    { id: 1, name: "Đỗ Thị Quỳnh Nhung", email: "nhung@gmail.com", phone: "0123456789", cvName: "dothiquynhnhung.pdf", cvUrl: "#", project: "Quản lý chi tiêu", approvedDate: "19/11/2025", avatar: "https://i.pravatar.cc/150?img=9", projectCount: 20 },
    { id: 2, name: "Nguyễn Văn A", email: "vana@gmail.com", phone: "0987654321", cvName: "nguyenvana.pdf", cvUrl: "#", project: "Website bán hàng", approvedDate: "18/11/2025", avatar: "https://i.pravatar.cc/150?img=3", projectCount: 5 },
  ];

  const projects = [
      { id: 1, name: "Quản lý chi tiêu" },
      { id: 2, name: "Website bán hàng" }
  ];

  const handleIssueClick = (candidate) => {
    navigate("/recruiter/certificates/issue", { state: { candidate } });
  };

  return (
    <div className={cx("container")}>
      <CVFilterBar 
        projects={projects}
        onSearch={() => {}}
        onFilterProject={() => {}}
        onFilterStatus={() => {}}
      />

      <div style={{ marginTop: "20px" }}>
        <CertificateTable 
            candidates={candidates} 
            onIssue={handleIssueClick} 
        />
      </div>
      
    </div>
  );
}

export default CertificatePage;