import React from "react";
import classNames from "classnames/bind";
import styles from "./HomePage.module.scss";
import CandidateLayout from "~/layouts/CandidateLayout";
import HeroSection from "./HeroSection";
import FeaturedProjects from "./FeaturedProjects";
import FeaturedCompany from "./FeaturedCompany";

const cx = classNames.bind(styles);
function HomePage() {
  return (
    <div className={cx("homePage")}>
      <CandidateLayout>
        <HeroSection />
        <FeaturedProjects/>
        <FeaturedCompany/>
      </CandidateLayout>
    </div>
  );
}

export default HomePage;
