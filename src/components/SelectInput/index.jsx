import React from "react";
import classNames from "classnames/bind";
import styles from "./SelectInput.module.scss";
import { IoIosArrowDown } from "react-icons/io";

const cx = classNames.bind(styles);

function SelectInput({
  icon,
  options = [],
  value,
  onChange,
  placeholder = "Chọn...",
  name,
  disabled = false,
}) {
  return (
    <div className={cx("wrapper", { disabled })}>
      {icon && <span className={cx("icon-left")}>{icon}</span>}

      <select
        className={cx("select")}
        value={value}
        onChange={onChange}
        name={name}
        disabled={disabled}
      >
        <option value="">{placeholder}</option>

        {options.map((item) => {
          const val = item.id || item.name;
          const label = item.province || item.name;

          return (
            <option key={val} value={val}>
              {label}
            </option>
          );
        })}
      </select>

      <span className={cx("icon-right")}>
        <IoIosArrowDown />
      </span>
    </div>
  );
}

export default SelectInput;
