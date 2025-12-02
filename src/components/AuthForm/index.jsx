import React, { useState } from "react";
import classNames from "classnames/bind";

import { FaUser, FaPhoneVolume } from "react-icons/fa6";

import styles from "./AuthForm.module.scss";
import InputForm from "~/components/InputForm";
import SocialLogin from "~/components/SocialLogin";
import Button from "~/components/Button";
import ChooseLogin from "~/components/ChooseLogin";
import IconSecurity from "~/assets/icons/IconSecurity";
import TermAndPolicy from "~/components/TermAndPolicy";

const cx = classNames.bind(styles);

function AuthForm({ handleChangeRule, rule, isRegister = false }) {
  const [usePhone, setUsePhone] = useState(true);

  const toggleLoginMethod = () => {
    setUsePhone(!usePhone);
  };

  const placeholderText = usePhone
    ? "Vui lòng nhập số điện thoại"
    : "Vui lòng nhập email";
  const buttonText = isRegister ? "Đăng ký" : "Đăng nhập";

  return (
    <div className={cx("auth-form")}>
      <ChooseLogin
        chooseLogin={usePhone}
        handleChooseLogin={toggleLoginMethod}
        handleChangeRule={handleChangeRule}
        rule={rule}
      />

      <div className={cx("input-group")}>
        {isRegister && (
          <InputForm icon={<FaUser />} placeholder="Nhập họ và tên" />
        )}
        {isRegister && (
          <InputForm
            icon={<FaPhoneVolume />}
            placeholder="Nhập số điện thoại"
          />
        )}

        {!isRegister && <InputForm placeholder={placeholderText} />}
        <InputForm
          icon={isRegister ? <IconSecurity /> : null}
          type="password"
          placeholder="Vui lòng nhập mật khẩu"
        />

        {isRegister && (
          <InputForm
            icon={isRegister ? <IconSecurity /> : null}
            type="password"
            placeholder="Nhập lại mật khẩu"
          />
        )}
      </div>

      {!isRegister && (
        <div className={cx("forgot-password")}>Quên mật khẩu?</div>
      )}

      <TermAndPolicy id="agree-terms">
        <label htmlFor="agree-terms" className={cx("text")}>
          Đồng ý với{" "}
          <a href="/" className={cx("link")}>
            {" "}
            Thỏa thuận người dùng{" "}
          </a>{" "}
          và{" "}
          <a href="/" className={cx("link")}>
            Chính sách bảo mật
          </a>
          , đồng thời cho phép CertifyX quản lý thông tin tài khoản của tôi
        </label>
      </TermAndPolicy>

      <Button isLinear={true} text={buttonText} />

      <SocialLogin />
    </div>
  );
}

export default AuthForm;
