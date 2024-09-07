// DashboardHome.jsx
import React from "react";

const DashboardHome = () => {
  return (
    <div className="p-4 bg-white rounded-lg max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Welcome to the Admin Dashboard
      </h1>
      <p className="text-gray-600 mb-4">
        Here you can manage users, appointments, medical records, and billing.
        Use the sidebar to navigate to different sections of the admin panel.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">
            User Profiles
          </h2>
          <p className="text-gray-600">
            View and manage user profiles, including their personal details and
            settings.
          </p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-green-800 mb-2">
            Appointments
          </h2>
          <p className="text-gray-600">
            Manage and schedule appointments, and view upcoming and past
            appointments.
          </p>
        </div>
        <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-yellow-800 mb-2">
            Medical Records
          </h2>
          <p className="text-gray-600">
            Access and manage medical records for users, including adding new
            records and viewing existing ones.
          </p>
        </div>
        <div className="bg-red-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-red-800 mb-2">Billing</h2>
          <p className="text-gray-600">
            Handle billing and invoicing tasks, including generating invoices
            and tracking payments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
