import React from "react";
import classNames from "classnames/bind";
import styles from "./JobList.module.scss";
import { motion, AnimatePresence } from "framer-motion";

import ProjectCard from "~/pages/Candidate/PostDetailPage/RelatedProjects/ProjectCard";

const cx = classNames.bind(styles);

function JobList({ jobs, activeTab }) {
  return (
    <div className={cx("job-list")}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab} 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div key={job.id} style={{ marginBottom: 16 }}>
                <ProjectCard
                  title={job.title}
                  description={job.description}
                  companyName={job.companyName}
                  tags={job.tags}
                  showApplyBtn={false}
                  isFavorite={true}
                />
              </div>
            ))
          ) : (
            <div className={cx("empty-state")}>
              <p>Chưa có công việc nào trong mục này.</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default JobList;