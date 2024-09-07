import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const AppointmentsPage = () => {
  // Sample appointment data
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: "Alice Johnson",
      doctorName: "Dr. John Smith",
      appointmentDate: "2024-09-15",
      status: "Pending",
    },
    {
      id: 2,
      patientName: "Bob Brown",
      doctorName: "Dr. Jane Doe",
      appointmentDate: "2024-09-20",
      status: "Completed",
    },
    {
      id: 3,
      patientName: "Charlie Davis",
      doctorName: "Dr. Emily White",
      appointmentDate: "2024-09-22",
      status: "Cancelled",
    },
  ]);

  // Handler for delete action
  const handleDelete = (id: any) => {
    setAppointments(
      appointments.filter((appointment) => appointment.id !== id)
    );
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Appointments</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-gray-600">
            <th className="px-4 py-2 border">Patient Name</th>
            <th className="px-4 py-2 border">Doctor Name</th>
            <th className="px-4 py-2 border">Appointment Date</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id} className="border-b">
              <td className="px-4 py-2">{appointment.patientName}</td>
              <td className="px-4 py-2">{appointment.doctorName}</td>
              <td className="px-4 py-2">{appointment.appointmentDate}</td>
              <td className="px-4 py-2">{appointment.status}</td>
              <td className="px-4 py-2 text-center">
                <button
                  onClick={() => handleDelete(appointment.id)}
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
