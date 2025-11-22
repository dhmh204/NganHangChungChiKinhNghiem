import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Login from "./pages/Login/index.jsx";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles.js";

import '@fontsource/inter'; 
import '@fontsource/inter/300.css'; 
import '@fontsource/inter/400.css'; 
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

// gõ rfce để viết nhanh component
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles>
      <Login/>
    </GlobalStyles>
  </StrictMode>
);
