import React from "react";
import classNames from "classnames/bind";
import styles from "./SavedTabs.module.scss";
import { motion } from "framer-motion";

const cx = classNames.bind(styles);

function SavedTabs({ tabs, activeTab, onChange }) {
  return (
    <div className={cx("tabs-wrapper")}>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={cx("tab-item", { active: activeTab === tab.id })}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
          
          {activeTab === tab.id && (
            <motion.div
              layoutId="underline-saved"
              className={cx("active-line")}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default SavedTabs;