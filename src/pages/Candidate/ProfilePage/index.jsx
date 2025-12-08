import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./ProfilePage.module.scss";

import CandidateLayout from "~/layouts/CandidateLayout";
import ProfileSidebar from "./ProfileSidebar";
import ProfileForm from "./ProfileForm";
import ChangePasswordForm from "./ChangePasswordForm"; 

const cx = classNames.bind(styles);

function ProfilePage() {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <CandidateLayout>
      <div className={cx("container")}>
      
      <div className={cx("main-column")}>
        {activeTab === "info" && <ProfileForm />}
        {activeTab === "password" && <ChangePasswordForm />} 
      </div>
      <div className={cx("sidebar-column")}>
        <ProfileSidebar 
            activeTab={activeTab} 
            onChangeTab={setActiveTab} 
        />
      </div>

    </div>
    </CandidateLayout>
  );
}

export default ProfilePage;