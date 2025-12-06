import React from "react";
import classNames from "classnames/bind";

import { FaPhoneVolume } from "react-icons/fa6";


import styles from "./Regulations.module.scss";

const cx = classNames.bind(styles);
function Regulations() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("heading")}>Quy định</div>
      <div className={cx("content")}>
        <p>
          Để đảm bảo chất lượng dịch vụ, CertifyX không cho phép một người dùng
          tạo nhiều tài khoản khác nhau.
        </p>
        <p>
          Nếu phát hiện vi phạm, CertifyX sẽ ngừng cung cấp dịch vụ tới tất cả
          các tài khoản trùng lặp hoặc chặn toàn bộ truy cập tới hệ thống
          website của CertifyX. Sau khi đăng ký tài khoản nhà tuyển dụng (NTD)
          và cung cấp các thông tin cần thiết, NTD có thể được hỗ trợ hiển thị
          tin tuyển dụng cơ bản (standard), ngoại trừ một số vị trí nhất định.
          Số lượng tin đăng và cách thức hiển thị phụ thuộc vào quy định của
          TopCV tại từng thời điểm.
        </p>
        <p>Mọi thắc mắc vui lòng liên hệ Hotline CSKH:</p>
       <div className={cx("hotlines") }>
         <div className={cx("hotline")}>
            <FaPhoneVolume className={cx("icon")} />
            <div>(024) 71023232</div>     
        </div>

         <div className={cx("hotline")}>
            <FaPhoneVolume className={cx("icon")} />
            <div>(024) 71023232</div>     
        </div>

       </div>
      </div>
    </div>
  );
}

export default Regulations;
