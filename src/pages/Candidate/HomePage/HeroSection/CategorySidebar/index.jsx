import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./CategorySidebar.module.scss";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import BannerImg from "~/assets/images/bannerHomePage.png"; 
import IconClipboardList from "~/assets/icons/IconClipboardList"; 

import PaginationControl from "~/components/PaginationControl"; 

import { usePagination } from "~/hook/usePagination"; 

const cx = classNames.bind(styles);

const ALL_CATEGORIES = [
  { id: 1, name: "Kỹ thuật phần mềm", subItems: ["Software Engineer", "BackEnd", "FrontEnd", "FullStack"] },
  { id: 2, name: "Kiểm thử phần mềm", subItems: ["Tester", "QC", "QA", "Automation Test"] },
  { id: 3, name: "Trí tuệ nhân tạo (AI)", subItems: ["AI Engineer", "NLP", "Computer Vision"] },
  { id: 4, name: "Khoa học dữ liệu", subItems: ["Data Analyst", "Data Scientist", "Data Engineer"] },
  { id: 5, name: "Hạ tầng & Vận hành", subItems: ["DevOps", "SysAdmin", "Cloud Architect"] },
  { id: 6, name: "An toàn thông tin", subItems: ["Security Analyst", "Penetration Tester"] },
  { id: 7, name: "Thiết kế (UI/UX)", subItems: ["UI Designer", "UX Researcher", "Graphic Designer"] },
  { id: 8, name: "Quản lý sản phẩm", subItems: ["Product Manager", "Product Owner", "Business Analyst"] },
  { id: 9, name: "Marketing Online", subItems: ["Digital Marketer", "SEO Specialist", "Content Creator"] },
  { id: 10, name: "Bán hàng (Sales)", subItems: ["Sales Executive", "Account Manager"] },
  { id: 11, name: "Hành chính nhân sự", subItems: ["HR Recruiter", "C&B", "Admin"] },
  { id: 12, name: "Tài chính kế toán", subItems: ["Accountant", "Auditor"] },
  { id: 13, name: "Biên phiên dịch", subItems: ["Japanese Translator", "English Translator"] },
  { id: 14, name: "Giáo dục đào tạo", subItems: ["Teacher", "Trainer"] },
  { id: 15, name: "Khác", subItems: ["Freelancer", "Part-time"] },
];

const ITEMS_PER_PAGE = 5;
const today = new Date().toLocaleDateString('vi-VN');

function CategorySidebar() {
  const [activeCategory, setActiveCategory] = useState(null);

  const { currentData, pagination } = usePagination(ALL_CATEGORIES, ITEMS_PER_PAGE);
  
  const { currentPage, totalPages, onNext, onPrev } = pagination;

  const handleCategoryClick = (id) => {
    setActiveCategory(activeCategory === id ? null : id);
  };

  const handlePageChange = (callback) => {
    callback();
    setActiveCategory(null); 
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("sidebar")}>
        <ul className={cx("menu-list")}>
          
          {currentData.map((item) => (
            <li key={item.id} className={cx("menu-item")}>
              <div
                className={cx("item-link", {
                  active: activeCategory === item.id,
                })}
                onClick={() => handleCategoryClick(item.id)}
              >
                <span className={cx("item-text")}>{item.name}</span>
                <MdArrowForwardIos size={16} className={cx("arrow-icon")} />
              </div>

              {activeCategory === item.id && (
                <div className={cx("sub-menu")}>
                  <h4 className={cx("sub-title")}>{item.name}</h4>
                  <div className={cx("tag-container")}>
                    {item.subItems.map((sub, index) => (
                      <span key={index} className={cx("tag")}>
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
          <PaginationControl 
            variant="table"
          {...pagination}/>
       
      </div>

      <div className={cx("banner-section")}>
        <div className={cx("banner-wrapper")}>
           <img src={BannerImg} alt="Banner" className={cx("banner-img")} />
        </div>
        
        <div className={cx("stats-bar")}>
          <div className={cx("header")}>
            <div className={cx("icon-wrapper")}>
              <IconClipboardList size={24} color="#fff" />
            </div>
            <h3 className={cx("title")}>
              Tổng quan các dự án hôm nay {today}
            </h3>
          </div>

          <div className={cx("stats-content")}>
            <div className={cx("stat-item")}>
              <span className={cx("label")}>Dự án đang mở:</span>
              <span className={cx("value")}>56.560</span>
            </div>

            <div className={cx("divider")}></div>

            <div className={cx("stat-item")}>
              <span className={cx("label")}>Dự án mới hôm nay:</span>
              <span className={cx("value")}>4.462</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategorySidebar;