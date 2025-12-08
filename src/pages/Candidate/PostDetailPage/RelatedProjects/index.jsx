import React from "react";
import classNames from "classnames/bind";
import styles from "./RelatedProjects.module.scss";
import HeaderSection from "../HeaderSection";
import ProjectCard from "./ProjectCard"; 

const cx = classNames.bind(styles);

function RelatedProjects() {
  const projects = [
    {
      id: 1,
      title: "Software Engineer",
      description: "Thiết kế trang web sàn thương mại với các chức năng thanh toán...",
      companyName: "CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ SUNTECH",
      tags: ["Còn 20 ngày ứng tuyển", "Hà Nội"],
      isFavorite: false,
    },
    {
      id: 2,
      title: "React Native Developer",
      description: "Phát triển ứng dụng Mobile App trên nền tảng Android/iOS...",
      companyName: "FPT Software",
      tags: ["Còn 5 ngày", "Hồ Chí Minh"],
      isFavorite: true,
    }
  ];

  return (
    <div className={cx("wrapper")}>
      <HeaderSection title="Các dự án liên quan" />
      
      <div className={cx("list")}>
        {projects.map((item) => (
          <ProjectCard
            key={item.id}
            title={item.title}
            description={item.description}
            companyName={item.companyName}
            tags={item.tags}
            isFavorite={item.isFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default RelatedProjects;