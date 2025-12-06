import React, { useState } from "react";
import classNames from "classnames/bind";

import { FaHeart, FaRegHeart } from "react-icons/fa";

import styles from "./ProjectCard.module.scss";
import { HiMiniChatBubbleLeftEllipsis, HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";

const cx = classNames.bind(styles);

function ProjectCard({ srcImg, title, desc, location, date, company }) {
  const [isLike, setIsLike] = useState(false);
  const avatarUrlDefault = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    title
  )}&background=random&color=fff`;
  return (
    <div className={cx("wrapper")}>
      <div className={cx("main-content")}>
        <div className={cx("header")}>
          <img className={cx("avatar")} src={srcImg || avatarUrlDefault}></img>
          <div className={cx("info")}>
            <div className={cx("title")}>{title}</div>
            <div className={cx("description")}>
              {desc} ThènkjhsajfhsmanfjshafdjhThènkjhsajfhsmanfjshafdjhThènkjhsajfhsmanfjshafdjh
            </div>
          </div>
          <div className={cx("icon-heart")} onClick={() => setIsLike(!isLike)}>
            {isLike ? <FaHeart className={cx("heart-fill")} /> : <FaRegHeart />}
          </div>
        </div>
        <div className={cx("meta")}>
            <div className={cx("date")}>{date}Hôm nay</div>
            <div className={cx("location-badge")}>{location}</div>
        </div>
      </div>
      <div className={cx("footer")}>
        <div className={cx("company-name")}>{company} </div>
        <div className={cx("btn-chat")}><HiMiniChatBubbleLeftEllipsis /> </div>
      </div>
    </div>
  );
}

export default ProjectCard;
