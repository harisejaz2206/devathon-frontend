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
  allowedRoles = [],
}) => {
  // const user = useSelector(selectAuthUser);
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

// import React, { FC } from "react";
// import { useSelector } from "react-redux";
// import { Navigate, useLocation } from "react-router-dom";
// // import { selectAuthUser } from "../features/auth/auth.selectors";

// // Define the type for the props
// interface ProtectedRouteProps {
//   children: React.ReactNode;
//   allowedRoles?: string[]; // Array of roles that are allowed to access the route
// }

// const ProtectedRoute: FC<ProtectedRouteProps> = ({
//   children,
//   allowedRoles = ['admin'], // Default to 'admin' if no roles are passed
// }) => {
//   // You will probably fetch the user from the Redux store or another state management approach
//   // const user = useSelector(selectAuthUser); // Uncomment this if using Redux for user state

//   // For now, we're assuming that the user's role is stored in localStorage. Modify this as needed.
//   const storedToken = localStorage.getItem("token");
//   const storedRole = localStorage.getItem("role"); // Assuming you store the role in localStorage
//   const location = useLocation();

//   const publicPaths = [
//     "/",
//     "/login",
//     "/signup",
//     "/forgot-password",
//     "/api/v1/password/reset/:token",
//     "/success",
//   ];

//   // If token exists and the current path is a public path, redirect to the home page
//   if (storedToken && publicPaths.includes(location.pathname)) {
//     return <Navigate to="/" />;
//   }

//   // If no token exists and the current path is not a public path, redirect to the login page
//   if (!storedToken && !publicPaths.includes(location.pathname)) {
//     return <Navigate to="/login" />;
//   }

//   // Check if the user's role matches one of the allowed roles
//   if (storedRole && !allowedRoles.includes(storedRole)) {
//     // If the user has a role but it doesn't match the allowed roles, redirect to login or an unauthorized page
//     return <Navigate to="/login" />;
//   }

//   // If all checks pass, render the children
//   return <>{children}</>;
// };

// export default ProtectedRoute;
