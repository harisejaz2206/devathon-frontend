import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaUser,
  FaCalendarAlt,
  FaFileMedical,
  FaFileInvoiceDollar,
  FaUserCircle, // Added for the profile link
} from "react-icons/fa";
import axios from "axios";
import Logo from "../assets/images/logo.png";

const Sidebar = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token"); // Replace 'token' with the correct key if needed
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
  }, []);

  return (
    <div className="w-64 h-full bg-white shadow-md text-gray-800 flex flex-col">
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
        <ul>
          <li>
            <NavLink
              to="/dashboard/users"
              className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-300 rounded-lg"
              activeClassName="bg-gray-100 text-gray-900"
            >
              <FaUser className="mr-3 text-xl" /> User Profiles
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/appointments"
              className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-300 rounded-lg"
              activeClassName="bg-gray-100 text-gray-900"
            >
              <FaCalendarAlt className="mr-3 text-xl" /> Appointments
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/medical-records"
              className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-300 rounded-lg"
              activeClassName="bg-gray-100 text-gray-900"
            >
              <FaFileMedical className="mr-3 text-xl" /> Medical Records
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/billing"
              className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-300 rounded-lg"
              activeClassName="bg-gray-100 text-gray-900"
            >
              <FaFileInvoiceDollar className="mr-3 text-xl" /> Billing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/add-doctor"
              className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-300 rounded-lg"
              activeClassName="bg-gray-100 text-gray-900"
            >
              <FaUserCircle className="mr-3 text-xl" /> Add Doctor
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
