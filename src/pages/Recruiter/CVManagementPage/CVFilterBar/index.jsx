import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./CVFilterBar.module.scss";
import { FaSearch, FaChevronDown } from "react-icons/fa";

const cx = classNames.bind(styles);

function CVFilterBar({ projects, onSearch, onFilterProject, onFilterStatus }) {
  const [showProjectDrop, setShowProjectDrop] = useState(false);
  const [showStatusDrop, setShowStatusDrop] = useState(false);
  
  const [selectedProject, setSelectedProject] = useState("Chọn dự án");
  const [selectedStatus, setSelectedStatus] = useState("Chọn trạng thái");
  const [projectSearch, setProjectSearch] = useState("");

  const projectRef = useRef(null);
  const statusRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (projectRef.current && !projectRef.current.contains(event.target)) setShowProjectDrop(false);
      if (statusRef.current && !statusRef.current.contains(event.target)) setShowStatusDrop(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredProjects = projects.filter(p => p.name.toLowerCase().includes(projectSearch.toLowerCase()));

  const statusOptions = ["Tất cả", "Chưa xem", "Đã xem", "Chờ duyệt hồ sơ", "Đã duyệt", "Chờ duyệt"];

  return (
    <div className={cx("wrapper")}>
      
      <div className={cx("search-section")}>
        <FaSearch className={cx("search-icon")} />
        <input 
            type="text" 
            placeholder="Tìm kiếm..." 
            onChange={(e) => onSearch(e.target.value)}
        />
      </div>


      <div className={cx("dropdown-section")} ref={projectRef}>
        <div className={cx("dropdown-trigger")} onClick={() => setShowProjectDrop(!showProjectDrop)}>
            <span className={cx("label")}>{selectedProject}</span>
            <FaChevronDown className={cx("arrow")} />
        </div>

        {showProjectDrop && (
            <div className={cx("dropdown-menu", "project-menu")}>
                <div className={cx("menu-search")}>
                    <input 
                        type="text" 
                        placeholder="Tìm kiếm dự án" 
                        value={projectSearch}
                        onChange={(e) => setProjectSearch(e.target.value)}
                        autoFocus
                    />
                </div>
                <div className={cx("menu-list")}>
                    <div className={cx("menu-item")} onClick={() => { setSelectedProject("Tất cả dự án"); onFilterProject("all"); setShowProjectDrop(false); }}>
                        Tất cả dự án
                    </div>
                    {filteredProjects.map(p => (
                        <div key={p.id} className={cx("menu-item")} onClick={() => { setSelectedProject(p.name); onFilterProject(p.id); setShowProjectDrop(false); }}>
                            {p.code} - {p.name}
                        </div>
                    ))}
                </div>
            </div>
        )}
      </div>


      <div className={cx("dropdown-section")} ref={statusRef}>
        <div className={cx("dropdown-trigger")} onClick={() => setShowStatusDrop(!showStatusDrop)}>
            <span className={cx("label")}>{selectedStatus}</span>
            <FaChevronDown className={cx("arrow")} />
        </div>

        {showStatusDrop && (
            <div className={cx("dropdown-menu")}>
                {statusOptions.map((st, index) => (
                    <div key={index} className={cx("menu-item")} onClick={() => { setSelectedStatus(st); onFilterStatus(st); setShowStatusDrop(false); }}>
                        {st}
                    </div>
                ))}
            </div>
        )}
      </div>

    </div>
  );
}

export default CVFilterBar;