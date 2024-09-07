// FindDoctor.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppointmentModal from "../components/AppointmentModal";

const doctors = [
  { id: 1, name: "Dr. John Doe", specialization: "Cardiologist" },
  { id: 2, name: "Dr. Jane Smith", specialization: "Neurologist" },
  { id: 3, name: "Dr. Alice Brown", specialization: "Dermatologist" },
  // Add more doctors as needed
];

export default function FindDoctor() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);

  const handleOpenModal = (doctor: any) => {
    setSelectedDoctor(doctor);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedDoctor(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Find a Doctor</h1>
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
            <tr key={doctor.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {doctor.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {doctor.specialization}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  onClick={() => handleOpenModal(doctor)}
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  Book Appointment
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
        />
      )}
    </div>
  );
}
