import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { FaPhoneVolume, FaUser } from "react-icons/fa6";


import styles from "./BusinessSection.module.scss";
import InputForm from "~/components/InputForm";
import Radio from "~/components/Radio";
import AddressSection from "../AddressSection";


const cx = classNames.bind(styles);
function BusinessSection() {
      const [gender, setGender] = React.useState("nu");
    
  return (
    <div className={cx('wrapper')}>
      <div className={cx("business-info")}>
        <div className={cx("form-row")}>
          <div className={cx("form-col", "fullname")}>
            <div className={cx("label")}>Họ và tên </div>
            <InputForm placeholder="Nhập họ và tên" icon={<FaUser />} />
          </div>
          <div className={cx("form-col", "sex")}>
            <div className={cx("label")}>Giới tính</div>
            <Radio
              name="gender"
              value="nam"
              checked={gender === "nam"}
              onChange={() => setGender("nam")}
            >
              Nam
            </Radio>
            <Radio
              name="gender"
              value="nu"
              checked={gender === "nu"}
              onChange={() => setGender("nu")}
            >
              Nữ
            </Radio>
          </div>
        </div>
        <div className={cx("form-col")}>
          <div className={cx("label")}>Số điện thoại</div>
          <InputForm
            placeholder="Nhập số điện thoại của công ty"
            large
            icon={<FaPhoneVolume />}
          />
        </div>
        <div className={cx("form-col")}>
          <div className={cx("label")}>Công ty</div>
          <InputForm
            placeholder="Nhập tên công ty"
            large
            icon={<FaPhoneVolume />}
          />
        </div>
      </div>
      <AddressSection/>
    </div>
  );
}

export default BusinessSection;
