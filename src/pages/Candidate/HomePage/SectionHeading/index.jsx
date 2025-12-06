import React from "react";
import classNames from "classnames/bind";
import styles from "./SectionHeading.module.scss";

const cx = classNames.bind(styles);

function SectionHeading({text}) {
  return (
    <div className={cx("wrapper")}>
        <div className={cx("heading")}>{text}</div>
        <div className={cx('divider')}></div>
    </div>
  )
}

export default SectionHeading