import React from "react";
import classNames from "classnames/bind";
import styles from "./ProjectTable.module.scss";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const cx = classNames.bind(styles);

function ProjectTable({ projects, onDelete, onToggleStatus }) {
  return (
    <div className={cx("table-container")}>
      <table className={cx("table")}>
        <thead>
          <tr>
            <th className={cx("w-stt")}>STT</th>
            <th>Tên dự án</th>
            <th className={cx("w-date")}>Ngày tạo</th>
            <th className={cx("w-action")}>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {projects.length > 0 ? (
            projects.map((item, index) => (
              <tr key={item.id}>
                <td className={cx("text-center")}>{index + 1}</td>
                <td>
                  <div className={cx("project-info")}>
                    <span className={cx("name")}>{item.name}</span>
                    <span className={cx("code")}>{item.code}</span>
                  </div>
                </td>
                <td className={cx("text-center")}>{item.date}</td>
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
                <td colSpan="4" className={cx("empty-message")}>Không có dự án nào</td>
            </tr>
          )}
        </tbody>
      </table>
      
      <div className={cx("footer-note")}>
        Chú ý: Hệ thống chỉ hiển thị các dự án đang mở hoặc đã hết hạn 1 năm gần đây.
      </div>
    </div>
  );
}

export default ProjectTable;