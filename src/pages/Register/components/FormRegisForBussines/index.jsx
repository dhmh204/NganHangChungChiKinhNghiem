import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume, FaUser } from "react-icons/fa6";
import IconSecurity from "~/assets/icons/IconSecurity";

import * as provinceService from "~/services/provinceService";

import styles from "./FormRegisForBussines.module.scss";
import InputForm from "~/components/InputForm";
import ChooseLogin from "~/components/ChooseLogin";
import Regulations from "../Regulations";
import Radio from "~/components/Radio";
import SelectInput from "~/components/SelectInput";
import { FaMapMarkerAlt } from "react-icons/fa";
import Button from "../../../../components/Button";

const cx = classNames.bind(styles);
function FormRegisForBussines({ handleChangeRule, rule, isRegister = true }) {
  const [usePhone, setUsePhone] = React.useState(false);
  const [gender, setGender] = React.useState("nu");

  const [fullData, setFullData] = useState([]);

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);

  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const toggleLoginMethod = () => {
    setUsePhone(!usePhone);
  };

  useEffect(() => {
    const fetchAllData = async () => {
      const data = await provinceService.getAllProvinces();
      setFullData(data);
      setProvinces(data);
    };
    fetchAllData();
  }, []);

  const handleProvinceChange = (e) => {
    const provinceId = e.target.value;
    setSelectedProvince(provinceId);

    setSelectedDistrict("");
    setDistricts([]);

    const foundProvince = fullData.find(
      (item) => String(item.id) === String(provinceId)
    );

    if (foundProvince && foundProvince.wards) {
      setDistricts(foundProvince.wards);
    }
  };

  return (
    <div className={cx("wrapper")}>
      <Regulations />
      <div className={cx("form-container")}>
        <div className={cx("heading")}>Tài khoản</div>
        <ChooseLogin
          chooseLogin={usePhone}
          handleChooseLogin={toggleLoginMethod}
          handleChangeRule={handleChangeRule}
          rule={rule}
          isBusiness={true}
        />
        <div className={cx("form-content", "account-info")}>
          <InputForm
            icon={<MdEmail className={cx("icon-mail")} />}
            placeholder="Nhập email"
            large
          />
          <InputForm
            icon={<IconSecurity />}
            type="password"
            placeholder="Nhập mật khẩu"
            large
          />
          <InputForm
            icon={<IconSecurity />}
            type="password"
            placeholder="Nhập lại mật khẩu"
            large
          />
        </div>
        <div className={cx("heading")}>Thông tin doanh nghiệp</div>

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
          <div className={cx("form-col")}>
            <div className={cx("label")}>Địa điểm làm việc</div>

            <div className={cx("form-group")}>
              <SelectInput
                icon={<FaMapMarkerAlt />}
                placeholder="Chọn tỉnh/ thành phố"
                options={provinces}
                value={selectedProvince}
                onChange={handleProvinceChange}
              />
            </div>
          </div>

          <div className={cx("label")} style={{ marginTop: "15px" }}>
            Phường/ xã
          </div>
          <div className={cx("form-group")}>
            <SelectInput
              icon={<FaMapMarkerAlt />}
              placeholder="Chọn quận/ huyện"
              options={districts}
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              disabled={!selectedProvince}
            />
          </div>
        </div>
      <div className={cx('policy-check')}>
        <input 
          id='agree-terms' 
          type='checkbox' 
          className={cx('checkbox')} 
        />
        <label htmlFor='agree-terms' className={cx('text')}>
        Tôi đã đọc và đồng ý với <a href='/' className={cx('link')}>Điều khoản dịch vụ</a> và <a href='/' className={cx('link')}>Chính sách bảo mật</a> của TopCV.
        </label>
      </div>
      <Button
        isLinear={true}
        large
        text='Đăng ký'
      />
      </div>
    </div>
  );
}

export default FormRegisForBussines;
