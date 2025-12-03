import React, { useState } from "react";
import classNames from "classnames/bind";
import { IoIosArrowDown } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";

import IconSearch from "~/assets/icons/IconSearch";
import IconCheckList from "~/assets/icons/IconCheckList";
import IconBuilding from "~/assets/icons/IconBuilding";
import IconBarChart from "~/assets/icons/IconBarChart";

import styles from "./ProjectMenu.module.scss";

const cx = classNames.bind(styles);

function ProjectMenu() {
  const [openSubMenu, setOpenSubMenu] = useState(false);

  return (
    <div className={cx("dropdown-toggle")}>
      <a
        className={cx("nav-link", { active: openSubMenu })}
        onClick={() => setOpenSubMenu(!openSubMenu)}
      >
        Dự án
        <IoIosArrowDown className={cx("arrow-icon")} />
      </a>

      {openSubMenu && (
        <div className={cx("dropdown-menu")}>
          <div className={cx("dropdown-beak")}></div>

          <div className={cx("dropdown-content")}>
            <div className={cx("menu-group")}>
              <div className={cx("group-title")}>Dự án</div>
              <ul className={cx("menu-list")}>
                <li>
                  <a href="/" className={cx("menu-link")}>
                    <IconSearch className={cx("icon")} />
                    Tìm dự án
                  </a>
                </li>
                <li>
                  <a href="/" className={cx("menu-link")}>
                    <FaBookmark className={cx("icon")} />
                    Dự án đã lưu
                  </a>
                </li>
                <li>
                  <a href="/" className={cx("menu-link")}>
                    <IconCheckList className={cx("icon")} />
                    Dự án đã ứng tuyển
                  </a>
                </li>
              </ul>
            </div>

            <div className={cx("menu-group")}>
              <div className={cx("group-title")}>Công ty</div>
              <ul className={cx("menu-list")}>
                <li>
                  <a href="/" className={cx("menu-link")}>
                    <IconBuilding className={cx("icon")} />
                    Danh sách công ty
                  </a>
                </li>
                <li>
                  <a href="/" className={cx("menu-link")}>
                    <IconBarChart className={cx("icon")} />
                    Top công ty
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectMenu;