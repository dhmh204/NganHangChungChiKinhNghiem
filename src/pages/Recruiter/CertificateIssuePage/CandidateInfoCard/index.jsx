import React from "react";
import classNames from "classnames/bind";
import styles from "./CandidateInfoCard.module.scss";
import { FaStar } from "react-icons/fa";

const cx = classNames.bind(styles);

function CandidateInfoCard({ candidate }) {
  return (
    <>
        <div className={cx("info-card")}>
            <div className={cx("card-avatar")}>
                <img src={candidate.avatar} alt="avatar" />
            </div>
            <h4>{candidate.name}</h4>
            <div className={cx("stats")}>
                <span className={cx("highlight")}><FaStar /> 5</span>
                <span>|</span>
                <span>Đã tham gia {candidate.projectCount} dự án</span>
            </div>
        </div>
        <div className={cx("banner")}>BANNER</div>
    </>
  );
}

export default CandidateInfoCard;