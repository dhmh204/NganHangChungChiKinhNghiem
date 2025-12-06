import React from "react";
import classNames from "classnames/bind";

import styles from "./FeaturedProjects.module.scss";
import SectionHeading from "../SectionHeading";
import ProjectCard from "./ProjectCard";
import PaginationControl from "~/components/PaginationControl"; 

import { usePagination } from "~/hook/usePagination"; 

const cx = classNames.bind(styles);

const ITEMS_PER_PAGE = 21;

const MOCK_DATA = Array.from({ length: 100 }, (_, i) => ({
  id: i,
  title: `Quản lý chi tiêu ${i + 1}`,
  company: "CÔNG TY TNHH ABC...",
  image: null,
  location: "Hà Nội",
}));

function FeaturedProjects() {
  const { currentData, pagination } = usePagination(MOCK_DATA, ITEMS_PER_PAGE);

  return (
    <div className={cx("wrapper")}>
      <SectionHeading text="Dự án nổi bật" />

      <div className={cx("content")}>
        {currentData.map((item) => (
          <ProjectCard
            key={item.id}
            srcImg={item.image}
            title={item.title}
            company={item.company}
            location={item.location}
          />
        ))}
      </div>

      <PaginationControl 
      variant="center"
      {...pagination} />
    </div>
  );
}

export default FeaturedProjects;