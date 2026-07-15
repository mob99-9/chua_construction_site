import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/ScrollToTop";

import WebPage from "./pages/WebPage";
import ServicePage from "./pages/ServicePage";
import Project from "./pages/Project";
import ProjectDetails from "./pages/ProjectDetails";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ThreeDRenderPage from "./pages/3dRenderPage";
import BlueprintPage from "./pages/BlueprintPage";
import Inquire from "./pages/Inquire";
import DesignPage from "./pages/DesignPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <WebPage />
            </Layout>
          }
        />

        <Route
          path="/services"
          element={
            <Layout>
              <ServicePage />
            </Layout>
          }
        />

        <Route
          path="/projects"
          element={
            <Layout>
              <Project />
            </Layout>
          }
        />

        <Route
          path="/privacy-policy"
          element={
            <Layout>
              <PrivacyPolicy />
            </Layout>
          }
        />

        <Route
          path="/inquire"
          element={
            <Layout showFooter={false}>
              <Inquire />
            </Layout>
          }
        />

        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route
          path="/3d-render"
          element={
            <Layout>
              <ThreeDRenderPage />
            </Layout>
          }
        />
        <Route
          path="/blueprint"
          element={
            <Layout>
              <BlueprintPage />
            </Layout>
          }
        />
        <Route
          path="/design"
          element={
            <Layout>
              <DesignPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;