import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import Modal from "react-modal";
import { useFormik } from "formik";

Modal.setAppElement("#root");

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedAppointment, setSelectedAppointment] = useState<any | null>(
    null
  );
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No token found");
          setLoading(false);
          return;
        }

        const response = await axios.get(
          "http://localhost:4000/api/v1/get-appointments",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

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

  const handleDelete = async (id: string) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }
      await axios.delete(
        `http://localhost:4000/api/v1/delete-appointment/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAppointments(
        appointments.filter((appointment) => appointment._id !== id)
      );
    } catch (err) {
      console.error("Failed to delete appointment", err);
    }
  };

  const openModal = (appointment: any) => {
    setSelectedAppointment(appointment);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedAppointment(null);
    setModalIsOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      disease: "",
      xrayImageUrl: "",
      prescribedMedication: [],
      testResults: [],
      additionalNotes: "",
      followUpDate: "",
    },
    onSubmit: async (values) => {
      if (selectedAppointment) {
        try {
          const token = localStorage.getItem("token");
          if (!token) {
            throw new Error("No token found");
          }

          const response = await axios.put(
            "http://localhost:4000/api/v1/update-appointment",
            {
              appointmentId: selectedAppointment._id,
              status: "Completed",
              ...values,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );

          if (response.data.status) {
            setAppointments((prevAppointments) =>
              prevAppointments.map((appointment) =>
                appointment._id === selectedAppointment._id
                  ? { ...appointment, ...values }
                  : appointment
              )
            );
            closeModal();
          } else {
            setError(response.data.message || "Failed to update appointment");
          }
        } catch (err) {
          console.error("Failed to update appointment", err);
          setError("An error occurred while updating the appointment");
        }
      }
    },
  });

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const totalFiles = files.length;
    formik.setFieldValue("xrayImageUrl", "");

    if (totalFiles === 0) return;

    const uploadFile = async (file: File) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "hgd-jewellers");

      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/di93nngbm/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );
        if (response.ok) {
          const data = await response.json();
          return data.secure_url;
        } else {
          const errorData = await response.json();
          console.error("API error:", errorData);
          return null;
        }
      } catch (error) {
        console.error("Error uploading file to Cloudinary", error);
        return null;
      }
    };

    const uploadPromises = files.map(async (file) => {
      const url = await uploadFile(file);
      if (url) {
        formik.setFieldValue("xrayImageUrl", url);
      }
    });

    await Promise.all(uploadPromises);
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
              <td className="px-4 py-2">
                {new Date(appointment.appointmentDate).toLocaleDateString()}
              </td>
              <td className="px-4 py-2">{appointment.appointmentTime}</td>
              <td className="px-4 py-2">{appointment.reason}</td>
              <td className="px-4 py-2">{appointment.status}</td>
              <td className="px-4 py-2 text-center">
                {appointment.status === "Completed" && (
                  <button
                    onClick={() => openModal(appointment)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FaPencilAlt />
                  </button>
                )}
                <button
                  onClick={() => handleDelete(appointment._id)}
                  className="text-red-500 hover:text-red-700 ml-2"
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Update Appointment"
        className="modal"
        overlayClassName="overlay"
      >
        <h2 className="text-2xl font-semibold mb-4">Update Appointment</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="disease"
              className="block text-sm font-medium text-gray-700"
            >
              Disease
            </label>
            <input
              type="text"
              id="disease"
              name="disease"
              value={formik.values.disease}
              onChange={formik.handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="xrayImageUrl"
              className="block text-sm font-medium text-gray-700"
            >
              X-Ray Image
            </label>
            <input
              type="file"
              id="xrayImageUrl"
              name="xrayImageUrl"
              accept="image/*"
              onChange={handleImageUpload}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          {/* Add more fields for prescribedMedication and testResults as needed */}
          <div className="mb-4">
            <label
              htmlFor="additionalNotes"
              className="block text-sm font-medium text-gray-700"
            >
              Additional Notes
            </label>
            <textarea
              id="additionalNotes"
              name="additionalNotes"
              value={formik.values.additionalNotes}
              onChange={formik.handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="prescribedMedication"
              className="block text-sm font-medium text-gray-700"
            >
              Prescribed Medication
            </label>
            <input
              type="text"
              id="prescribedMedication"
              name="prescribedMedication"
              value={formik.values.prescribedMedication.join(", ")}
              onChange={(e) =>
                formik.setFieldValue(
                  "prescribedMedication",
                  e.target.value.split(",").map((med) => med.trim())
                )
              }
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="testResults"
              className="block text-sm font-medium text-gray-700"
            >
              Test Results
            </label>
            <input
              type="text"
              id="testResults"
              name="testResults"
              value={formik.values.testResults.join(", ")}
              onChange={(e) =>
                formik.setFieldValue(
                  "testResults",
                  e.target.value.split(",").map((result) => result.trim())
                )
              }
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="followUpDate"
              className="block text-sm font-medium text-gray-700"
            >
              Follow-Up Date
            </label>
            <input
              type="date"
              id="followUpDate"
              name="followUpDate"
              value={
                formik.values.followUpDate
                  ? formik.values.followUpDate.slice(0, 10)
                  : ""
              }
              onChange={formik.handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentsPage;
