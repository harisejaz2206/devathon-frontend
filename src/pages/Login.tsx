import React from "react";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "../components/globals/InputField";
import { useDispatch, useSelector } from "react-redux";
import { AppThunkDispatch } from "../store/rootReducer";
import {
  selectAuthLoading,
  selectAuthMessage,
  selectAuthToken,
  selectAuthUser,
} from "../app/features/auth/auth.selectors";
import { login } from "../app/features/auth/auth.thunk";
import { handleApiResponse } from "../utils/handle-api-response.utils";
import { toast } from "react-toastify";
import { HttpService } from "../app/services/base.service";
import { handleError } from "../utils/catch-toast-error";

type FormData = {
  email: string;
  password: string;
};

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch<AppThunkDispatch>();
  const navigate = useNavigate();
  const loading = useSelector(selectAuthLoading);
  const token = useSelector(selectAuthToken);
  const userData = useSelector(selectAuthUser);
  const message = useSelector(selectAuthMessage);

  const handleSuccess = (result: any) => {
    const token = result.payload.payload.token;
    const role = result.payload.payload.user.role;
    console.log('role: ', role);
    console.log("token: ", token);
    HttpService.setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);

    navigate(result.payload.payload.user ? "/" : "/haris");
    toast.success(result.payload.message);
    // Toast.fire({
    //   icon: "success",
    //   title: result.payload.message,
    // });
  };

  const formik = useFormik<FormData>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log("before dispatch values", values)
      dispatch(login(values))
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

  console.log("formik", formik.values);
  console.log("Formik errors:", formik.errors);


  return (
    <div className="flex min-h-screen flex-col justify-center py-12 px-6 sm:px-8 lg:px-12 bg-blue-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold leading-9 tracking-tight text-white">
          <Typewriter
            options={{
              strings: ["Welcome Back!", "Sign in to continue..."],
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 50,
            }}
          />
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg lg:max-w-xl">
        <div className="bg-white px-8 py-12 shadow-lg rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            {/* Email Field */}
            <InputField
              placeholder="Email"
              name="email"
              type="email"
              className="mt-2 sm:mt-0"
              formik={formik}
            />

            {/* Password Field */}
            <InputField
              size="sm"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className=""
              formik={formik}
            />

            {/* Show/Hide Password */}
            <div className="flex items-center justify-end text-sm text-blue-700 hover:text-blue-900 cursor-pointer">
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide Password" : "Show Password"}
              </span>
            </div>

            {/* Remember Me Checkbox and Forgot Password Link */}
            <div className="flex items-center justify-between">
              <div className="text-sm leading-6">
                <Link
                  to="/forgot-password"
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            {/* Sign In Button */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-lg hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>

        <p className="mt-10 text-center text-sm text-gray-200">
          Not a member?{" "}
          <Link
            to="/signup"
            className="font-semibold leading-6 text-white hover:text-gray-300 hover:underline"
          >
            Sign Up Now
          </Link>
        </p>
      </div>
    </div>
  );
}
