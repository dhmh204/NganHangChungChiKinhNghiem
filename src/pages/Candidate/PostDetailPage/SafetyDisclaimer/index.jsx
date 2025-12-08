import React from "react";
import classNames from "classnames/bind";
import styles from "./SafetyDisclaimer.module.scss";

import LogoPurple from "~/assets/images/LogoPurple";

const cx = classNames.bind(styles);

function SafetyDisclaimer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("title")}>CertifyX Nhắc Nhở An Toàn</div>

        <p className={cx("content")}>
          Người sử dụng lao động và nhà tuyển dụng bị nghiêm cấm thực hiện các
          hành vi xâm hại đến quyền lợi hợp pháp của ứng viên. Nếu phát hiện vi
          phạm nêu trên, vui lòng{" "}
          <a href="/report" onClick={(e) => e.preventDefault()}>
            báo cáo ngay
          </a>{" "}
          lập tức.
        </p>

        <div className={cx("footer-logo")}>
          <LogoPurple width={80} />
        </div>
      </div>
    </div>
  );
}

export default SafetyDisclaimer;
