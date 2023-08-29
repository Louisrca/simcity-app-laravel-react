import "./App.css";
import { Home } from "./components/pages/Home/Home";
import { Dashboard } from "./components/pages/Dashboard/Dashboard";
import { AuthLayouts } from "./components/layout/authLayout/AuthLayout";
import { PageLayout } from "./components/layout/pageLayout/PageLayout";
import { Profile } from "./components/pages/AnalysisForm/AnalysisForm";
import { AuthProvider } from "./components/context/auth/AuthContext";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const userLocalStorage = localStorage.getItem("userToken");
    const userCookie = Cookies.get("user");
    if (!userLocalStorage && !userCookie) {
      navigate("/");
    } else {
    }
  }, []);
  return (
    // <AuthProvider>
    <div className="max-w-6xl max-h-full">
      <Routes>
        <Route
          path="/"
          element={
            <AuthLayouts>
              <Home />
            </AuthLayouts>
          }
        />{" "}
        <Route
          path="/dashboard"
          element={
            <AuthProvider>
              <PageLayout>
                <Dashboard />
              </PageLayout>
            </AuthProvider>
          }
        />
        <Route
          path="/portails"
          element={
            <AuthProvider>
              <PageLayout>
                <Profile />
              </PageLayout>
            </AuthProvider>
          }
        />
      </Routes>
    </div>
    // </AuthProvider>
  );
}

export default App;
