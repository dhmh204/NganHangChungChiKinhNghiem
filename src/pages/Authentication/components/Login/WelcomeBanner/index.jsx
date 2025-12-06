import React from "react";
import classNames from "classnames/bind";
import { IoArrowBack } from "react-icons/io5";
import styles from "./WelcomeBanner.module.scss";
import LogoWhite from "~/assets/images/LogoWhite";

const cx = classNames.bind(styles);

function WelcomeBanner({ isRegister, onSwitch }) {
  console.log(isRegister)
  return (
    <div className={cx("overlay-container", { active: isRegister })}>
      <div className={cx("overlay", {register:isRegister})}>
        
        <div className={cx("overlay-panel", "overlay-left")}>
          
          <div className={cx("logo")}><LogoWhite/></div>
         
          <div className={cx("content")}>
            <div className={cx("heading")}>Welcome Back!</div>
            <div className={cx("text")}>
              Để giữ kết nối với chúng tôi, vui lòng đăng nhập bằng thông tin cá nhân của bạn
            </div>
            <div className={cx("btn")} onClick={() => onSwitch(true)}>
                Đăng ký ngay
            </div>
          </div>
        </div>

        <div className={cx("overlay-panel", "overlay-right")}>
          
          <div className={cx("content")}>
            <div className={cx("heading")}>Hello, Friend!</div>
            <div className={cx("text")}>
                Nhập thông tin cá nhân của bạn và bắt đầu hành trình cùng chúng tôi!
            </div>
            <div className={cx("btn")} onClick={() => onSwitch(false)}>
                Đăng nhập
            </div>
          </div>
           <div className={cx("logo", {'regis-logo': isRegister})}>
              <LogoWhite/></div>

        </div>

      </div>
    </div>
  );
}
export default WelcomeBanner;