import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { FaHeart, FaRegHeart, FaClock, FaUserFriends, FaPaperPlane, FaCommentDots } from "react-icons/fa";

import styles from "./CompanyJobs.module.scss";

import ProjectCard from "~/pages/Candidate/PostDetailPage/RelatedProjects/ProjectCard"; 

import * as jobPostService from "~/services/jobPostService";

const cx = classNames.bind(styles);

function CompanyJobs({ companyId }) {
  const [jobsList, setJobsList] = useState([]);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [jobDetail, setJobDetail] = useState(null);
  
  const [loadingList, setLoadingList] = useState(true);
  const [loadingDetail, setLoadingDetail] = useState(false);

  useEffect(() => {
    const fetchList = async () => {
      setLoadingList(true);
      const res = await jobPostService.getJobPostsByCompany(companyId);
      
      let data = [];
      if (Array.isArray(res)) data = res;
      else if (res && res.data) data = res.data;

      setJobsList(data);

      if (data.length > 0) {
        setSelectedJobId(data[0].jobId);
      }
      setLoadingList(false);
    };

    if (companyId) fetchList();
  }, [companyId]);

  useEffect(() => {
    const fetchDetail = async () => {
      if (!selectedJobId) return;

      setLoadingDetail(true);
      const res = await jobPostService.getJobPostDetail(selectedJobId);
      setJobDetail(res);
      setLoadingDetail(false);
    };

    fetchDetail();
  }, [selectedJobId]);

  const formatDate = (dateString) => {
    if (!dateString) return "Chưa cập nhật";
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  if (loadingList) return <div className={cx("loading-state")}>Đang tải danh sách...</div>;
  if (jobsList.length === 0) return <div className={cx("empty-state")}>Công ty chưa có bài đăng nào.</div>;

  return (
    <div className={cx("wrapper")}>
      
      <div className={cx("list-side")}>
        {jobsList.map((item) => (
          <div 
            key={item.jobId} 
            className={cx("card-container", { active: selectedJobId === item.jobId })}
            onClick={() => setSelectedJobId(item.jobId)}
          >
            <ProjectCard
              logo={item.logoUrl || item.thumbnailUrl}
              
              title={item.jobTitle}
              companyName={item.legalName || "Công ty ẩn danh"}
              tags={[
                  item.provinceAddress || "Toàn quốc",
                  "Full-time"
              ]}
              description={item.jobDescription}
              showApplyBtn={false} 
              isFavorite={false}
            />
          </div>
        ))}
      </div>

      <div className={cx("detail-side")}>
        {loadingDetail ? (
           <div className={cx("loading-state")}>Đang tải chi tiết...</div>
        ) : jobDetail ? (
           <>
             <div className={cx("detail-header")}>
                <div className={cx("job-title-row")}>
                    <h2>{jobDetail.jobTitle}</h2>
                    <div className={cx("icon-heart")}>
                        <FaRegHeart />
                    </div>
                </div>

                <div className={cx("job-meta")}>
                    <div className={cx("meta-item")}>
                        <span className={cx("label")}><FaClock /> Hạn nộp hồ sơ</span>
                        <span className={cx("value")}>{formatDate(jobDetail.applicationDeadline)}</span>
                    </div>
                    <div className={cx("meta-item")}>
                        <span className={cx("label")}><FaUserFriends /> Số lượng tuyển</span>
                        <span className={cx("value")}>{jobDetail.jobQuantity} người</span>
                    </div>
                </div>

                <div className={cx("actions")}>
                    <button className={cx("btn", "primary")}>
                        <FaPaperPlane /> Ứng tuyển ngay
                    </button>
                    <button className={cx("btn", "outline")}>
                        <FaCommentDots /> Nhắn tin
                    </button>
                </div>
             </div>

             <div className={cx("detail-body")}>
                <h3>Chi tiết công việc</h3>
                <div className={cx("description-text")}>
                    {jobDetail.jobDescription}
                </div>
                
                <h3>Thông tin bổ sung</h3>
                <div className={cx("description-text")}>
                    <p>• <strong>Vị trí:</strong> {jobDetail.positionName}</p>
                    <p>• <strong>Dự án:</strong> {jobDetail.projectTitle}</p>
                    <p>• <strong>Ngành nghề:</strong> {jobDetail.industry}</p>
                    <p>• <strong>Quy mô công ty:</strong> {jobDetail.companySize} nhân viên</p>
                </div>
             </div>
           </>
        ) : (
           <div className={cx("empty-state")}>Chọn một công việc để xem chi tiết</div>
        )}
      </div>

    </div>
  );
}

export default CompanyJobs;