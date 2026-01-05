import React from "react";
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import LogoWhite from "~/assets/images/LogoWhite"
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const cx = classNames.bind(styles);

function Sidebar({menuItems}) {
 

  return (
    <aside className={cx("sidebar")}>
      <div className={cx("logo-area")}>
         <div className={cx("logo-symbol")}><LogoWhite/></div>
      </div>

      <nav className={cx("menu-list")}>
        {menuItems.map((item, index) => (
            <NavLink 
                key={index}
                to={item.path}
                className={cx("menu-item-wrapper")} 
            >
                {({ isActive }) => (
                    <>
                        {isActive && (
                            <motion.div
                                layoutId="active-bg" 
                                className={cx("active-background")}
                                transition={{ 
                                    type: "spring", 
                                    stiffness: 300, 
                                    damping: 30 
                                }}
                            />
                        )}

                        <div className={cx("item-content", { active: isActive })}>
                            <span className={cx("icon")}>{item.icon}</span>
                            <span className={cx("label")}>{item.label}</span>
                        </div>
                    </>
                )}
            </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;