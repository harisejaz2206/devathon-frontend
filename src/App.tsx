import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar"; // Import your Navbar component
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout";
import { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import LoginForm from "./pages/Login";
import { useSelector } from "react-redux";
import { selectAuthToken } from "./app/features/auth/auth.selectors";
import { HttpService } from "./app/services/base.service";
import RegistrationForm from "./pages/Register";
import Dashboard from "./components/Dashboard";
import { Switch } from "@headlessui/react";
import UserProfile from "./components/UserProfile";
import VerifyEmail from "./components/VerifyEmail";

function App() {
  const token = useSelector(selectAuthToken);

  useLayoutEffect(() => {
    if (token) {
      HttpService.setToken(token);
      localStorage.setItem("token", token);
      console.log("Token has been set globally");
    }
  }, [token]);

  return (
    <LanguageProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route
            path="/dashboard/user-profile"
            element={
              <Dashboard>
                <UserProfile />{" "}
              </Dashboard>
            }
          />
          <Route path="/verify-account/:token" element={<VerifyEmail />} />
        </Routes>
      </Layout>
      <ToastContainer />
    </LanguageProvider>
  );
}

export default App;
