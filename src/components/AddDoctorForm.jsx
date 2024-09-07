import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddDoctor = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    specialization: "",
  });

  // Function to handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token"); // Get the token from localStorage

    try {
      const response = await fetch(
        "http://localhost:4000/api/v1/create-doctor",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData), // Send form data in the request body
        }
      );

      if (response.ok) {
        toast.success("New doctor has been added!");
        const data = await response.json();
        console.log("Doctor added successfully:", data);
        navigate("/dashboard/doctors");
        // Optionally reset the form here
      } else {
        const errorData = await response.json();
        console.error("Error adding doctor:", errorData);
      }
    } catch (error) {
      console.error("Error adding doctor:", error);
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-xl border max-w-lg mx-auto">
      <div className="flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Add New Doctor
        </h2>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="fullName"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Dr. John Smith"
            value={formData.fullName}
            onChange={handleChange}
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
            name="email"
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="john.smith@example.com"
            value={formData.email}
            onChange={handleChange}
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
            name="password"
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
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
            name="specialization"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Cardiologist"
            value={formData.specialization}
            onChange={handleChange}
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
