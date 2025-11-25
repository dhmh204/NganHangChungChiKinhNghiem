import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./AuthLayout.module.scss"; 
import images from "~/assets/images";
import AuthForm from "../../components/AuthForm";


const cx = classNames.bind(styles)


function AuthLayout({  heading, rule, handleChangeRule, isRegister = false, children     }) {
  return (
    <div className={cx("panel")}>
      <div className={cx("logo")}><img src={images.logo} /></div>
      <div className={cx("subheading")}>Chào mừng đến với CertifyX</div>
      <div className={cx("heading")}>{rule} {heading}</div>
    {
      rule=='Ứng viên' && isRegister ? (
      <AuthForm 
          rule={rule} 
          handleChangeRule={handleChangeRule}
          isRegister={isRegister} 
      /> ) : (
        children
      )
    }
    </div>
  );
} 
export default AuthLayout;