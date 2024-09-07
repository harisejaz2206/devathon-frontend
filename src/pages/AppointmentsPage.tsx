import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch appointments on component mount
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No token found");
          setLoading(false);
          return;
        }

        const response = await axios.get("http://localhost:4000/api/v1/get-appointments", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.status) {
          setAppointments(response.data.payload.appointments);
        } else {
          setError(response.data.message || "Failed to fetch appointments");
        }
      } catch (err) {
        setError("An error occurred while fetching appointments");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  // Handler for delete action
  const handleDelete = async (id: string) => {
    // You can implement delete functionality here, e.g., making an API call to delete the appointment
    setAppointments(appointments.filter((appointment) => appointment._id !== id));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">My Appointments</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-gray-600">
            <th className="px-4 py-2 border">Patient Name</th>
            <th className="px-4 py-2 border">Doctor Name</th>
            <th className="px-4 py-2 border">Appointment Date</th>
            <th className="px-4 py-2 border">Appointment Time</th>
            <th className="px-4 py-2 border">Reason</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment._id} className="border-b">
              <td className="px-4 py-2">{appointment.patient.fullName}</td>
              <td className="px-4 py-2">{appointment.doctor.fullName}</td>
              <td className="px-4 py-2">{new Date(appointment.appointmentDate).toLocaleDateString()}</td>
              <td className="px-4 py-2">{appointment.appointmentTime}</td>
              <td className="px-4 py-2">{appointment.reason}</td>
              <td className="px-4 py-2">{appointment.status}</td>
              <td className="px-4 py-2 text-center">
                <button
                  onClick={() => handleDelete(appointment._id)}
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

export default AppointmentsPage;
