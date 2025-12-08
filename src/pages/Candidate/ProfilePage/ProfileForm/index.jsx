import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./ProfileForm.module.scss";
import InputForm from "~/components/InputForm"; // Nhớ sửa đường dẫn đúng tới component của bạn

const cx = classNames.bind(styles);

function ProfileForm() {
  // 1. State lưu dữ liệu (Ban đầu rỗng)
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
  });

  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    // Giả vờ đợi 1 giây (simulating network request)
    const timer = setTimeout(() => {
      
      const fakeDataFromDB = {
        fullName: "Đỗ Thị Quỳnh Nhung",
        phone: "0987654321",
        email: "nhungdo@gmail.com",
        address: "Cầu Giấy, Hà Nội",
      };

      setFormData(fakeDataFromDB);
      setIsLoading(false); 
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    alert("Đã lưu thông tin mới: \n" + JSON.stringify(formData, null, 2));
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <h2 className={cx("title")}>Thông tin cá nhân</h2>
      </div>

      <div className={cx("form-content")}>
        
        <div className={cx("form-group")}>
          <label>Họ và tên <span className={cx("required")}>*</span></label>
          <InputForm
            name="fullName"
            placeholder="Nhập họ và tên"
            value={formData.fullName} 
            onChange={handleChange}
            className={cx("full-width-input")} 
            disabled={isLoading}
          />
        </div>

        <div className={cx("form-group")}>
          <label>Số điện thoại <span className={cx("required")}>*</span></label>
          <InputForm
            name="phone"
            placeholder="Nhập số điện thoại"
            value={formData.phone}
            onChange={handleChange}
            className={cx("full-width-input")}
            disabled={isLoading}
          />
        </div>

        <div className={cx("form-group")}>
          <label>Email <span className={cx("required")}>*</span></label>
          <InputForm
            name="email"
            type="email"
            placeholder="Nhập email"
            value={formData.email}
            onChange={handleChange}
            className={cx("full-width-input")}
            disabled={isLoading}
          />
        </div>

        <div className={cx("form-group")}>
          <label>Địa chỉ</label>
          <InputForm
            name="address"
            placeholder="Nhập địa chỉ"
            value={formData.address}
            onChange={handleChange}
            className={cx("full-width-input")}
            disabled={isLoading}
          />
        </div>
        <div className={cx("actions")}>
          <button className={cx("btn", "btn-cancel")}>Hủy</button>
          <button 
            className={cx("btn", "btn-save")} 
            onClick={handleSave}
            disabled={isLoading} 
          >
            {isLoading ? "Đang tải..." : "Lưu"}
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProfileForm;