import React from "react";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "../components/globals/InputField";

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

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm md:max-w-md lg:max-w-md">
        <div className="bg-white px-6 py-12 shadow-lg rounded-lg sm:px-8">
          <form className="space-y-6" onSubmit={() => {}}>
            {/* Email Field */}
            <InputField
              placeholder="Email"
              name="email"
              type="email"
              className="mt-2 sm:mt-0"
            />

            {/* Password Field */}
            <InputField
              size="sm"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className=""
            />

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
            to="/register"
            className="font-semibold leading-6 text-white hover:text-gray-300 hover:underline"
          >
            Sign Up Now
          </Link>
        </p>
      </div>
    </div>
  );
}
