import React from "react";
import classNames from "classnames/bind";
import styles from "./CompanyInfoCard.module.scss";

import { FaGlobe, FaUsers, FaMapMarkerAlt } from "react-icons/fa";

const cx = classNames.bind(styles);

function CompanyInfoCard({ logo, name, website, size, address }) {
  const safeName = name || "Company";
  const avatarUrlDefault = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    safeName
  )}&background=random&color=fff`;

  return (
    <div className={cx("wrapper")}>
      <div className={cx("logo-box")}>
        <img src={logo || avatarUrlDefault} alt={safeName} />
        <div className={cx("company-name")}>{safeName}</div>

      </div>


        <div className={cx("info-list")}>
          {website && (
            <div className={cx("info-item")}>
              <div className={cx("icon-box")}>
                <FaGlobe />
              </div>
              <a
                href={website}
                target="_blank"
                rel="noreferrer"
                className={cx("text")}
              >
                {website}
              </a>
            </div>
          )}

          {size && (
            <div className={cx("info-item")}>
              <div className={cx("icon-box")}>
                <FaUsers />
              </div>
              <span className={cx("text")}>{size}</span>
            </div>
          )}

          {address && (
            <div className={cx("info-item")}>
              <div className={cx("icon-box")}>
                <FaMapMarkerAlt />
              </div>
              <span className={cx("text")}>{address}</span>
            </div>
          )}
        </div>
    </div>
  );
}

export default CompanyInfoCard;
