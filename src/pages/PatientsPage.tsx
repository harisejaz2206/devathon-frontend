import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";

const PatientsPage = () => {
  const [patients, setPatients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch patients on component mount
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No token found");
          setLoading(false);
          return;
        }

        const response = await axios.get(
          "http://localhost:4000/api/v1/patients",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.status) {
          setPatients(response.data.payload);
        } else {
          setError(response.data.message || "Failed to fetch patients");
        }
      } catch (err) {
        setError("An error occurred while fetching patients");
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  // Handler for delete action
  const handleDelete = async (id: string) => {
    // Implement delete functionality here if needed
    // You may want to call an API to delete the patient and then update the local state
    setPatients(patients.filter((patient) => patient._id !== id));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Patients List</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-gray-600">
            <th className="px-4 py-2 border">Full Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Date of Birth</th>
            <th className="px-4 py-2 border">Gender</th>
            <th className="px-4 py-2 border">Phone</th>
            <th className="px-4 py-2 border">Address</th>
            <th className="px-4 py-2 border">Medical Conditions</th>
            <th className="px-4 py-2 border">Allergies</th>
            <th className="px-4 py-2 border">Blood Group</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient._id} className="border-b">
              <td className="px-4 py-2">{patient.fullName}</td>
              <td className="px-4 py-2">{patient.email}</td>
              <td className="px-4 py-2">
                {new Date(patient.dateOfBirth).toLocaleDateString()}
              </td>
              <td className="px-4 py-2">{patient.gender}</td>
              <td className="px-4 py-2">{patient.phone}</td>
              <td className="px-4 py-2">{patient.address}</td>
              <td className="px-4 py-2">{patient.medicalConditions}</td>
              <td className="px-4 py-2">{patient.allergies}</td>
              <td className="px-4 py-2">{patient.bloodGroup}</td>
              <td className="px-4 py-2 text-center">
                <button
                  onClick={() => handleDelete(patient._id)}
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

export default PatientsPage;
