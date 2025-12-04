import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./auth/authProvider";

import Login from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard";
import ChildrenList from "./pages/ChildrenList";
import ChildDetails from "./pages/ChildDetails";
import InsightsPage from "./pages/InsightsPage";
import AlertsPage from "./pages/AlertsPage";
import ProfileSettings from "./pages/ProfileSettings";
import ProtectedRoute from "./pages/auth/ProtectedRoute";
import MainLayout from "./components/MainLayout";
import "./App.css";
import ChatHistory from "./pages/ChatHistory";
import UpgradeToPro from "./pages/UpgradeToPro";
import ChildDetailsSchool from "./pages/ChildDetailsSchool";

export default function App() {
  return (
    // <AuthProvider>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}

        <Route
          path="/"
          element={
            <MainLayout />
            // <ProtectedRoute>
            // </ProtectedRoute>
          }
        >
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="children" element={<ChildrenList />} />
          <Route path="children/:id" element={<ChildDetails />} />
          <Route path="/child/:id" element={<ChildDetailsSchool />} />
          <Route path="insights" element={<InsightsPage />} />
          <Route path="chat-history" element={<ChatHistory />} />
          <Route path="alerts" element={<AlertsPage />} />
          <Route path="settings" element={<ProfileSettings />} />
          <Route path="/upgrade" element={<UpgradeToPro />} />
        </Route>

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
    // </AuthProvider>
  );
}
