import React from "react";
import classNames from "classnames/bind";
import styles from "./CVTable.module.scss";
import { FaDownload, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const cx = classNames.bind(styles);

function CVTable({ cvList, selectedIds, onSelectAll, onSelectOne, onApprove, onReject }) {
  
  // Kiểm tra xem có đang chọn tất cả không
  const isAllSelected = cvList.length > 0 && selectedIds.length === cvList.length;

  return (
    <div className={cx("table-container")}>
      <table className={cx("table")}>
        <thead>
          <tr>
            <th className={cx("th-candidate")}>Ứng viên</th>
            <th className={cx("th-contact")}>Thông tin liên hệ</th>
            <th className={cx("th-cv", "text-center")}>CV</th>
            <th className={cx("th-project")}>Dự án đã ứng tuyển</th>
            <th className={cx("th-date", "text-center")}>Ngày nộp</th>
            <th className={cx("th-action", "text-center")}>Thao tác</th>
            
            <th className={cx("th-check", "text-center")}>
                <input 
                    type="checkbox" 
                    checked={isAllSelected}
                    onChange={onSelectAll}
                    style={{ cursor: "pointer", width: "16px", height: "16px" }}
                />
            </th>
          </tr>
        </thead>
        <tbody>
          {cvList.map((item) => (
            <tr key={item.id} className={cx({ selected: selectedIds.includes(item.id) })}>
              <td>
                <div className={cx("candidate-col")}>
                    <span className={cx("name")}>{item.name}</span>
                    <span className={cx("status-tag", item.isViewed ? "viewed" : "new")}>
                        {item.isViewed ? "Đã xem" : "Chưa xem"}
                    </span>
                </div>
              </td>
              
              <td>
                  <div className={cx("contact-col")}>
                      <div className={cx("row")}><FaEnvelope /> {item.email}</div>
                      <div className={cx("row")}><FaPhoneAlt /> {item.phone}</div>
                  </div>
              </td>

              <td >
                  <div className={cx("cv-pill")}>
                      <a 
                        href={item.cvUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={cx("filename")}
                        title="Nhấn để xem file CV"
                      >
                          {item.cvName}
                      </a>
                  </div>
              </td>
              
              <td className={cx("uppercase")}>{item.projectName}</td>
              <td className={cx("text-center")}>{item.appliedDate}</td>

              <td className={cx("text-center")}>
                  {item.status === 'pending' && (
                      <div className={cx("action-buttons")}>
                          <button className={cx("btn-approve")} onClick={() => onApprove(item.id)}>Duyệt</button>
                          <button className={cx("btn-reject")} onClick={() => onReject(item.id)}>Từ chối</button>
                      </div>
                  )}
                  {item.status === 'approved' && <span className={cx("status-label", "approved")}>Đã duyệt</span>}
                  {item.status === 'rejected' && <span className={cx("status-label", "rejected")}>Đã từ chối</span>}
              </td>

              
              <td className={cx("text-center")}>
                  <input 
                    type="checkbox" 
                    checked={selectedIds.includes(item.id)}
                    onChange={() => onSelectOne(item.id)}
                    style={{ cursor: "pointer", width: "16px", height: "16px" }}
                  />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CVTable;