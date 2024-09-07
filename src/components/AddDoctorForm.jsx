// AddDoctor.jsx
import React from "react";

const AddDoctor = () => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-xl border max-w-lg mx-auto">
      <div className="flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Add New Doctor
        </h2>
      </div>

      <form className="space-y-6">
        <div>
          <label
            htmlFor="fullName"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Dr. John Smith"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="john.smith@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
          />
        </div>
        <div>
          <label
            htmlFor="specialization"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            Specialization
          </label>
          <input
            id="specialization"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Cardiologist"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-800 text-white py-3 rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;
