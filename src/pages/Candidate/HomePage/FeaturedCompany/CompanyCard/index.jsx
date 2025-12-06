import React, { useState } from "react";
import classNames from "classnames/bind";

import { FaHeart, FaRegHeart } from "react-icons/fa";

import styles from "./CompanyCard.module.scss";

const cx = classNames.bind(styles);

function CompanyCard({ company, image, location, specialized, totalPrj}) {
  const [isLike, setIsLike] = useState(false);
  const avatarUrlDefault = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    company
  )}&background=random&color=fff`;
  return (
    <div className={cx("wrapper")}>
      <div className={cx("main-content")}>
        <div className={cx("header")}>
          <img className={cx("avatar")} src={image || avatarUrlDefault}></img>
          <div className={cx("info")}>
            <div className={cx("company-name")}>{company}</div>
            <div className={cx("location-badge")}>{location}</div>
          </div>
          <div className={cx("icon-heart")} onClick={() => setIsLike(!isLike)}>
            {isLike ? <FaHeart className={cx("heart-fill")} /> : <FaRegHeart />}
          </div>
        </div>
        <div className={cx("specialized")}>{specialized} </div>
      </div>
      <div className={cx("footer")}>
       Dự án ({totalPrj})
      </div>
    </div>
  );
}

export default CompanyCard;
