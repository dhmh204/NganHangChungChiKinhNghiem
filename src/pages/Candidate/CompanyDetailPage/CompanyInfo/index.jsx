import React from "react";
import classNames from "classnames/bind";
import styles from "./CompanyInfo.module.scss";

const cx = classNames.bind(styles);

function CompanyInfo({ data }) {
  return (
    <div className={cx("wrapper")}>
      
      <div className={cx("section")}>
        <h3 className={cx("section-title")}>Giới thiệu công ty</h3>
        <div className={cx("section-content")}>
          <p>{data?.description || "Chưa có mô tả chi tiết."}</p>
        </div>
      </div>

      <div className={cx("section")}>
        <h3 className={cx("section-title")}>Thông tin công ty</h3>
        <ul className={cx("info-list")}>
          
          <li>
            <span className={cx("label")}>Lĩnh vực:</span>
            <span className={cx("value")}>{data?.industry}</span>
          </li>
          
          <li>
             <span className={cx("label")}>Loại hình hoạt động:</span>
             <span className={cx("value")}>Công ty cổ phần (Chưa có API)</span>
          </li>

          <li>
            <span className={cx("label")}>Mã số thuế:</span>
            <span className={cx("value")}>{data?.taxCode}</span>
          </li>
          
          <li>
            <span className={cx("label")}>Địa chỉ:</span>
            <span className={cx("value")}>{data?.address}</span>
          </li>
          
          <li>
            <span className={cx("label")}>Đại diện pháp luật:</span>
            <span className={cx("value")}>{data?.representative}</span>
          </li>
          
          <li>
            <span className={cx("label")}>Ngày hoạt động:</span>
            <span className={cx("value")}>{data?.foundedYear}</span>
          </li>

        </ul>
      </div>

    </div>
  );
}

export default CompanyInfo;