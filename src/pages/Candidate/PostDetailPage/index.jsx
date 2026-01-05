import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import classNames from "classnames/bind";
import styles from "./PostDetailPage.module.scss";
import ProjectHeader from "./ProjectHeader";
import ProjectDescription from "./ProjectDescription";
import RelatedProjects from "./RelatedProjects";
import CompanyInfoCard from "./CompanyInfoCard";
import SafetyDisclaimer from "./SafetyDisclaimer";

import * as jobPostService from "~/services/jobPostService"; 

const cx = classNames.bind(styles);

function PostDetailPage() {
  const { id } = useParams(); 
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      setIsLoading(true);
      const data = await jobPostService.getJobPostDetail(id);
      
      console.log("Chi tiết bài đăng:", data); 

      if (data) {
        setPost(data);
      }
      setIsLoading(false);
    };

    fetchDetail();
  }, [id]); 

  if (isLoading) {
      return <div className={cx("loading")}>Đang tải thông tin dự án...</div>;
  }

  if (!post) {
      return <div className={cx("error")}>Không tìm thấy bài đăng hoặc có lỗi xảy ra.</div>;
  }

  return (
    <div className={cx("post-detail-page")}>
        <div className={cx("container")}>
          <div className={cx("col", "left")}>
            <ProjectHeader
              title={post.jobTitle || post.title} 
              
              deadline={post.deadline || "30/12/2025"} 
              
              slots={post.quantity || post.slots || 10} 
            />
            
            <ProjectDescription
              title="Chi tiết dự án"
              description={post.jobDescription || "Đang cập nhật mô tả..."}
            />
            
            <RelatedProjects 
                companyId={post.companyId} 
                posId={post.posId} // 
                currentJobId={post.jobId}  
            />
          </div>

          <div className={cx("col", "right")}>
            <div className={cx("box")}>
              <CompanyInfoCard
                name={post.legalName || post.companyName || "Công ty ẩn danh"}
                website={post.websiteUrl || "Đang cập nhật"}
                size={post.companySize || "N/A"}
                address={post.provinceAddress || post.address || "Việt Nam"}
                
                logoUrl={post.logoUrl} 
              />
              <SafetyDisclaimer/>
            </div>
          </div>
        </div>
    </div>
  );
}

export default PostDetailPage;