import React, { Children } from "react";
import classNames from "classnames/bind";

import styles from "./CandidateLayout.module.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "~/components/ScrollToTop";
import { Outlet } from "react-router-dom";


const cx = classNames.bind(styles);
function CandidateLayout({ className}) {
  return (
   <div className={cx("wrapper", className)}>
      <Header/>
     <div className={cx("content")}>
          <Outlet />
      </div>
      <ScrollToTop/>
      <Footer/>

   </div>
  )
}

export default CandidateLayout