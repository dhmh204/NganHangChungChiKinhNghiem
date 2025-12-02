import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Auth.module.scss";

import LoginForm from "~/pages/Login";
import RegisterForm from "~/pages/Register";
import WelcomeBanner from "../Login/components/WelcomeBanner"; // Import WelcomeBanner
import { IoArrowBack } from "react-icons/io5";

const cx = classNames.bind(styles);

const AuthPage = () => {
  const [isRegisterMode, setIsRegisterMode] = useState(false);

  const handleSwitchMode = (isToRegister) => {
    setIsRegisterMode(isToRegister);
  };

  return (
    <div className={cx("wrapper")}>
      <div
        className={cx("container", { "right-panel-active": isRegisterMode })}
      >
        <div className={cx("form-container", "sign-up-container")}>
          <RegisterForm />
        </div>

        <div className={cx("form-container", "sign-in-container")}>
          <LoginForm />
        </div>
       {
        !isRegisterMode&& <div className={cx("icon-container")}
        >
          <IoArrowBack size={50} color="#fff" className={cx("btn-back")} />
        </div>
       }
        <WelcomeBanner
          isRegister={isRegisterMode}
          onSwitch={handleSwitchMode}
        />
      </div>
    </div>
  );
};

export default AuthPage;
