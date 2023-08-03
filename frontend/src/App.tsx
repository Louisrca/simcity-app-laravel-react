import "./App.css";
import { Home } from "./components/pages/Home/Home";
import { Dashboard } from "./components/pages/Dashboard/Dashboard";
import { AuthLayouts } from "./components/auth/authLayouts/AuthLayouts";
import { PageLayout } from "./components/layout/pageLayout/PageLayout";
import { Profile } from "./components/pages/Profile/Profile";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";

function App() {
  // if (localStorage.getItem("token") === null) window.location.href = "/";
  const navigate = useNavigate();
  useEffect(() => {
    // const token = localStorage.getItem("token");
    const userLocalStorage = localStorage.getItem("userToken");
    const userCookie = Cookies.get("user");
    if (!userLocalStorage && !userCookie) {
      navigate("/");
    }
  }, []);
  return (
    <div className="max-w-6xl mx-auto">
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
            <PageLayout>
              <Dashboard />
            </PageLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <PageLayout>
              <Profile />
            </PageLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
