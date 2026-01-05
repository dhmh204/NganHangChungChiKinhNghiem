import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./CategorySidebar.module.scss";
import { MdArrowForwardIos } from "react-icons/md";
import BannerImg from "~/assets/images/bannerHomePage.png"; 
import IconClipboardList from "~/assets/icons/IconClipboardList"; 

import PaginationControl from "~/components/PaginationControl"; 
import { usePagination } from "~/hook/usePagination"; 

import * as categoryService from "~/services/categoryService";

const cx = classNames.bind(styles);
const ITEMS_PER_PAGE = 5;
const today = new Date().toLocaleDateString('vi-VN');

function CategorySidebar() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      const result = await categoryService.getAllCategories();
      setCategories(result || []);
      setLoading(false);
    };

    fetchApi();
  }, []);

  const { currentData, pagination } = usePagination(categories, ITEMS_PER_PAGE);
  const { currentPage, totalPages, onNext, onPrev } = pagination; 

  const handleCategoryClick = (id) => {
    setActiveCategory(activeCategory === id ? null : id);
  };

  
  
  return (
    <div className={cx("wrapper")}>
      <div className={cx("sidebar")}>
        
        {loading && <div className={cx("loading")}>Đang tải danh mục...</div>}

        {!loading && (
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
                        {item.positions && item.positions.length > 0 ? (
                            item.positions.map((pos) => (
                            <span key={pos.id} className={cx("tag")}>
                                {pos.name}
                            </span>
                            ))
                        ) : (
                            <span className={cx("no-data")}>Chưa có vị trí nào</span>
                        )}
                    </div>
                    </div>
                )}
                </li>
            ))}
            </ul>
        )}
        
        {!loading && categories.length > 0 && (
            <PaginationControl 
                variant="table"
                {...pagination} 
            />
        )}
       
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