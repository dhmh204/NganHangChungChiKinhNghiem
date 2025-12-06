import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";

import styles from "./FormRegisForBussines.module.scss";
import ChooseLogin from "~/components/ChooseLogin";
import Regulations from "../Regulations";
import Button from "~/components/Button";
import TermAndPolicy from "~/components/TermAndPolicy";
import AccountSection from "../AccountSection";
import BusinessSection from "../BusinessSection";

const cx = classNames.bind(styles);
function FormRegisForBussines({ handleChangeRule, rule, isRegister = true }) {
  const [useGoogle, setUseGoogle] = React.useState(false);

  const toggleLoginMethod = () => {
    setUseGoogle(!useGoogle);
  };

  return (
    <div className={cx("wrapper")}>
      {!useGoogle ? <Regulations /> : null}
      <div className={cx("form-container")}>
        <div className={cx("heading")}>
          {useGoogle ? "Thông tin doanh nghiệp" : "Tài khoản"}
        </div>
        <ChooseLogin
          chooseLogin={useGoogle}
          handleChooseLogin={toggleLoginMethod}
          handleChangeRule={handleChangeRule}
          rule={rule}
          isBusiness={true}
        />
        {useGoogle ? (
          <div className={cx("google-form-content")}>
            <BusinessSection />
          </div>
        ) : (
          <>
            <AccountSection />
            <div className={cx("heading")}>Thông tin doanh nghiệp</div>

            <BusinessSection />
          </>
        )}
      </div>
      <div className={cx("policy-check")}>
        <TermAndPolicy id="agree-terms" large>
          {" "}
          <label htmlFor="agree-terms" className={cx("text")}>
            Tôi đã đọc và đồng ý với{" "}
            <a href="/" className={cx("link")}>
              Điều khoản dịch vụ
            </a>
              và  
            <a href="/" className={cx("link")}>
              Chính sách bảo mật
            </a>
             của TopCV.
          </label>
        </TermAndPolicy>
      </div>
      <Button isLinear={true} large text="Đăng ký" />
    </div>
  );
}

export default FormRegisForBussines;
