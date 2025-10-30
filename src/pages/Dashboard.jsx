import React from "react";
import { Outlet,Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <main className="main-center">
        <h2>Student Dashboard</h2>
        <Link className="btn" to="/dashboard/newComplaint">
          File New Complaint
        </Link>
        <Link className="btn" to="/dashboard/myComplaints">
          View My Complaints
        </Link>
      </main>
      <Outlet />
    </>
  );
};

export default Dashboard;
