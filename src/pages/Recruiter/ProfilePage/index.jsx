import React, { useState, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./ProfilePage.module.scss";
import { FaCamera } from "react-icons/fa";

const cx = classNames.bind(styles);

function ProfilePage() {
  const [formData, setFormData] = useState({
    fullName: "ĐỖ THỊ QUỲNH NHUNG",
    phone: "",
    email: ""
  });
  
  const [avatar, setAvatar] = useState("https://i.pravatar.cc/300?img=32"); 
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTriggerUpload = () => {
    fileInputRef.current.click();
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
    }
  };

  const handleSave = () => {
    console.log("Saving data:", formData);
    alert("Đã lưu thông tin thành công!");
  };

  return (
    <div className={cx("container")}>
      <div className={cx("card")}>
        <h2 className={cx("title")}>Cài đặt thông tin cá nhân</h2>
        <div className={cx("divider")}></div>

        <div className={cx("form-content")}>
          <div className={cx("avatar-section")}>
            <div className={cx("avatar-wrapper")}>
              <img src={avatar} alt="Avatar" className={cx("avatar-img")} />
              
              <button className={cx("btn-camera")} onClick={handleTriggerUpload}>
                <FaCamera />
              </button>
              
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleAvatarChange} 
                style={{ display: "none" }} 
                accept="image/*"
              />
            </div>
          </div>

          <div className={cx("form-group")}>
            <label>Họ và tên</label>
            <input 
              type="text" 
              name="fullName"
              value={formData.fullName} 
              onChange={handleChange}
              placeholder="Nhập họ và tên"
            />
          </div>

          <div className={cx("form-group")}>
            <label>Số điện thoại</label>
            <input 
              type="text" 
              name="phone"
              value={formData.phone} 
              onChange={handleChange}
              placeholder="Nhập số điện thoại"
            />
          </div>

          <div className={cx("form-group")}>
            <label>Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email} 
              onChange={handleChange}
              placeholder="Nhập email"
            />
          </div>

          <div className={cx("actions")}>
            <button className={cx("btn-cancel")}>Hủy</button>
            <button className={cx("btn-save")} onClick={handleSave}>Lưu</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProfilePage;