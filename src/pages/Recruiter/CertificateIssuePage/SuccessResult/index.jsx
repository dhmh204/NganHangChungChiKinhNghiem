import React from "react";
import classNames from "classnames/bind";
import styles from "./SuccessResult.module.scss";
import { FaStar } from "react-icons/fa";

const cx = classNames.bind(styles);

const StarRatingDisplay = ({ value }) => (
    <div className={cx("stars-display-wrapper")}>
      {[1, 2, 3, 4, 5].map((index) => {
        let fill = Math.max(0, Math.min(1, value - (index - 1))) * 100;
        return (
          <div key={index} className={cx("star-wrapper")}>
            <FaStar className={cx("star-bg")} />
            <div className={cx("star-fill")} style={{ width: `${fill}%` }}>
              <FaStar className={cx("star-fg")} />
            </div>
          </div>
        );
      })}
    </div>
);

function SuccessResult({ candidate, result, onFinish }) {
  return (
    <div className={cx("wrapper")}>
        <div className={cx("success-box")}>
            <div className={cx("avatar-circle")}>
                <img src={candidate.avatar} alt="avatar" />
            </div>
            <h3>{candidate.name}</h3>
            
            <div className={cx("badge")}>
                {result.label} ({result.score.toFixed(1)})
            </div>
            
            <div className={cx("stars-container")}>
                <StarRatingDisplay value={result.score} />
            </div>
        </div>
        <div className={cx("actions-center")}>
            <button className={cx("btn-finish")} onClick={onFinish}>Hoàn tất</button>
        </div>
    </div>
  );
}

export default SuccessResult;