import React from "react";
import classNames from "classnames/bind";
import styles from "./CertificateTable.module.scss";
import { FaEnvelope, FaPhoneAlt, FaFilePdf, FaDownload } from "react-icons/fa";

const cx = classNames.bind(styles);

function CertificateTable({ candidates, onIssue }) {
  return (
    <div className={cx("table-wrapper")}>
      <table className={cx("table")}>
        <thead>
          <tr>
            <th>Ứng viên</th>
            <th>Thông tin liên hệ</th>
            <th>CV</th>
            <th>Dự án đã tham gia</th>
            <th>Ngày duyệt</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((item) => (
            <tr key={item.id}>
              <td>
                <div className={cx("user-info")}>
                    <span className={cx("name")}>{item.name}</span>
                    <span className={cx("role")}>Ứng viên</span>
                </div>
              </td>
              
              <td>
                <div className={cx("contact-info")}>
                    <div className={cx("row")}><FaEnvelope /> {item.email}</div>
                    <div className={cx("row")}><FaPhoneAlt /> {item.phone}</div>
                </div>
              </td>

              <td>
                <div className={cx("cv-pill")}>
                    <a 
                        href={item.cvUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className={cx("filename")}
                        title="Nhấn để xem file"
                    >
                        {item.cvName}
                    </a>
                    
                    <a href={item.cvUrl} download className={cx("download-btn")}>
                        <FaDownload />
                    </a>
                </div>
              </td>

              <td className={cx("uppercase")}>{item.project}</td>
              <td className={cx("text-center")}>{item.approvedDate}</td>

              <td className={cx("text-center")}>
                <button 
                    className={cx("btn-issue")}
                    onClick={() => onIssue(item)}
                >
                    <span className={cx("icon")}><FaDownload/></span> Cấp chứng chỉ
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CertificateTable;