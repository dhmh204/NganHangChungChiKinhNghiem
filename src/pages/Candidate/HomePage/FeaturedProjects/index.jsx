import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom"; 

import styles from "./FeaturedProjects.module.scss";
import SectionHeading from "../SectionHeading";
import ProjectCard from "./ProjectCard";
import PaginationControl from "~/components/PaginationControl"; 

import { usePagination } from "~/hook/usePagination"; 
import * as jobPostService from "~/services/jobPostService"; 

const cx = classNames.bind(styles);
const ITEMS_PER_PAGE = 20; 

function FeaturedProjects() {
  const [jobPosts, setJobPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const navigate = useNavigate(); 

  const handleCardClick = (id) => {
    navigate(`/posts/${id}`); 
  };

  useEffect(() => {
    const fetchJobPosts = async () => {
      setIsLoading(true);
      const result = await jobPostService.getJobPosts();
      if (Array.isArray(result)) {
        setJobPosts(result);
      } else if (result && result.data) {
        setJobPosts(result.data);
      } else {
        setJobPosts([]);
      }
      setIsLoading(false);
    };
    fetchJobPosts();
  }, []);

  const { currentData, pagination } = usePagination(jobPosts, ITEMS_PER_PAGE);

  return (
    <div className={cx("wrapper")}>
      <SectionHeading text="Dự án nổi bật" />

      {isLoading ? (
        <div style={{ textAlign: "center", padding: "2rem", fontSize: "1.6rem" }}>Đang tải...</div>
      ) : (
        <div className={cx("content")}>
          {currentData.length > 0 ? (
            currentData.map((item) => (
              <ProjectCard
                key={item.jobId}
                
                onClick={() => handleCardClick(item.jobId)}

                title={item.jobTitle} 
                company={item.legalName} 
                location={item.provinceAddress} 
                srcImg={item.logoUrl} 
                desc={item.jobDescription}
                date="" 
              />
            ))
          ) : (
             <div style={{ fontSize: "1.6rem" }}>Không có bài đăng nào.</div>
          )}
        </div>
      )}

      {!isLoading && jobPosts.length > 0 && (
        <PaginationControl variant="center" {...pagination} />
      )}
    </div>
  );
}

export default FeaturedProjects;