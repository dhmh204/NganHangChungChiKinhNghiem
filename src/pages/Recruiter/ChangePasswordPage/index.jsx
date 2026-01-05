import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./ChangePasswordPage.module.scss";

import InputForm from "~/components/InputForm";

const cx = classNames.bind(styles);

function ChangePasswordPage() {
  const [formData, setFormData] = useState({
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }
    console.log("Dữ liệu gửi đi:", formData);
    alert("Đổi mật khẩu thành công!");
  };

  const handleCancel = () => {
    setFormData({
      email: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <div className={cx("container")}>
      <div className={cx("card")}>
        <h2 className={cx("title")}>Đổi mật khẩu</h2>
        <div className={cx("divider")}></div>

        <div className={cx("form-content")}>
          <div className={cx("form-group")}>
            <label>Email đăng nhập</label>
            <InputForm
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Nhập email"
              className={cx("full-width-input")}
            />
          </div>

          <div className={cx("form-group")}>
            <label>Mật khẩu hiện tại</label>
            <InputForm
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              placeholder="Nhập mật khẩu hiện tại"
              className={cx("full-width-input")}
            />
          </div>

          <div className={cx("form-group")}>
            <label>Mật khẩu mới</label>
            <InputForm
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              placeholder="Nhập mật khẩu mới"
              className={cx("full-width-input")}
            />
          </div>

          <div className={cx("form-group")}>
            <label>Nhập lại mật khẩu mới</label>
            <InputForm
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Nhập lại mật khẩu mới"
              className={cx("full-width-input")}
            />
          </div>

          <div className={cx("actions")}>
            <button className={cx("btn-cancel")} onClick={handleCancel}>
              Hủy
            </button>
            <button className={cx("btn-save")} onClick={handleSave}>
              Lưu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePasswordPage;
