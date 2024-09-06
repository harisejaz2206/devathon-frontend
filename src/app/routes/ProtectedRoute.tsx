import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
// import { selectAuthUser } from "../features/auth/auth.selectors";

// Define the type for the props
interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({
  children,
  allowedRoles = ['admin'],
}) => {
//   const user = useSelector(selectAuthUser);
  const storedToken = localStorage.getItem("token");
  const location = useLocation();

  const publicPaths = [
    "/",
    "/login",
    "/signup",
    "/forgot-password",
    "/api/v1/password/reset/:token",
    "/success",
  ];

  // If token exists and the current path is a public path, redirect to the home page
  if (storedToken && publicPaths.includes(location.pathname)) {
    return <Navigate to="/" />;
  }

  // If no token exists and the current path is not a public path, redirect to the login page
  if (!storedToken && !publicPaths.includes(location.pathname)) {
    return <Navigate to="/login" />;
  }

//   if (user?.role && !allowedRoles?.includes(user?.role)) {
//     return <Navigate to="/login" />;
//   }

  return <>{children}</>;
};

export default ProtectedRoute;
