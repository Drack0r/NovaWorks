import { Routes, Route } from "react-router-dom";

import { Layout } from "./components/layout";
import { HistoryPage, HomePage, LoginPage, NotFoundPage } from "./pages";

function Router() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default Router;
