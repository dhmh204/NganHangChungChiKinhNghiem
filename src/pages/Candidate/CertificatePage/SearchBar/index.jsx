import React from "react";
import classNames from "classnames/bind";
import styles from "./SearchBar.module.scss";
import { FaSearch } from "react-icons/fa";

const cx = classNames.bind(styles);

function SearchBar({ value, onChange, placeholder = "Tìm kiếm..." }) {
  return (
    <div className={cx("search-section")}>
      <div className={cx("search-box")}>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <button className={cx("search-btn")}>
          <FaSearch className={cx("icon")} /> Tìm kiếm
        </button>
      </div>
    </div>
  );
}

export default SearchBar;