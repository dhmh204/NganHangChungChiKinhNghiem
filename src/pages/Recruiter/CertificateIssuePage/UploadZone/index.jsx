import React, { useRef } from "react";
import classNames from "classnames/bind";
import styles from "./UploadZone.module.scss";
import { FaCloudUploadAlt, FaArrowRight } from "react-icons/fa";

const cx = classNames.bind(styles);

function UploadZone({ file, onFileSelect, onNext }) {
  const fileInputRef = useRef(null);
  const handleTrigger = () => fileInputRef.current.click();

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) onFileSelect(selected);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("upload-zone")}>
        <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            style={{ display: "none" }} 
        />
        
        {file ? (
            <div className={cx("file-preview")}>
                <FaCloudUploadAlt className={cx("icon-cloud")} />
                <p className={cx("filename")}>{file.name}</p>
                <button className={cx("btn-reupload")} onClick={handleTrigger}>Chọn file khác</button>
            </div>
        ) : (
            <>
                <FaCloudUploadAlt className={cx("icon-cloud")} />
                <h3>Tải lên CV từ máy tính, chọn hoặc kéo thả</h3>
                <p>Hỗ trợ định dạng .png, .jpg, .pdf dưới 5MB</p>
                <button className={cx("btn-primary")} onClick={handleTrigger}>Tải lên</button>
            </>
        )}
      </div>
      
      <div className={cx("actions-right")}>
          <button className={cx("btn-next")} onClick={onNext} disabled={!file}>
            Next <FaArrowRight />
          </button>
      </div>
    </div>
  );
}

export default UploadZone;