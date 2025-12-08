import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import GlobalStyles from "./components/GlobalStyles/GlobalStyles.js";

import "@fontsource/inter";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import AuthPage from "./pages/Authentication/index.jsx";
import HomePage from "./pages/Candidate/HomePage/index.jsx";
import PostDetailPage from "./pages/Candidate/PostDetailPage/index.jsx";
import ChatPage from "./pages/Candidate/ChatPage/index.jsx";
import MyJobsPage from "./pages/Candidate/MyJobsPage/index.jsx";
import ProfilePage from "./pages/Candidate/ProfilePage/index.jsx";
import SavedProjectsPage from "~/pages/Candidate/SavedProjectsPage/index.jsx";
import CertificatePage from "./pages/Candidate/CertificatePage/index.jsx";

// gõ rfce để viết nhanh component
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles>
      {/* <PostDetailPage /> */}
      {/* <HomePage/> */}
      {/* <ChatPage/> */}
      {/* <MyJobsPage/> */}
      {/* <ProfilePage/> */}
{/* <SavedProjectsPage/> */}
<CertificatePage/>
    </GlobalStyles>
  </StrictMode>
);
