import React from "react";
import classNames from "classnames/bind";
import styles from "./StepList.module.scss";
import { FaCheck } from "react-icons/fa";

const cx = classNames.bind(styles);

function StepList({ currentStep }) {
  const steps = [
    { id: 1, label: "Cấp chứng chỉ" },
    { id: 2, label: "Đánh giá" },
    { id: 3, label: "Hoàn tất" }
  ];

  return (
    <div className={cx("step-list")}>
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div className={cx("step-item", { 
              active: currentStep === step.id, 
              completed: currentStep > step.id 
          })}>
            <span className={cx("label")}>{step.label}</span>
            <div className={cx("dot")}>
                {currentStep > step.id ? <FaCheck /> : null}
            </div>
          </div>
          {index < steps.length - 1 && <div className={cx("line")}></div>}
        </React.Fragment>
      ))}
    </div>
  );
}

export default StepList;