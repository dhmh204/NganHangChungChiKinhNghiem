import React, { useState, useMemo } from "react";
import classNames from "classnames/bind";
import styles from "./CertificateIssuePage.module.scss";
import { useNavigate, useLocation } from "react-router-dom";

import StepList from "./StepList";
import UploadZone from "./UploadZone";
import RatingForm from "./RatingForm";
import SuccessResult from "./SuccessResult";
import CandidateInfoCard from "./CandidateInfoCard";

const cx = classNames.bind(styles);

const RATING_LABELS = { 1: "Không đạt", 2: "Chưa đạt", 3: "Đạt yêu cầu", 4: "Tốt", 5: "Xuất sắc" };

function CertificateIssuePage() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const candidate = location.state?.candidate || {
    name: "Đỗ Thị Quỳnh Nhung",
    avatar: "https://i.pravatar.cc/150?img=9",
    projectCount: 20
  };

  const [step, setStep] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);
  const [ratings, setRatings] = useState({ quality: 0, deadline: 0, communication: 0, attitude: 0 });

  const averageResult = useMemo(() => {
    const { quality, deadline, communication, attitude } = ratings;
    const avg = (quality + deadline + communication + attitude) / 4;
    const roundedInt = Math.round(avg); 
    
    if (avg === 0) return { score: 0, label: "Chưa đánh giá" };
    return {
      score: avg,
      label: `Hoàn thành nhiệm vụ ${RATING_LABELS[roundedInt] || ""}`
    };
  }, [ratings]);

  const handleFinish = () => {
    alert(`Đã cấp chứng chỉ thành công! Điểm: ${averageResult.score}`);
    navigate("/recruiter/certificates");
  };

  return (
    <div className={cx("page-container")}>
      <div className={cx("page-content")}>
        
        <div className={cx("sidebar-left")}>
            <StepList currentStep={step} />
        </div>

        <div className={cx("main-section")}>
            {step === 1 && (
                <UploadZone 
                    file={selectedFile} 
                    onFileSelect={setSelectedFile} 
                    onNext={() => setStep(2)} 
                />
            )}

            {step === 2 && (
                <RatingForm 
                    ratings={ratings} 
                    onRate={(key, val) => setRatings(prev => ({...prev, [key]: val}))} 
                    onBack={() => setStep(1)}
                    onNext={() => setStep(3)}
                />
            )}

            {step === 3 && (
                <SuccessResult 
                    candidate={candidate} 
                    result={averageResult} 
                    onFinish={handleFinish} 
                />
            )}
        </div>

        <div className={cx("sidebar-right")}>
            <CandidateInfoCard candidate={candidate} />
        </div>

      </div>
    </div>
  );
}

export default CertificateIssuePage;