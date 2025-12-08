import React from "react";
import classNames from "classnames/bind";
import styles from "./JobCardBubble.module.scss"; 

const cx = classNames.bind(styles);

function JobCardBubble({ data }) {
  return (
    <div className={cx("job-card-bubble")}>
      <h4>{data.title}</h4>
      <p>{data.description}</p>
      <p style={{ fontSize: "12px", color: "#666" }}>{data.address}</p>

      <div className={cx("card-footer")}>
        <img src={data.logo} alt="logo" />
        <span>{data.companyName}</span>
        <span style={{ marginLeft: "4px", fontWeight: "bold" }}>HR</span>
      </div>
    </div>
  );
}

export default JobCardBubble;