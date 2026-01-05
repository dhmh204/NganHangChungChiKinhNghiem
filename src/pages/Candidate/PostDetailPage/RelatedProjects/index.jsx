import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

import styles from "./RelatedProjects.module.scss";
import ProjectCard from "./ProjectCard"; 
import * as jobPostService from "~/services/jobPostService"; 

const cx = classNames.bind(styles);

function RelatedProjects({ companyId, posId, currentJobId }) {
  const [relatedPosts, setRelatedPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRelated = async () => {
      if (!companyId && !posId) return;

      try {
        const [resCompany, resPosition] = await Promise.all([
          companyId ? jobPostService.getJobPostsByCompany(companyId) : [],
          posId ? jobPostService.getJobPostsByPosition(posId) : []
        ]);

        const normalize = (res) => (Array.isArray(res) ? res : res?.data || []);
        const listByCompany = normalize(resCompany);
        const listByPosition = normalize(resPosition);

        const combinedList = [...listByCompany, ...listByPosition];
        const uniquePostsMap = new Map();

        combinedList.forEach(item => {
          if (item.jobId !== currentJobId) {
             uniquePostsMap.set(item.jobId, item);
          }
        });

        const finalResult = Array.from(uniquePostsMap.values());
        setRelatedPosts(finalResult.slice(0, 6)); 

      } catch (error) {
        console.error("Lỗi tải dự án liên quan:", error);
      }
    };

    fetchRelated();
  }, [companyId, posId, currentJobId]);

  const handleCardClick = (id) => {
    navigate(`/posts/${id}`);
    window.scrollTo(0, 0);
  };

  if (relatedPosts.length === 0) return null;

  return (
    <div className={cx("wrapper")}>
      <h3 className={cx("heading")}>Dự án liên quan</h3>
      
      <div className={cx("list")}>
        {relatedPosts.map((item) => (
          
          <div key={item.jobId} onClick={() => handleCardClick(item.jobId)} style={{ cursor: "pointer" }}>
            
            <ProjectCard
              logo={item.logoUrl || item.thumbnailUrl}

              title={item.jobTitle}

              companyName={item.legalName || item.companyName || "Công ty ẩn danh"}

              description={item.jobDescription}

              tags={[
                  item.provinceAddress || "Toàn quốc",
                  "Full-time" 
              ]}
              
              isFavorite={false}
              showApplyBtn={true}
            />
          </div>

        ))}
      </div>
    </div>
  );
}

export default RelatedProjects;