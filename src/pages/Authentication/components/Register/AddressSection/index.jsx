import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";

import * as provinceService from "~/services/provinceService";

import styles from "./AddressSection.module.scss";
import InputForm from "~/components/InputForm";
import SelectInput from "~/components/SelectInput";
import { FaMapMarkerAlt } from "react-icons/fa";


const cx = classNames.bind(styles);

function AddressSection({ onAddressChange }) {
  const [fullData, setFullData] = useState([]);

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);

  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

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
    <>
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

      <div className={cx("label")}>Phường/ xã</div>
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

      <div className={cx("label")}>Địa điểm chi tiết</div>
      <InputForm placeholder="Nhập số nhà...." large />
    </>
  );
}

export default AddressSection