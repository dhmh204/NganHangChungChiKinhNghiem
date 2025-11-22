import React from "react";
import classNames from "classnames/bind";


import styles from "./LoginPanel.module.scss";
import images from "~/assets/images";
import LoginForm from "../LoginForm";

const cx = classNames.bind(styles);

function LoginPanel() {
  return (
    <div className={cx("panel")}>
      <div className={cx("logo")}>
        <img src={images.logo} />
      </div>
      <div className={cx("subheading")}>Chào mừng đến với CertifyX</div>
      <div className={cx("heading")}> Ứng viên đăng nhập</div>
        <LoginForm />
    </div>
  );
}

export default LoginPanel;
