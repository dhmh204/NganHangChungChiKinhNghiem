import React from "react";
import classNames from "classnames/bind";
import { IoArrowBack } from "react-icons/io5";

import styles from "./WelcomeBanner.module.scss";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function WelcomeBanner({ title, heading, contentBtn, isLogin=true}) {
  return (
    <div className={cx("panel", isLogin ? "login-panel" : "regis-panel")}>
      <div className={cx("logo", isLogin ? "login-logo" : "regis-logo")}>
        <img src={images.logo} />
        {isLogin && <IoArrowBack
         size={50} 
         color="#5E5E5E" 
         className={cx("btn-back")} />}
      </div>

      <div className={cx("content", isLogin ? "login-content" : "regis-content")}>
          

        <div className={cx("heading")}>{heading}</div>
        <div className={cx("text")}>{title}</div>
        <div className={cx("btn")}>{contentBtn}</div>


      </div>
      
    </div>
  );
}

export default WelcomeBanner;
