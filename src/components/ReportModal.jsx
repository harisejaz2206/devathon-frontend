import React from "react";
import Modal from "react-modal";

// Set the app element for accessibility
Modal.setAppElement("#root");

const ReportModal = ({ isOpen, onRequestClose, report }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Report Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <h2 className="text-xl font-bold">Appointment Report</h2>
      <button onClick={onRequestClose} className="close-button">
        Close
      </button>
      <div className="mt-4 overflow-y-scroll h-[60vh]">
        <p>
          <strong>Disease:</strong> {report.disease}
        </p>
        <p>
          <strong>Additional Notes:</strong> {report.additionalNotes}
        </p>
        <p>
          <strong>Follow Up Date:</strong>{" "}
          {new Date(report.followUpDate).toLocaleDateString()}
        </p>
        <p>
          <strong>Prescribed Medication:</strong>
        </p>
        <ul>
          {report.prescribedMedication.map((medication, index) => (
            <li key={index}>{medication}</li>
          ))}
        </ul>
        <p>
          <strong>Test Results:</strong>
        </p>
        <ul>
          {report.testResults.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
        {report.xrayImageUrl && (
          <div>
            <p>
              <strong>X-ray Image:</strong>
            </p>
            <img
              src={report.xrayImageUrl}
              alt="X-ray"
              className="w-full h-auto mt-2"
            />
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ReportModal;
