import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./ProjectManagementPage.module.scss";

// Import Shared Components
import FilterTabs from "~/pages/Recruiter/components/FilterTabs";
import SearchSortBar from "~/pages/Recruiter/components/SearchSortBar";
import filterStyles from "~/pages/Recruiter/components/FilterTabs/FilterTabs.module.scss";

import ProjectTable from "./ProjectTable";

import { FaPlus, FaPen } from "react-icons/fa";

const cx = classNames.bind(styles);
const cxFilter = classNames.bind(filterStyles); 

function ProjectManagementPage() {
 const [activeFilter, setActiveFilter] = useState("recent");
  
  const initialProjects = [
    { id: 1, code: "#1223", name: "Quản lý chi tiêu", date: "18/12/2025", active: true, type: "recent" },
    { id: 2, code: "#1224", name: "Quản lý học bổng UTE", date: "18/12/2025", active: true, type: "recent" },
    { id: 3, code: "#1225", name: "Ngân hàng chứng chỉ", date: "18/12/2025", active: false, type: "all" },
    { id: 4, code: "#1226", name: "Hệ thống điểm danh", date: "10/12/2025", active: true, type: "recent" },
  ];

  const [projects, setProjects] = useState(initialProjects);
  const [displayedProjects, setDisplayedProjects] = useState([]);

  const filters = [
    { key: "recent", label: "Gần đây", count: projects.filter(p => p.type === 'recent').length },
    { key: "all", label: "Tất cả", count: projects.length },
    { key: "active", label: "Đang hiển thị", count: projects.filter(p => p.active).length },
    { key: "expired", label: "Hết hạn hiển thị", count: projects.filter(p => !p.active).length },
  ];

  useEffect(() => {
    let filtered = projects;

    if (activeFilter === "recent") {
        filtered = projects.filter(p => p.type === "recent");
    } else if (activeFilter === "active") {
        filtered = projects.filter(p => p.active);
    } else if (activeFilter === "expired") {
        filtered = projects.filter(p => !p.active);
    }

    setDisplayedProjects(filtered);
  }, [activeFilter, projects]);

  const handleSearch = (term) => {
      const lowerTerm = term.toLowerCase();
      const searched = projects.filter(p => p.name.toLowerCase().includes(lowerTerm));
      setDisplayedProjects(searched);
  };

  const handleDelete = (id) => {
      if(window.confirm("Bạn có chắc muốn xóa dự án này?")) {
          setProjects(prev => prev.filter(p => p.id !== id));
      }
  };

 const handleSort = (option) => {
      setSelectedSort(option);
      setShowSortOptions(false);
      onSort(option);
  }
  const handleToggleStatus = (id) => {
      setProjects(prev => prev.map(p => p.id === id ? {...p, active: !p.active} : p));
  };

  return (
    <div className={cx("container")}>
      
   <div className={cx("header")}>
       <FilterTabs 
        tabs={filters} 
        activeTab={activeFilter} 
        onTabChange={setActiveFilter}
      >
        <button className={cxFilter("btn", "btn-outline")}>
            <FaPlus /> Tạo dự án mới
        </button>
        
        <button className={cxFilter("btn", "btn-filled")}>
            <FaPen /> Đăng tin
        </button>
      </FilterTabs>
      
      <SearchSortBar 
        placeholder="Tìm kiếm theo tên dự án"
        sortOptions={["Ngày tạo", "Ngày duyệt"]}
        onSearch={handleSearch}
        onSort={handleSort}
      />
   </div>
      
   <ProjectTable 
        projects={displayedProjects} 
        onDelete={handleDelete}
        onToggleStatus={handleToggleStatus}
      />
    </div>
  );
}

export default ProjectManagementPage;