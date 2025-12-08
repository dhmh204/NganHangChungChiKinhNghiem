import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./ChangePasswordForm.module.scss";
import InputForm from "~/components/InputForm";

const cx = classNames.bind(styles);

function ChangePasswordForm() {
  const [passData, setPassData] = useState({
    email: "nhungdo@greenlara.com",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassData((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (passData.newPassword.length < 6) {
      newErrors.newPassword = "Mật khẩu mới phải có ít nhất 6 ký tự";
      isValid = false;
    }

    if (passData.newPassword !== passData.confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu nhập lại không khớp";
      isValid = false;
    }

    if (!passData.currentPassword) {
        newErrors.currentPassword = "Vui lòng nhập mật khẩu hiện tại";
        isValid = false;
    }

    setErrors(newErrors); 
    return isValid;
  };

  const handleSave = () => {
    if (!validateForm()) {
      return; 
    }

    console.log("Dữ liệu hợp lệ, gửi đi:", passData);
    alert("Đổi mật khẩu thành công!");
    
    setPassData(prev => ({ ...prev, currentPassword: "", newPassword: "", confirmPassword: "" }));
    setErrors({});
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <h2 className={cx("title")}>Đổi mật khẩu</h2>
      </div>

      <div className={cx("form-content")}>
        
        <div className={cx("form-group")}>
          <label>Email đăng nhập</label>
          <InputForm
            name="email"
            value={passData.email}
            readOnly={true}
            className={cx("full-width-input", "disabled-input")}
          />
        </div>

        <div className={cx("form-group")}>
          <label>Mật khẩu hiện tại</label>
          <InputForm
            type="password"
            name="currentPassword"
            placeholder="Nhập mật khẩu hiện tại"
            value={passData.currentPassword}
            onChange={handleChange}
            className={cx("full-width-input", { error: errors.currentPassword })}
          />
          {errors.currentPassword && <span className={cx("error-msg")}>{errors.currentPassword}</span>}
        </div>

        <div className={cx("form-group")}>
          <label>Mật khẩu mới</label>
          <InputForm
            type="password"
            name="newPassword"
            placeholder="Nhập mật khẩu mới"
            value={passData.newPassword}
            onChange={handleChange}
            className={cx("full-width-input", { error: errors.newPassword })}
          />
          {errors.newPassword && <span className={cx("error-msg")}>{errors.newPassword}</span>}
        </div>

        <div className={cx("form-group")}>
          <label>Nhập lại mật khẩu mới</label>
          <InputForm
            type="password"
            name="confirmPassword"
            placeholder="Nhập lại mật khẩu mới"
            value={passData.confirmPassword}
            onChange={handleChange}
            className={cx("full-width-input", { error: errors.confirmPassword })}
          />
          {errors.confirmPassword && <span className={cx("error-msg")}>{errors.confirmPassword}</span>}
        </div>

        <div className={cx("actions")}>
          <button className={cx("btn", "btn-cancel")}>Hủy</button>
          <button className={cx("btn", "btn-save")} onClick={handleSave}>
            Lưu
          </button>
        </div>

      </div>
    </div>
  );
}

export default ChangePasswordForm;