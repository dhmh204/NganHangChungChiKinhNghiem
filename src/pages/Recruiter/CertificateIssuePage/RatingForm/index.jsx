import React from "react";
import classNames from "classnames/bind";
import styles from "./RatingForm.module.scss";
import { FaStar, FaChevronLeft, FaArrowRight } from "react-icons/fa";

const cx = classNames.bind(styles);

const RATING_LABELS = { 1: "Không đạt", 2: "Chưa đạt", 3: "Đạt yêu cầu", 4: "Tốt", 5: "Xuất sắc" };

const StarRatingInput = ({ value, onChange }) => (
    <div className={cx("star-rating")}>
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar 
          key={star} 
          className={cx("star", { active: star <= value })} 
          onClick={() => onChange(star)} 
        />
      ))}
      <span className={cx("rating-text")}>{value > 0 ? RATING_LABELS[value] : ""}</span>
    </div>
);

function RatingForm({ ratings, onRate, onBack, onNext }) {
  const criteriaList = [
    { key: 'quality', label: 'Chất lượng sản phẩm' },
    { key: 'deadline', label: 'Tuân thủ deadline' },
    { key: 'communication', label: 'Thái độ - giao tiếp' },
    { key: 'attitude', label: 'Thái độ - làm việc' }
  ];

  return (
    <div className={cx("wrapper")}>
        <div className={cx("form-container")}>
            {criteriaList.map((item) => (
                <div key={item.key} className={cx("rating-row")}>
                    <label>{item.label}</label>
                    <StarRatingInput 
                        value={ratings[item.key]} 
                        onChange={(v) => onRate(item.key, v)} 
                    />
                </div>
            ))}
        </div>
        <div className={cx("actions-split")}>
            <button className={cx("btn-back")} onClick={onBack}><FaChevronLeft /> Back</button>
            <button className={cx("btn-next")} onClick={onNext}>Next <FaArrowRight /></button>
        </div>
    </div>
  );
}

export default RatingForm;