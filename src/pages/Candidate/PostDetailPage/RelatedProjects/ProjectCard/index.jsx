import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./ProjectCard.module.scss";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline, IoPaperPlane } from "react-icons/io5";
import { TbLocationFilled } from "react-icons/tb";

const cx = classNames.bind(styles);

function ProjectCard({
  logo,
  title,
  description,
  companyName,
  tags = [],
  isFavorite = false, 
showApplyBtn = true}
){
  const avatarUrlDefault = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    companyName
  )}&background=random&color=fff`;


  return (
    <div className={cx("wrapper")}>
      <div className={cx("logo-box")}>
        <img src={logo || avatarUrlDefault} alt={companyName} />
      </div>

      <div className={cx("info")}>
        <h3 className={cx("title")}>{title}</h3>

        <p className={cx("description")}>{description}</p>

        <div className={cx("tags")}>
          {tags.map((tag, index) => (
            <span key={index} className={cx("tag")}>
              {tag}
            </span>
          ))}
        </div>

        <div className={cx("company-name")}>{companyName}</div>
      </div>

      <div className={cx("actions")}>
        <div className={cx("heart-btn")}>
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </div>

        <div className={cx("buttons-group")}>
          {showApplyBtn && (
            <button className={cx("btn", "primary")}>
              <TbLocationFilled size={16} /> Nộp CV
            </button>
          )}

          <button className={cx("btn", "outline")}>
            <IoChatbubbleEllipsesOutline size={16} /> Giao tiếp
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
