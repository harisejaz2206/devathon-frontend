import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar"; // Import your Navbar component
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import LoginForm from "./pages/Login";

function App() {
  // const token = useSelector(selectAuthToken);

  // useLayoutEffect(() => {
  //   if (token) {
  //     HttpService.setToken(token);
  //     localStorage.setItem("token", token);
  //     console.log("Token set globally");
  //   }
  // }, [token]);
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "ur" : "en";
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };
  return (
    <LanguageProvider>
      <Layout>
        <h1>{t("test")}</h1>
        <h3>Current Language: {currentLanguage}</h3>
        <button type="button" onClick={handleChangeLanguage}>
          Change Language
        </button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </Layout>
      <ToastContainer />
    </LanguageProvider>
  );
}

function MainContent() {
  const { currentLanguage, changeLanguage } = useLanguage();

  return (
    <>
      <h1>{currentLanguage === "en" ? "English" : "Urdu"} Page</h1>
      <h3>Current Language: {currentLanguage}</h3>
      <button type="button" onClick={changeLanguage}>
        Change Language
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  );
}

export default App;
