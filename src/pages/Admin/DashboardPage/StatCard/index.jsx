import React from "react";
import styles from "./StatCard.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function StatCard({ title, count, icon, color }) {
  return (
    <div className={cx("card")}>
      <div className={cx("info")}>
        <h3>{count}</h3>
        <p>{title}</p>
      </div>
      <div className={cx("icon-box")} style={{ backgroundColor: color }}>
        {icon}
      </div>
    </div>
  );
}

export default StatCard;