import React, { useEffect, useState } from "react";
import axios from "axios";
import ReportModal from "../components/ReportModal";

const AppointmentsPageUser = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedReport, setSelectedReport] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Fetch appointments from the API
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        setLoading(true);
        setError(null);

        // Get the token from local storage
        const token = localStorage.getItem("token");
        console.log("🚀 ~ fetchAppointments ~ token:", token);

        // Make API request
        const response = await axios.get(
          "http://localhost:4000/api/v1/get-appointments",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("🚀 ~ fetchAppointments ~ response:", response);

        setAppointments(response.data.payload.appointments); // Adjust response as per the actual API response structure
      } catch (err) {
        console.log(err);

        setError("Failed to load appointments. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const openModal = (report) => {
    setSelectedReport(report);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedReport(null);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {/* Page Header */}
      <header className="bg-white py-16">
        <div className="mx-auto max-w-screen-xl px-4 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Appointments
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600">
            View all upcoming, completed, and canceled appointments.
          </p>
        </div>
      </header>

      {/* Appointments Table */}
      <section className="bg-gray-100 py-16">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="overflow-hidden rounded-lg shadow-lg bg-white">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Patient Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Doctor Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Appointment Date
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Reason
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {appointments.map((appointment) => (
                  <tr key={appointment._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {appointment.patient.fullName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {appointment.doctor.fullName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {new Date(
                        appointment.appointmentDate
                      ).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {appointment.reason}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          appointment.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : appointment.status === "Scheduled"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {appointment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => openModal(appointment.report)}
                        className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg"
                      >
                        View Report
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Modal for Viewing Report */}
      {selectedReport && (
        <ReportModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          report={selectedReport}
        />
      )}
    </>
  );
};

export default AppointmentsPageUser;
