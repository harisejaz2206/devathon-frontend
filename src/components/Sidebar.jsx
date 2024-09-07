import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaUser,
  FaCalendarAlt,
  FaFileMedical,
  FaFileInvoiceDollar,
  FaUserCircle, // Added for the profile link
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-white shadow-md text-gray-800">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
      </div>
      <nav className="mt-6">
        <ul>
          <li>
            <NavLink
              to="/profile" // Added profile route
              className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-300"
              activeClassName="bg-gray-100 text-gray-900"
            >
              <FaUserCircle className="mr-3 text-xl" /> Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user-profiles"
              className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-300"
              activeClassName="bg-gray-100 text-gray-900"
            >
              <FaUser className="mr-3 text-xl" /> User Profiles
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/appointments"
              className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-300"
              activeClassName="bg-gray-100 text-gray-900"
            >
              <FaCalendarAlt className="mr-3 text-xl" /> Appointments
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/medical-records"
              className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-300"
              activeClassName="bg-gray-100 text-gray-900"
            >
              <FaFileMedical className="mr-3 text-xl" /> Medical Records
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/billing"
              className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-300"
              activeClassName="bg-gray-100 text-gray-900"
            >
              <FaFileInvoiceDollar className="mr-3 text-xl" /> Billing
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
