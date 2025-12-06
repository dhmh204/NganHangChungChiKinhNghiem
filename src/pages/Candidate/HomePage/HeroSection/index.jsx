import React from "react";
import classNames from "classnames/bind";
import styles from "./HeroSection.module.scss";
import SearchGroup from "./SearchGroup";
import CategorySidebar from "./CategorySidebar";

const cx = classNames.bind(styles);

function HeroSection() {
  return (
    <div className={cx("wrapper")}>
        <div className={cx("container")}> 
          <SearchGroup/>
          <CategorySidebar/>
        </div>
    </div>
  )
}

export default HeroSection