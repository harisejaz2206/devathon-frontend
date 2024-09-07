import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../components/globals/InputField";
import DatePicker from "react-datepicker";
import * as Yup from "yup";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { AppThunkDispatch } from "../store/rootReducer";
import {
  selectAuthLoading,
  selectAuthMessage,
  selectAuthToken,
  selectAuthUser,
} from "../app/features/auth/auth.selectors";
import { HttpService } from "../app/services/base.service";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { signup } from "../app/features/auth/auth.thunk";
import { handleApiResponse } from "../utils/handle-api-response.utils";
import { handleError } from "../utils/catch-toast-error";

type FormData = {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  dateOfBirth?: Date;
  gender?: string;
  phone?: string;
  address?: string;
  bloodGroup?: string;
  medicalConditions?: string;
  allergies?: string; // Optional field
};

const genderOptions = [
  { value: "", label: "Select Gender" },
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Other", label: "Other" },
];

const bloodGroupOptions = [
  { value: "", label: "Select Blood Group" },
  { value: "A+", label: "A+" },
  { value: "A-", label: "A-" },
  { value: "B+", label: "B+" },
  { value: "B-", label: "B-" },
  { value: "O+", label: "O+" },
  { value: "O-", label: "O-" },
  { value: "AB+", label: "AB+" },
  { value: "AB-", label: "AB-" },
];

const registerSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Full name is required")
    .min(2, "Full name must be at least 2 characters long"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(5, "Password must be at least 5 characters long"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),

  dateOfBirth: Yup.date()
    .required("Date of birth is required")
    .max(new Date(), "Date of birth cannot be in the future"),

  gender: Yup.string()
    .oneOf(["Male", "Female", "Other"], "Invalid gender")
    .required("Gender is required"),

  phone: Yup.string().required("Phone number is required"),

  address: Yup.string()
    .required("Address is required")
    .min(5, "Address must be at least 5 characters long"),

  bloodGroup: Yup.string()
    .oneOf(
      ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      "Invalid blood group"
    )
    .required("Blood group is required"),

  medicalConditions: Yup.string().optional(), // Optional, can be empty

  allergies: Yup.string().optional(), // Optional, can be empty
});

export default function RegistrationForm() {
  const dispatch = useDispatch<AppThunkDispatch>();
  const navigate = useNavigate();
  const loading = useSelector(selectAuthLoading);
  const token = useSelector(selectAuthToken);
  const userData = useSelector(selectAuthUser);
  const message = useSelector(selectAuthMessage);

  const handleSuccess = (result: any) => {
    navigate("/");
    toast.success(result.payload.message);
  };

  const formik = useFormik<FormData>({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: new Date(), // or an empty string if you prefer
      gender: "", // or set a default value if needed
      phone: "",
      address: "",
      bloodGroup: "", // or set a default value if needed
      medicalConditions: "",
      allergies: "",
    },
    validationSchema: registerSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log("before dispatch values", values);
      dispatch(signup(values))
        .then((result) => {
          console.log("result", result);
          handleApiResponse({
            result,
            handleSuccess: () => handleSuccess(result),
            formik,
          });
        })
        .catch(handleError);
    },
  });

  const hanldeNavigateToHome = () => {
    navigate("/");
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      formik.setFieldValue("dateOfBirth", date);
    }
  };

  console.log("formik", formik.values);
  console.log("Formik errors:", formik.errors);

  return (
    <div className="flex min-h-screen flex-col justify-center py-12 px-6 sm:px-8 lg:px-12 bg-blue-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
        <h2 className="mt-6 text-center text-3xl font-extrabold leading-9 tracking-tight text-white">
          <Typewriter
            options={{
              strings: ["Create Your Account", "Sign Up to Get Started"],
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 50,
            }}
          />
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="bg-white px-6 py-12 shadow-lg rounded-lg sm:px-8">
          <form
            className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-6"
            onSubmit={formik.handleSubmit}
          >
            {/* Full Name Field */}
            <div className="flex flex-col">
              <label
                htmlFor="fullName"
                className="mb-1 text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <InputField
                placeholder="Full Name"
                name="fullName"
                type="text"
                formik={formik}
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="mb-1 text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <InputField
                placeholder="Email"
                name="email"
                type="email"
                formik={formik}
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="mb-1 text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <InputField
                placeholder="Password"
                name="password"
                type="password"
                formik={formik}
              />
            </div>

            {/* Confirm Password Field */}
            <div className="flex flex-col">
              <label
                htmlFor="confirmPassword"
                className="mb-1 text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <InputField
                placeholder="Confirm Password"
                name="confirmPassword"
                type="password"
                formik={formik}
              />
            </div>

            {/* Date of Birth Field */}
            <div className="flex flex-col">
              <label
                htmlFor="dateOfBirth"
                className="mb-1 text-sm font-medium text-gray-700"
              >
                Date of Birth
              </label>
              <DatePicker
                selected={formik.values.dateOfBirth}
                onChange={handleDateChange}
                className="block w-full mt-1 p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-12"
                dateFormat="yyyy/MM/dd"
              />
            </div>

            {/* Gender Field */}
            <div className="flex flex-col">
              <label
                htmlFor="gender"
                className="mb-1 text-sm font-medium text-gray-700"
              >
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                className="block p-2 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-12"
                value={formik.values.gender}
                onChange={formik.handleChange}
              >
                {genderOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Phone Field */}
            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="mb-1 text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <InputField
                placeholder="Phone Number"
                name="phone"
                type="tel"
                formik={formik}
              />
            </div>

            {/* Blood Group Field */}
            <div className="flex flex-col">
              <label
                htmlFor="bloodGroup"
                className="mb-1 text-sm font-medium text-gray-700"
              >
                Blood Group
              </label>
              <select
                name="bloodGroup"
                id="bloodGroup"
                className="block w-full p-2 mt-0 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-12"
                value={formik.values.bloodGroup}
                onChange={formik.handleChange}
              >
                {bloodGroupOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col col-span-2">
              <label
                htmlFor="address"
                className="mb-1 text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <textarea
                placeholder="Address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                className="block w-full p-2 mt-0 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-24"
              />
            </div>

            {/* Medical Conditions Field */}
            <div className="flex flex-col col-span-2">
              <label
                htmlFor="medicalConditions"
                className="mb-1 text-sm font-medium text-gray-700"
              >
                Medical Conditions
              </label>
              <textarea
                name="medicalConditions"
                id="medicalConditions"
                className="block w-full p-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-24"
                rows={4}
                value={formik.values.medicalConditions}
                onChange={formik.handleChange}
              />
            </div>

            {/* Allergies Field */}
            <div className="flex flex-col col-span-2">
              <label
                htmlFor="allergies"
                className="mb-1 text-sm font-medium text-gray-700"
              >
                Allergies
              </label>
              <textarea
                name="allergies"
                id="allergies"
                className="block w-full p-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-24"
                rows={4}
                value={formik.values.medicalConditions}
                onChange={formik.handleChange}
              />
            </div>

            {/* Sign Up Button */}
            <div className="col-span-2">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-lg hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <p className="mt-10 text-center text-sm text-white">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold leading-6 text-white hover:text-gray-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
