import React from "react";
import classNames from "classnames/bind";
import { FaGlobe, FaMapMarkerAlt, FaUsers, FaPlus } from "react-icons/fa";
import styles from "./CompanyHeader.module.scss";

const cx = classNames.bind(styles);

function CompanyHeader({ data }) {
  const defaultBanner = "https://marketplace.canva.com/EAE2cqa_nSQ/1/0/1600w/canva-purple-abstract-linkdln-banner-Image.jpg";
  const avatarDefault = `https://ui-avatars.com/api/?name=${encodeURIComponent(data?.name || "C")}&background=random&color=fff`;

  return (
    <div className={cx("wrapper")}>
      <div 
        className={cx("cover-image")} 
        style={{ backgroundImage: `url(${data?.bannerUrl || defaultBanner})` }}
      ></div>

      <div className={cx("content")}>
        <div className={cx("logo-box")}>
          <img src={data?.logoUrl || avatarDefault} alt="Logo" />
        </div>

        <div className={cx("info-box")}>
          <div className={cx("top-row")}>
            <h1 className={cx("company-name")}>{data?.name}</h1>
            <button className={cx("btn-follow")}>
              <FaPlus /> Theo dõi
            </button>
          </div>

          <div className={cx("meta-row")}>
            <div className={cx("meta-item")}>
              <FaGlobe className={cx("icon")} />
              <a href={data?.website} target="_blank" rel="noreferrer">
                {data?.website || "Chưa cập nhật website"}
              </a>
            </div>
            <div className={cx("meta-item")}>
              <FaUsers className={cx("icon")} />
              <span>{data?.size ? `${data.size} nhân viên` : "N/A"}</span>
            </div>
          </div>

          <div className={cx("meta-row")}>
            <div className={cx("meta-item")}>
              <FaMapMarkerAlt className={cx("icon")} />
              <span>{data?.address}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyHeader;