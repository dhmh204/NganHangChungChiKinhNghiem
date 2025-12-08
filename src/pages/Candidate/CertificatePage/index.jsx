import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./CertificatePage.module.scss";

import SearchBar from "./SearchBar";
import CertificateTable from "./CertificateTable";
import CandidateLayout from "~/layouts/CandidateLayout";


const cx = classNames.bind(styles);

function CertificatePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const certificates = [
    {
      id: 1,
      projectName: "Quản lý chi tiêu",
      date: "20/11/2025",
      issuer: "Đào Linh Anh",
      fileName: "chungchi.pdf",
      fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      id: 2,
      projectName: "Quản lý học bổng UTE",
      date: "20/11/2025",
      issuer: "Đào Linh Anh",
      fileName: "certificate_ute.pdf",
      fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
  ];

  const filteredList = certificates.filter(
    (cert) =>
      cert.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.id.toString().includes(searchTerm)
  );

  return (
    <CandidateLayout>
    <div className={cx("container")}>
      <SearchBar 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Tìm kiếm theo mã hoặc tiêu đề bài đăng"
      />

      <CertificateTable data={filteredList} />
    </div>
    </CandidateLayout>
  );
}

export default CertificatePage;