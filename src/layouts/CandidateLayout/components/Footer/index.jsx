import React from "react";
import classNames from "classnames/bind";
import { FaFacebook, FaTiktok, FaLinkedin, FaYoutube } from "react-icons/fa";

import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("column", "company-info")}>
          <h3 className={cx("company-name")}>
            Công ty Cổ phần CertifyX Việt Nam
          </h3>
          <p className={cx("slogan")}>
            Tích hợp công cụ chat, trực tiếp trao đổi với doanh nghiệp
          </p>

          <div className={cx("contact-list")}>
            <div className={cx("contact-item")}>
              <span className={cx("label")}>Hotline :</span>
              <span className={cx("value")}>028 3873 11111</span>
            </div>
            <div className={cx("contact-item")}>
              <span className={cx("label")}>Email :</span>
              <span className={cx("value")}>atgtechculture@certifyxvn.com</span>
            </div>
            <div className={cx("contact-item")}>
              <span className={cx("label")}>Địa chỉ :</span>
              <span className={cx("value")}>
                48 Cao Thắng, Hải Châu, Đà Nẵng
              </span>
            </div>
          </div>
        </div>

        <div className={cx("column", "links-section")}>
          <div className={cx("link-group")}>
            <h4 className={cx("group-title")}>Dịch vụ doanh nghiệp</h4>
            <ul>
              <li>
                <a href="/news">Tin tức cập nhật</a>
              </li>
            </ul>
          </div>

          <div className={cx("link-group")}>
            <h4 className={cx("group-title")}>Hỗ trợ</h4>
            <ul>
              <li>
                <a href="/privacy">Chính sách bảo mật</a>
              </li>
              <li>
                <a href="/terms">Thỏa thuận người dùng</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={cx("column", "social-section")}>
          <h4 className={cx("group-title", "social-title")}>
            Cộng đồng CertifyX
          </h4>
          <div className={cx("social-icons")}>
            <a href="/" className={cx("social-link")}>
              <FaFacebook />
            </a>
            <a href="/" className={cx("social-link")}>
              <FaTiktok />
            </a>
            <a href="/" className={cx("social-link")}>
              <FaLinkedin />
            </a>
            <a href="/" className={cx("social-link")}>
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;