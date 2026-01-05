import React from "react";
import classNames from "classnames/bind";
import styles from "./PostTable.module.scss";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const cx = classNames.bind(styles);

function PostTable({ posts, onDelete, onToggleStatus }) {
  
  const renderStatus = (status) => {
      switch (status) {
          case "approved":
              return <span className={cx("badge", "success")}>Đã duyệt</span>;
          case "pending":
              return <span className={cx("badge", "warning")}>Chờ duyệt</span>;
          case "rejected":
              return <span className={cx("badge", "error")}>Bị từ chối</span>;
          default:
              return null;
      }
  };

  return (
    <div className={cx("table-container")}>
      <table className={cx("table")}>
        <thead>
          <tr>
            <th className={cx("th-title")}>Tiêu đề bài đăng</th>
            <th className={cx("th-date")}>Ngày tạo</th>
            <th className={cx("th-date")}>Hạn nộp</th>
            <th className={cx("th-cv")}>CV ứng tuyển</th>
            <th className={cx("th-status")}>Trạng thái</th>
            <th className={cx("th-action")}>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {posts.length > 0 ? (
            posts.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className={cx("post-info")}>
                    <span className={cx("title")}>{item.title}</span>
                    <span className={cx("code")}>{item.code}</span>
                  </div>
                </td>
                
                <td className={cx("text-center")}>{item.createdDate}</td>
                <td className={cx("text-center")}>{item.deadline}</td>
                <td className={cx("text-center", "cv-count")}>{item.cvCount}</td>
                
                <td className={cx("text-center")}>
                    {renderStatus(item.status)}
                </td>

                <td>
                  <div className={cx("actions")}>
                    <button className={cx("btn-action", "edit")}>
                      <FaPen /> Sửa
                    </button>
                    <button 
                        className={cx("btn-action", "delete")}
                        onClick={() => onDelete(item.id)}
                    >
                      <FaTrashAlt /> Xóa
                    </button>
                    
                    <label className={cx("switch")}>
                      <input 
                        type="checkbox" 
                        checked={item.active} 
                        onChange={() => onToggleStatus(item.id)}
                      />
                      <span className={cx("slider")}></span>
                    </label>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
                <td colSpan="6" className={cx("empty-message")}>Không có bài đăng nào</td>
            </tr>
          )}
        </tbody>
      </table>
      
      <div className={cx("footer-note")}>
        Chú ý: Hệ thống chỉ hiển thị các bài đăng đang mở hoặc đã hết hạn 1 năm gần đây.
      </div>
    </div>
  );
}

export default PostTable;