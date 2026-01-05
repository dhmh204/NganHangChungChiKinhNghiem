import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./CompanyDetailPage.module.scss";
import CompanyHeader from "./CompanyHeader";
import CompanyInfo from "./CompanyInfo";
import CompanyJobs from "./CompanyJobs"; 

import * as companyService from "~/services/companyService";

const cx = classNames.bind(styles);

function CompanyDetailPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("info");
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      const res = await companyService.getCompanyDetail(id);
      
      if (res) {
          let cleanAddress = res.fullAddress || "Đang cập nhật";
          if (cleanAddress.includes("null, null, ")) {
              cleanAddress = cleanAddress.replace("null, null, ", "");
          }

          setCompany({
              id: res.id,
              name: res.legalName || res.shortName, 
              logoUrl: res.logoUrl,
              bannerUrl: res.bannerUrl,
              website: res.websiteUrl,
              size: res.companySize, 
              address: cleanAddress,
              description: res.description,
              industry: res.industry,
              representative: res.ownerName, 
              
              taxCode: "Đang cập nhật", 
              foundedYear: "Đang cập nhật" 
          });
      }
      setLoading(false);
    };
    fetchDetail();
  }, [id]);

  if (loading) return <div style={{padding:'20px', textAlign:'center'}}>Đang tải dữ liệu...</div>;
  if (!company) return <div style={{padding:'20px', textAlign:'center'}}>Không tìm thấy công ty.</div>;

  return (
    <div className={cx("page-wrapper")}>
      <div className={cx("container")}>
        
        {/* HEADER */}
        <CompanyHeader data={company} />

        <div className={cx("tabs-wrapper")}>
          {/* TABS NAVIGATION */}
          <div className={cx("tabs-header")}>
            <button 
                className={cx("tab-btn", { active: activeTab === "info" })}
                onClick={() => setActiveTab("info")}
            >
              Giới thiệu công ty
            </button>
            <button 
                className={cx("tab-btn", { active: activeTab === "jobs" })}
                onClick={() => setActiveTab("jobs")}
            >
              Dự án đang tuyển
            </button>
          </div>

          {/* TAB CONTENT */}
          <div className={cx("tab-content")}>
            {activeTab === "info" ? (
                <CompanyInfo data={company} />
            ) : (
                <CompanyJobs companyId={id} />
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default CompanyDetailPage;