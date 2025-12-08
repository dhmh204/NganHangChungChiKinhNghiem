import React, { Children } from "react";
import classNames from "classnames/bind";

import styles from "./CandidateLayout.module.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "~/components/ScrollToTop";


const cx = classNames.bind(styles);
function CandidateLayout({children, className}) {
  return (
   <div className={cx("wrapper", className)}>
      <Header/>
      {children}
      <ScrollToTop/>
      <Footer/>

   </div>
  )
}

export default CandidateLayout