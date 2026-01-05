import React from "react";
import styles from "./ActivityTable.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function ActivityTable({ activities }) {
  return (
    <div className={cx("table-container")}>
        <h3 className={cx("title")}>Hoạt động gần đây</h3>
        <table className={cx("table")}>
            <thead>
                <tr>
                    <th>THỜI GIAN</th>
                    <th>NGƯỜI DÙNG</th>
                    <th>HÀNH ĐỘNG</th>
                    <th>TRẠNG THÁI</th>
                </tr>
            </thead>
            <tbody>
                {activities.map((item, index) => (
                    <tr key={index}>
                        <td>{item.time}</td>
                        <td className={cx("bold")}>{item.user}</td>
                        <td>{item.action}</td>
                        <td>
                            <span className={cx("badge", item.statusType)}>{item.status}</span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}

export default ActivityTable;