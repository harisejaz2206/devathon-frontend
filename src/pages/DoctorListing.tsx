import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const DoctorsListing = () => {
  // Sample doctor data
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Dr. John Smith",
      specialization: "Cardiologist",
      email: "john.smith@example.com",
    },
    {
      id: 2,
      name: "Dr. Jane Doe",
      specialization: "Neurologist",
      email: "jane.doe@example.com",
    },
    {
      id: 3,
      name: "Dr. Emily White",
      specialization: "Pediatrician",
      email: "emily.white@example.com",
    },
  ]);

  // Handler for delete action
  const handleDelete = (id: any) => {
    setDoctors(doctors.filter((doctor) => doctor.id !== id));
  };

  // Handler for edit action
  const handleEdit = (id: any) => {
    // Add your edit logic here (e.g., navigate to an edit page or show a modal)
    alert(`Edit doctor with ID: ${id}`);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Doctors List</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-gray-600">
            <th className="px-4 py-2 border">Doctor ID</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Specialization</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id} className="border-b">
              <td className="px-4 py-2">{doctor.id}</td>
              <td className="px-4 py-2">{doctor.name}</td>
              <td className="px-4 py-2">{doctor.specialization}</td>
              <td className="px-4 py-2">{doctor.email}</td>
              <td className="px-4 py-2 text-center">
                <button
                  onClick={() => handleEdit(doctor.id)}
                  className="text-blue-500 hover:text-blue-700 mr-2"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(doctor.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorsListing;
