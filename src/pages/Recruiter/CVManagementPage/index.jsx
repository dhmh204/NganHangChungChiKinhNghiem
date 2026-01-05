import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./CVManagementPage.module.scss";
import { FaDownload } from "react-icons/fa";

import CVFilterBar from "./CVFilterBar";
import CVTable from "./CVTable";

const cx = classNames.bind(styles);

function CVManagementPage() {
  const initialCVs = [
    { id: 1, name: "Đỗ Thị Quỳnh Nhung", email: "nhung@gmail.com", phone: "0123456789", cvName: "cv_nhung.pdf", cvUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", projectName: "Quản lý chi tiêu", appliedDate: "19/11/2025", status: "approved", isViewed: true },
    { id: 2, name: "Nguyễn Văn A", email: "vana@gmail.com", phone: "0987654321", cvName: "cv_vana.pdf", cvUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", projectName: "Quản lý chi tiêu", appliedDate: "20/11/2025", status: "pending", isViewed: true },
    { id: 3, name: "Trần Văn B", email: "vanb@gmail.com", phone: "0912345678", cvName: "cv_vanb.pdf", cvUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", projectName: "Website bán hàng", appliedDate: "21/11/2025", status: "rejected", isViewed: false },
  ];

  const projects = [
      { id: 1, code: "123", name: "Quản lý chi tiêu" },
      { id: 2, code: "456", name: "Website Thương mại điện tử" },
  ];

  const [cvList, setCVList] = useState(initialCVs);
  const [displayedCVs, setDisplayedCVs] = useState(initialCVs);
  const [selectedIds, setSelectedIds] = useState([]);
  
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allIds = displayedCVs.map(item => item.id);
      setSelectedIds(allIds);
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(prev => prev.filter(itemId => itemId !== id));
    } else {
      setSelectedIds(prev => [...prev, id]);
    }
  };

  const handleDownloadSelected = () => {
    const selectedCVs = cvList.filter(item => selectedIds.includes(item.id));
    
    if (selectedCVs.length === 0) return;

    selectedCVs.forEach((cv, index) => {
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = cv.cvUrl;
        link.download = cv.cvName; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, index * 500); 
    });

    alert(`Đang bắt đầu tải xuống ${selectedCVs.length} CV...`);
  };

  const handleApprove = (id) => {
      setCVList(prev => prev.map(item => item.id === id ? {...item, status: 'approved'} : item));
  };

  const handleReject = (id) => {
      setCVList(prev => prev.map(item => item.id === id ? {...item, status: 'rejected'} : item));
  };

  React.useEffect(() => {
      setDisplayedCVs(cvList);
  }, [cvList]);

  return (
    <div className={cx("container")}>
      <CVFilterBar 
        projects={projects}
        onSearch={() => {}} 
        onFilterProject={() => {}}
        onFilterStatus={() => {}}
      />

      <div className={cx("sub-header")}>
          <h3 className={cx("result-count")}>Tìm thấy {displayedCVs.length} ứng viên</h3>
          
          {selectedIds.length > 0 && (
            <button className={cx("btn-download-all")} onClick={handleDownloadSelected}>
                <FaDownload /> Download {selectedIds.length} CV đã chọn
            </button>
          )}
      </div>

      <CVTable 
        cvList={displayedCVs}
        selectedIds={selectedIds}      
        onSelectAll={handleSelectAll}   
        onSelectOne={handleSelectOne}   
        onApprove={handleApprove}
        onReject={handleReject}
      />
    </div>
  );
}

export default CVManagementPage;