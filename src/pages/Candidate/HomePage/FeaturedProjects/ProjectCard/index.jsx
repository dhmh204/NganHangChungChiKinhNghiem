import React, { useState } from "react";
import classNames from "classnames/bind";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { HiMiniChatBubbleLeftEllipsis } from "react-icons/hi2";

import styles from "./ProjectCard.module.scss";

const cx = classNames.bind(styles);

function ProjectCard({ srcImg, title, desc, location, date, company, onClick }) {
  const [isLike, setIsLike] = useState(false);
  
  const avatarUrlDefault = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    title || "Job"
  )}&background=random&color=fff`;

  const handleLike = (e) => {
    e.stopPropagation();
    setIsLike(!isLike);
  };

  const handleChat = (e) => {
    e.stopPropagation();
    console.log("Chat clicked");
  };

  return (
    <div className={cx("wrapper")} onClick={onClick}>
      <div className={cx("main-content")}>
        <div className={cx("header")}>
          <img 
            className={cx("avatar")} 
            src={srcImg || avatarUrlDefault} 
            alt="logo" 
          />
          <div className={cx("info")}>
            <div className={cx("title")}>{title}</div>
            <div className={cx("description")}>{desc}</div>
          </div>
          
          <div className={cx("icon-heart")} onClick={handleLike}>
            {isLike ? <FaHeart className={cx("heart-fill")} /> : <FaRegHeart />}
          </div>
        </div>
        
        <div className={cx("meta")}>
           <div className={cx("date")}>Hôm nay</div>
           <div className={cx("location-badge")}>{location}</div>
        </div>
      </div>
      
      <div className={cx("footer")}>
        <div className={cx("company-name")}>{company}</div>
        
        <div className={cx("btn-chat")} onClick={handleChat}>
            <HiMiniChatBubbleLeftEllipsis /> 
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;