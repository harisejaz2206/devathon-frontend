// AppointmentModal.tsx
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import axios from "axios";
import { toast } from "react-toastify";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctorName: string | null;
  doctorId: string | null;
}

export default function AppointmentModal({
  isOpen,
  onClose,
  doctorName,
  doctorId,
}: AppointmentModalProps) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!date) newErrors.date = "Date is required";
    if (!time) newErrors.time = "Time is required";
    if (!reason) newErrors.reason = "Reason is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post("http://localhost:4000/api/v1/create-appointment", {
        doctor: doctorId,
        appointmentDate: date,
        appointmentTime: time,
        reason: reason,
      });
      toast.success("Appointment has been booked!")
      onClose();
    } catch (error) {
      console.error("Error creating appointment:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <div
        className="fixed inset-0 bg-black bg-opacity-30"
        aria-hidden="true"
      />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <Dialog.Title className="text-2xl font-semibold p-6 border-b border-gray-200">
            Book Appointment with {doctorName}
          </Dialog.Title>
          <Dialog.Description>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg shadow-sm bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Select a date"
                />
                {errors.date && (
                  <p className="text-red-600 text-xs mt-1">{errors.date}</p>
                )}
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-gray-700"
                >
                  Time
                </label>
                <input
                  id="time"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg shadow-sm bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Select a time"
                />
                {errors.time && (
                  <p className="text-red-600 text-xs mt-1">{errors.time}</p>
                )}
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="reason"
                  className="block text-sm font-medium text-gray-700"
                >
                  Reason
                </label>
                <textarea
                  id="reason"
                  rows={4}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg shadow-sm bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Why are you booking this appointment?"
                />
                {errors.reason && (
                  <p className="text-red-600 text-xs mt-1">{errors.reason}</p>
                )}
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center px-4 py-2 bg-gray-500 text-white font-medium rounded-lg shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {isSubmitting ? "Booking..." : "Book Appointment"}
                </button>
              </div>
            </form>
          </Dialog.Description>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
