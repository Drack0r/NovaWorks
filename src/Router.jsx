import { Routes, Route } from "react-router-dom";

import { HistoryPage, HomePage, LoginPage, NotFoundPage } from "./pages";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Router;
