import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./HeaderSection.module.scss";
import { RiErrorWarningLine } from "react-icons/ri";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const cx = classNames.bind(styles);

function HeaderSection({title, type}) {
  const [isLike, setIsLike] = useState(false);

  return (
     <div className={cx("header")}>
            <div className={cx("title")}>{title}</div>
            {
                type=="favorite"? 
                <div className={cx("icon-heart", "icon")} onClick={() => setIsLike(!isLike)}>
              {isLike ? <FaHeart className={cx("heart-fill")} /> : <FaRegHeart />}
            </div> : type=="details" ? <div className={cx("icon")}>
                <RiErrorWarningLine />
            </div>:<div></div>
            }
            
          </div>
  )
}

export default HeaderSection