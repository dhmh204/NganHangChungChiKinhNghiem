import React from "react";
import classNames from "classnames/bind";
import styles from "./SavedList.module.scss";
import { motion, AnimatePresence } from "framer-motion";

import ProjectCard from "~/pages/Candidate/PostDetailPage/RelatedProjects/ProjectCard";

const cx = classNames.bind(styles);

function SavedList({ list, activeTab }) {
  return (
    <div className={cx("list-content")}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={cx("list-inner")}
        >
          {list.length > 0 ? (
            list.map((item) => (
              <ProjectCard
                key={item.id}
                title={item.title}
                description={item.description}
                companyName={item.companyName}
                tags={item.tags}
                logo={item.logo}
                
                isFavorite={true}     
                showApplyBtn={false}  
              />
            ))
          ) : (
            <div className={cx("empty-state")}>
              Chưa có dữ liệu trong mục này.
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default SavedList;