import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";

import styles from "./FeaturedCompany.module.scss";
import SectionHeading from "../SectionHeading";
import PaginationControl from "~/components/PaginationControl"; 
import CompanyCard from "./CompanyCard";

import { usePagination } from "~/hook/usePagination"; 
import * as companyService from "~/services/companyService";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const ITEMS_PER_PAGE = 21;

function FeaturedCompany() {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate(); 

  const handleCardClick = (id) => {
    navigate(`/company/${id}`); 
  };


  useEffect(() => {
    const fetchCompanies = async () => {
      setIsLoading(true);
      const result = await companyService.getCompanies();
      
      if (Array.isArray(result)) {
        setCompanies(result);
      } else if (result && result.data) {
        setCompanies(result.data);
      } else {
        setCompanies([]);
      }
      setIsLoading(false);
    };

    fetchCompanies();
  }, []);

  const { currentData, pagination } = usePagination(companies, ITEMS_PER_PAGE);

  return (
    <div className={cx("wrapper")}>
      <SectionHeading text="Công ty nổi bật" />

      {isLoading ? (
         <div style={{ textAlign: "center", padding: "20px", fontSize: "1.6rem" }}>Đang tải danh sách công ty...</div>
      ) : (
        <div className={cx("content")}>
          {currentData.length > 0 ? (
            currentData.map((item) => (
              <CompanyCard
                key={item.id} 
                company={item.shortName || item.companyName} 
                location={item.provinceAddress || "Toàn quốc"}
                specialized={item.industry || "Đa ngành"}
                totalPrj={item.totalProjects || 0}
                image={item.logoUrl || null} 
                 onClick={() => handleCardClick(item.id)}

              />
            ))
          ) : (
            <div style={{ fontSize: "1.6rem" }}>Không có công ty nào.</div>
          )}
        </div>
      )}

      {!isLoading && companies.length > 0 && (
        <PaginationControl 
          variant="center"
          {...pagination} 
        />
      )}
    </div>
  );
}

export default FeaturedCompany;