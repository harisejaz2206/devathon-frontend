import React from "react";
import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";

const Dashboard = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <main className="p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default Dashboard;
