import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ViewUpdateProfile from "./ViewUpdateProfile";
import MyMedicalRecords from "./MyMedicalRecords";
import ToolsPage from "./ToolsPage";
import Appointments from "./Appointments";
import { MdLogout } from "react-icons/md";
import ProtectedRoute2 from "../utils/Protected2";
const handleClearCookie = () => {
  // Clear the cookie by setting its expiration date to a past date
  document.cookie = 'HBI-T=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  
  // Refresh the page
  window.location.reload();
};
const Sidebar = () => (
  <nav
    aria-label="Sidebar Navigation"
    className=" z-10 h-full w-64 bg-gray-700 text-white overflow-y-auto"
  >
    <div className="bg-slate-800 mt-5 py-4 pl-10">
      <span>
        {/* <img src={logo} height="2rem" alt="" className="rounded-full" /> */}
      </span>
    </div>
    <ul className="mt-8 space-y-3">
      {[
        "My Appointments",
        "My Medical Records",
        "My Feedback",
        "View/Update Profile",
        "Payments",
        "Tools",
        "Help",
      ].map((item, index) => (
        <li key={index}>
          <Link
            to={item.replace(/ /g, "").toLowerCase()}
            className="flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 hover:bg-slate-600"
          >
            <span>{item}</span>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

const MyFeedback = () => <div>My Feedback Content</div>;

const PatientDashboard = () => (
  
  <div className="flex h-screen bg-slate-200">
    <Sidebar />
    <div className="flex-1 flex flex-col ">
      <header className="flex items-center justify-between bg-white px-4 py-6 shadow md:h-20">
        <h1 className="text-2xl font-bold">Patient Portal</h1>
        <button onClick={handleClearCookie}>
          <MdLogout size={30} />
        </button>
      </header>
      <main className="flex-1 overflow-y-auto p-6 bg-sky-50">
        <Routes>

          <Route
            path="myappointments"
            element={<ProtectedRoute2 element={<Appointments />} />}
          />
          <Route path="mymedicalrecords" element={<MyMedicalRecords />} />
          <Route path="myfeedback" element={<MyFeedback />} />
          <Route path="view/updateprofile" element={<ViewUpdateProfile />} />

          <Route
            path="tools"
            element={<ProtectedRoute2 element={<ToolsPage />} />}
          />
          <Route path="/" element={<div>Welcome to your Dashboard</div>} />

        </Routes>
      </main>
    </div>
  </div>
);

export default PatientDashboard;
