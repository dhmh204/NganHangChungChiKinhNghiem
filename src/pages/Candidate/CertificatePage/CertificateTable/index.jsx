import React from "react";
import classNames from "classnames/bind";
import styles from "./CertificateTable.module.scss";
import { FaDownload } from "react-icons/fa";

const cx = classNames.bind(styles);

function CertificateTable({ data }) {
  const handleOpenFile = (url) => {
    window.open(url, "_blank");
  };

  const handleDownload = (e, url, fileName) => {
    e.stopPropagation();
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={cx("table-wrapper")}>
      <table className={cx("cert-table")}>
        <thead>
          <tr>
            <th className={cx("th-stt")}>STT</th>
            <th className={cx("th-name")}>Tên dự án</th>
            <th className={cx("th-date")}>Ngày cấp</th>
            <th className={cx("th-issuer")}>Người cấp</th>
            <th className={cx("th-file")}>File chứng chỉ</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={item.id}>
                <td className={cx("text-center")}>{index + 1}</td>
                <td className={cx("project-name")}>{item.projectName}</td>
                <td className={cx("text-center")}>{item.date}</td>
                <td className={cx("text-center")}>{item.issuer}</td>

                <td className={cx("text-center")}>
                  <div className={cx("file-cell")}>
                    <span
                      className={cx("file-chip")}
                      onClick={() => handleOpenFile(item.fileUrl)}
                      title="Xem file"
                    >
                      {item.fileName}
                    </span>
                    
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className={cx("empty-message")}>
                Bạn chưa có chứng chỉ nào
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CertificateTable;