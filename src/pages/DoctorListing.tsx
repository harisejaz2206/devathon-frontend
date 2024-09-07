import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import axios from "axios";

// Define the type for a doctor object
interface Doctor {
  _id: string;
  fullName: string;
  email: string;
  specialization?: string; // optional as it's not present in all responses
}

const DoctorsListing = () => {
  // State to store the list of doctors
  const [doctors, setDoctors] = useState<Doctor[]>([]); // Set the state type to Doctor[]

  // Fetch doctor data from the API when component mounts
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/doctors", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming token is stored in local storage
          },
        });
        if (response.data.status) {
          // toast.success("")
          setDoctors(response.data.payload); // Set the fetched data into state
        } else {
          console.error("Failed to fetch doctors");
        }
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  // Handler for delete action
  const handleDelete = (id: string) => {
    setDoctors(doctors.filter((doctor) => doctor._id !== id));
  };

  // Handler for edit action
  const handleEdit = (id: string) => {
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
            <tr key={doctor._id} className="border-b">
              <td className="px-4 py-2">{doctor._id}</td>
              <td className="px-4 py-2">{doctor.fullName}</td>
              <td className="px-4 py-2">
                {doctor.specialization ? doctor.specialization : "N/A"}
              </td>
              <td className="px-4 py-2">{doctor.email}</td>
              <td className="px-4 py-2 text-center">
                <button
                  onClick={() => handleEdit(doctor._id)}
                  className="text-blue-500 hover:text-blue-700 mr-2"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(doctor._id)}
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
