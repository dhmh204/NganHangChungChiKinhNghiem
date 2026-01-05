import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import RecruiterLayout from "~/layouts/RecruiterLayout";
import AdminLayout from "~/layouts/AdminLayout";
import CandidateLayout from "~/layouts/CandidateLayout"; 

// --- PAGES: RECRUITER & ADMIN (Giữ nguyên) ---
import ProjectManagementPage from "~/pages/Recruiter/ProjectManagementPage";
import PostManagementPage from "~/pages/Recruiter/PostManagementPage";
import CVManagementPage from "~/pages/Recruiter/CVManagementPage";
import CertificatePage from "~/pages/Recruiter/CertificatePage";
import CertificateIssuePage from "~/pages/Recruiter/CertificateIssuePage";
import ProfilePageRecruiter from "~/pages/Recruiter/ProfilePage";
import ChangePasswordPage from "~/pages/Recruiter/ChangePasswordPage";
import DashboardPage from "~/pages/Admin/DashboardPage";

// --- PAGES: CANDIDATE (Import mới) ---
import HomePage from "~/pages/Candidate/HomePage";
import CertificatePageCandidate from "~/pages/Candidate/CertificatePage";
import ChatPage from "~/pages/Candidate/ChatPage";
import MyJobsPage from "~/pages/Candidate/MyJobsPage";
import PostDetailPage from "~/pages/Candidate/PostDetailPage";
import ProfilePageCandidate from "~/pages/Candidate/ProfilePage";
import SavedProjectsPage from "~/pages/Candidate/SavedProjectsPage";
import CompanyDetailPage from "~/pages/Candidate/CompanyDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* =========================================================
            1. KHU VỰC ỨNG VIÊN (CANDIDATE) - MẶC ĐỊNH
           ========================================================= */}
        <Route path="/" element={<CandidateLayout />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="certificates" element={<CertificatePageCandidate />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="my-jobs" element={<MyJobsPage />} />
          <Route path="posts/:id" element={<PostDetailPage />} /> 
          <Route path="company/:id" element={<CompanyDetailPage />} /> 
          <Route path="profile" element={<ProfilePageCandidate />} />
          <Route path="saved-projects" element={<SavedProjectsPage />} />
        </Route>


        {/* =========================================================
            2. KHU VỰC NHÀ TUYỂN DỤNG (RECRUITER)
           ========================================================= */}
        <Route path="/recruiter" element={<RecruiterLayout />}>
          <Route index element={<Navigate to="projects" replace />} />
          <Route path="projects" element={<ProjectManagementPage />} />
          <Route path="posts" element={<PostManagementPage />} />
          <Route path="cv" element={<CVManagementPage />} />
          <Route path="certificates" element={<CertificatePage />} />
          <Route path="certificates/issue" element={<CertificateIssuePage />} />
          <Route path="profile" element={<ProfilePageRecruiter />} />
          <Route path="change-password" element={<ChangePasswordPage />} />
        </Route>


        {/* =========================================================
            3. KHU VỰC ADMIN
           ========================================================= */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;