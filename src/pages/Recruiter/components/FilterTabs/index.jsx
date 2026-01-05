import React from "react";
import classNames from "classnames/bind";
import styles from "./FilterTabs.module.scss";

const cx = classNames.bind(styles);

function FilterTabs({ tabs, activeTab, onTabChange, children }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("tabs-list")}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={cx("tab", { active: activeTab === tab.key })}
            onClick={() => onTabChange(tab.key)}
          >
            {tab.label}
            {tab.count !== undefined && <span className={cx("count")}>{tab.count}</span>}
          </button>
        ))}
      </div>

      <div className={cx("actions")}>
        {children}
      </div>
    </div>
  );
}

export default FilterTabs;