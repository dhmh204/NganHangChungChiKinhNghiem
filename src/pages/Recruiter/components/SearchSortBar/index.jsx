import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./SearchSortBar.module.scss";
import { FaSearch, FaChevronDown } from "react-icons/fa";

const cx = classNames.bind(styles);

function SearchSortBar({ 
    placeholder = "Tìm kiếm...", 
    sortOptions = ["Mới nhất", "Cũ nhất"], 
    onSearch, 
    onSort 
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSort, setShowSort] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Sắp xếp");

  const handleSortSelect = (option) => {
    setSelectedSort(option);
    setShowSort(false);
    if (onSort) onSort(option);
  };

  const handleSearchClick = () => {
    if (onSearch) onSearch(searchTerm);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        handleSearchClick();
    }
  };

  return (
    <div className={cx("wrapper")}>
      
      <div className={cx("sort-container")}>
        <div className={cx("sort-trigger")} onClick={() => setShowSort(!showSort)}>
            <span>{selectedSort}</span>
            <FaChevronDown className={cx("icon-down", { open: showSort })} />
        </div>
        
        {showSort && (
            <div className={cx("sort-menu")}>
                {sortOptions.map((option, index) => (
                    <div 
                        key={index} 
                        className={cx("sort-item")} 
                        onClick={() => handleSortSelect(option)}
                    >
                        {option}
                    </div>
                ))}
            </div>
        )}
      </div>

      <div className={cx("divider")}></div>

      <div className={cx("search-box")}>
        <input 
            type="text" 
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
        />
      </div>

      <div className={cx("divider")}></div>

      <button className={cx("btn-search")} onClick={handleSearchClick}>
        <FaSearch /> Tìm kiếm
      </button>

    </div>
  );
}

export default SearchSortBar;