import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./AuthLayout.module.scss"; 
import AuthForm from "../../components/AuthForm";
import LogoPurple from "../../assets/images/LogoPurple";



const cx = classNames.bind(styles)


function AuthLayout({  heading, rule, handleChangeRule, isRegister = false, children     }) {
  return (
    <div className={cx("panel")}>
      <div className={cx("logo")}><LogoPurple/></div>
      <div className={cx("subheading")}>Chào mừng đến với CertifyX</div>
      <div className={cx("heading")}>{rule} {heading}</div>
    {
      rule=='Doanh nghiệp' && isRegister ? (
        children

     ) : (
       <AuthForm 
          rule={rule} 
          handleChangeRule={handleChangeRule}
          isRegister={isRegister} 
      /> 
      )
    }
    </div>
  );
} 
export default AuthLayout;