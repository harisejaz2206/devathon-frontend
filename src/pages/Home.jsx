import React, { useState } from "react";
import Modal from "../components/Modal"; // Adjust the import path as needed
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("home");

  const showToast = () => {
    toast.success(t("toastMessage"));
  };

  return (
    <>
      <div className="p-6">
        <button
          onClick={showToast}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          {t("showSuccessToast")}
        </button>
      </div>
      <div>
        <button
          type="button"
          className="px-4 py-2 text-white bg-blue-600 rounded-md"
          onClick={() => setIsOpen(true)}
        >
          Open Modal
        </button>

        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title={t("paymentSuccessful")}
          description="Your payment has been successfully processed."
          confirmText="Deactivate"
          cancelText="Cancel"
          onConfirm={() => console.log("Confirmed")}
          onCancel={() => console.log("Cancelled")}
        />
      </div>
    </>
  );
};

export default Home;
