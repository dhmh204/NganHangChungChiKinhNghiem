import React from "react";
import DOMPurify from "dompurify"; 
import classNames from "classnames/bind";
import styles from "./ProjectDescription.module.scss";
import HeaderSection from "../HeaderSection";

const cx = classNames.bind(styles);

function ProjectDescription({ description }) {
  const cleanHTML = DOMPurify.sanitize(description || "");

  return (
    <div className={cx("wrapper")}>
      <HeaderSection title="Chi tiết dự án" type="details" />
      
      <div 
        className={cx("content")}
        dangerouslySetInnerHTML={{ __html: cleanHTML }} 
      />
    </div>
  );
}

export default ProjectDescription;