// FindDoctor.tsx
import React, { useState, useEffect } from "react";
import AppointmentModal from "../components/AppointmentModal";
import axios from "axios";

interface Doctor {
  _id: string;
  fullName: string;
  specialization?: string;
}

interface Appointment {
  doctor: {
    _id: string;
    fullName: string;
    specialization?: string;
  };
  appointmentDate: string;
  appointmentTime: string;
}

export default function FindDoctor() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<{
    name: string;
    id: string;
  } | null>(null);
  const [disabledDoctors, setDisabledDoctors] = useState<Set<string>>(
    new Set()
  );
  const [warningMessage, setWarningMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/doctors"
        );
        if (response.data.status) {
          const doctorList = response.data.payload.map((doc: any) => ({
            _id: doc._id,
            fullName: doc.fullName,
            specialization: doc.specialization || "Not Specified",
          }));
          setDoctors(doctorList);
        }
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    const fetchAppointments = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:4000/api/v1/get-appointments",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (response.data.status) {
          const appointmentSpecializations = new Set(
            response.data.payload.appointments.map(
              (appt: any) => appt.doctor.specialization || "Not Specified"
            )
          );
          setAppointments(response.data.payload.appointments);
          const disabledDoctorsSet = new Set(
            doctors
              .filter((doctor) =>
                appointmentSpecializations.has(
                  doctor.specialization || "Not Specified"
                )
              )
              .map((doctor) => doctor._id)
          );
          setDisabledDoctors(disabledDoctorsSet);
          if (disabledDoctorsSet.size > 0) {
            setWarningMessage(
              "You cannot book an appointment with a doctor of the same specialization you already have an appointment with."
            );
          }
        }
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchDoctors();
    fetchAppointments();
  }, [doctors.length]); 

  const handleOpenModal = (doctor: Doctor) => {
    if (disabledDoctors.has(doctor._id)) return;
    setSelectedDoctor({ name: doctor.fullName, id: doctor._id });
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedDoctor(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Find a Doctor</h1>
      {warningMessage && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
          {warningMessage}
        </div>
      )}
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Specialization
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {doctors.map((doctor) => (
            <tr key={doctor._id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {doctor.fullName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {doctor.specialization}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  onClick={() => handleOpenModal(doctor)}
                  className={`text-indigo-600 hover:text-indigo-900 ${
                    disabledDoctors.has(doctor._id)
                      ? "cursor-not-allowed opacity-50"
                      : ""
                  }`}
                  disabled={disabledDoctors.has(doctor._id)}
                >
                  {disabledDoctors.has(doctor._id)
                    ? "Already Booked"
                    : "Book Appointment"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {selectedDoctor && (
        <AppointmentModal
          isOpen={isOpen}
          onClose={handleCloseModal}
          doctorName={selectedDoctor.name}
          doctorId={selectedDoctor.id}
        />
      )}
    </div>
  );
}
