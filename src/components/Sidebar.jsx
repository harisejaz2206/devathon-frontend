import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaCalendarAlt,
  FaFileMedical,
  FaFileInvoiceDollar,
  FaUserCircle,
  FaGlobe, // Added for the language switch
  FaSignOutAlt, // Added for the sign-out button
} from "react-icons/fa";
import axios from "axios";
import Logo from "../assets/images/logo.png";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";

const Sidebar = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
  });
  const [role, setRole] = useState("user"); // Default role
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:4000/api/v1/get-profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const { fullName, email } = response.data.payload;
        setUser({
          name: fullName,
          email: email,
        });
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();

    // Retrieve role from local storage
    const userRole = localStorage.getItem("role");
    setRole(userRole || "user"); // Default to "user" if role is not set
  }, []);

  const { t, i18n } = useTranslation("sidebar");
  const { currentLanguage, changeLanguage } = useLanguage();

  const handleLanguageChange = () => {
    const newLanguage = currentLanguage === "en" ? "ur" : "en";
    changeLanguage(newLanguage);
    i18n.changeLanguage(newLanguage); // Update i18n language
  };

  const handleSignOut = () => {
    localStorage.clear(); // Clear local storage
    navigate("/login"); // Navigate to login page
  };

  const isRTL = currentLanguage === "ur";

  const renderNavLinks = () => {
    if (role === "admin") {
      return (
        <>
          <li>
            <NavLink
              to="/dashboard/add-doctor"
              className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-300 rounded-lg"
              activeClassName="bg-gray-100 text-gray-900"
            >
              <FaUserCircle className="mr-3 text-xl" /> {t("addDoctor")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/doctors"
              className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-300 rounded-lg"
              activeClassName="bg-gray-100 text-gray-900"
            >
              <FaUser className="mr-3 text-xl" /> {t("All Doctors")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/patients"
              className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-300 rounded-lg"
              activeClassName="bg-gray-100 text-gray-900"
            >
              <FaUser className="mr-3 text-xl" /> {t("All Patients")}
            </NavLink>
          </li>
        </>
      );
    } else if (role === "doctor") {
      return (
        <>
          <li>
            <NavLink
              to="/dashboard/appointments"
              className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-300 rounded-lg"
              activeClassName="bg-gray-100 text-gray-900"
            >
              <FaCalendarAlt className="mr-3 text-xl" /> {t("My Appointments")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/patients"
              className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-300 rounded-lg"
              activeClassName="bg-gray-100 text-gray-900"
            >
              <FaUser className="mr-3 text-xl" /> {t("Patients")}
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li>
            <NavLink
              to="/dashboard/users"
              className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-300 rounded-lg"
              activeClassName="bg-gray-100 text-gray-900"
            >
              <FaUser className="mr-3 text-xl" /> {t("users")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/appointments"
              className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-300 rounded-lg"
              activeClassName="bg-gray-100 text-gray-900"
            >
              <FaCalendarAlt className="mr-3 text-xl" /> {t("appointments")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/medical-records"
              className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-300 rounded-lg"
              activeClassName="bg-gray-100 text-gray-900"
            >
              <FaFileMedical className="mr-3 text-xl" /> {t("records")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/billing"
              className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-300 rounded-lg"
              activeClassName="bg-gray-100 text-gray-900"
            >
              <FaFileInvoiceDollar className="mr-3 text-xl" /> {t("billing")}
            </NavLink>
          </li>
        </>
      );
    }
  };

  return (
    <div
      className="w-64 h-full bg-white shadow-md text-gray-800 justify-center items-center flex flex-col"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Logo Section */}
      <div className="p-6 border-gray-200 flex items-center justify-center">
        <img
          src={Logo} // Replace with your logo path
          alt="Logo"
          className="w-20 h-20 object-cover rounded-full border-2"
        />
      </div>

      {/* User Information Section */}
      <div className="p-2 border-gray-200 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">
          {user.name}
        </h2>
        <p className="text-gray-500 text-sm">{user.email}</p>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 mt-6">
        <ul>{renderNavLinks()}</ul>
      </nav>

      {/* Language Switch Button */}
      <div className="p-4 border-t border-gray-200 flex justify-center items-center">
        <button
          onClick={handleLanguageChange}
          className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-300 rounded-lg"
        >
          <FaGlobe className="mr-2 text-xl" />
          {currentLanguage === "en" ? t("switchUr") : t("switchEn")}
        </button>
      </div>

      {/* Sign Out Button */}
      <div className="p-4 border-t border-gray-200 flex justify-center items-center">
        <button
          onClick={handleSignOut}
          className="flex items-center px-4 py-2 text-red-600 hover:bg-red-100 hover:text-red-900 transition-colors duration-300 rounded-lg"
        >
          <FaSignOutAlt className="mr-2 text-xl" />
          {t("Sign Out")}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
