import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./PostManagementPage.module.scss"; 

import FilterTabs from "~/pages/Recruiter/components/FilterTabs";
import SearchSortBar from "~/pages/Recruiter/components/SearchSortBar";
import filterStyles from "~/pages/Recruiter/components/FilterTabs/FilterTabs.module.scss";

import PostTable from "./PostTable";

import { FaPen } from "react-icons/fa";

const cx = classNames.bind(styles);
const cxFilter = classNames.bind(filterStyles); 

function PostManagementPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const initialPosts = [
    { 
        id: 1, code: "#1223", title: "Quản lý chi tiêu", 
        createdDate: "18/11/2025", deadline: "18/12/2025", 
        cvCount: 10, status: "approved", active: true, type: "recent" 
    },
    { 
        id: 2, code: "#1223", title: "Quản lý chi tiêu", 
        createdDate: "18/11/2025", deadline: "18/12/2025", 
        cvCount: 10, status: "pending", active: true, type: "recent" 
    },
    { 
        id: 3, code: "#1223", title: "Quản lý chi tiêu", 
        createdDate: "18/11/2025", deadline: "18/12/2025", 
        cvCount: 10, status: "rejected", active: true, type: "recent" 
    },
    { 
        id: 4, code: "#1223", title: "Quản lý chi tiêu", 
        createdDate: "18/11/2025", deadline: "18/12/2025", 
        cvCount: 10, status: "approved", active: true, type: "old" 
    },
  ];

  const [posts, setPosts] = useState(initialPosts);
  const [displayedPosts, setDisplayedPosts] = useState([]);

  const filters = [
    { key: "recent", label: "Gần đây", count: posts.filter(p => p.type === 'recent').length },
    { key: "all", label: "Tất cả", count: posts.length },
    { key: "active", label: "Đang hiển thị", count: posts.filter(p => p.active).length },
    { key: "expired", label: "Hết hạn hiển thị", count: posts.filter(p => !p.active).length },
    { key: "pending", label: "Đang xét duyệt", count: posts.filter(p => p.status === 'pending').length },
    { key: "rejected", label: "Bị từ chối", count: posts.filter(p => p.status === 'rejected').length },
  ];

  useEffect(() => {
    let filtered = posts;
    switch (activeFilter) {
        case "recent": filtered = posts.filter(p => p.type === "recent"); break;
        case "active": filtered = posts.filter(p => p.active); break;
        case "expired": filtered = posts.filter(p => !p.active); break;
        case "pending": filtered = posts.filter(p => p.status === "pending"); break;
        case "rejected": filtered = posts.filter(p => p.status === "rejected"); break;
        case "all": default: filtered = posts; break;
    }
    setDisplayedPosts(filtered);
  }, [activeFilter, posts]);

  const handleSearch = (term) => {
      const lowerTerm = term.toLowerCase();
      const searched = posts.filter(p => 
          p.title.toLowerCase().includes(lowerTerm) || 
          p.code.toLowerCase().includes(lowerTerm)
      );
      setDisplayedPosts(searched);
  };

  const handleSort = (option) => {
      console.log("Sort post by:", option);
  };

  const handleDelete = (id) => {
      if(window.confirm("Bạn có chắc muốn xóa bài đăng này?")) {
          setPosts(prev => prev.filter(p => p.id !== id));
      }
  };

  const handleToggleStatus = (id) => {
      setPosts(prev => prev.map(p => p.id === id ? {...p, active: !p.active} : p));
  };

  return (
    <div className={cx("container")}>
      <div className={cx("header")}>
      <FilterTabs 
        tabs={filters} 
        activeTab={activeFilter} 
        onTabChange={setActiveFilter}
      >
        <button className={cxFilter("btn", "btn-filled")}>
            <FaPen /> Đăng tin
        </button>
      </FilterTabs>
      
      <SearchSortBar 
        placeholder="Tìm kiếm theo mã hoặc tiêu đề bài đăng"
        sortOptions={["Mới nhất", "Cũ nhất", "Sắp hết hạn"]}
        onSearch={handleSearch}
        onSort={handleSort}
      />
      </div>
      <PostTable 
        posts={displayedPosts} 
        onDelete={handleDelete}
        onToggleStatus={handleToggleStatus}
      />
    </div>
  );
}

export default PostManagementPage;