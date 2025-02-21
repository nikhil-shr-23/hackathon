import React from 'react';
import { Link } from 'react-router-dom';

const Pkgpage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Our Health Packages</h1>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {/* Basic */}
        <div className="card bg-white shadow-lg rounded-lg p-8 flex-1">
          <h2 className="text-2xl font-semibold mb-4">Basic Package</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>General Physician Consultancy</li>
            <li>Basic Blood Test</li>
            <li>Health Report</li>
            <li>Doctor Advice & Interpreter Support</li>
          </ul>
        </div>

        {/* upt */}
        <div className="card bg-white shadow-lg rounded-lg p-8 flex-1">
          <h2 className="text-2xl font-semibold mb-4">Ultimate Health Package</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Includes all features from Basic Package</li>
            <li>Visa Support System</li>
            <li>Diet & Lifestyle Consultancy</li>
          </ul>
        </div>

        {/* Premium Package Card */}
        <div className="card bg-white shadow-lg rounded-lg p-8 flex-1">
          <h2 className="text-2xl font-semibold mb-4">Premium Package</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Includes all features from Ultimate Health Package</li>
            <li>Travel & Cab Support</li>
            <li>Health Mentor Assigning</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-12">
        <Link
          to="/chatdoc"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow transition-transform hover:scale-105"
          aria-label="Talk to a Doctor for Free Now"
        >
          Talk to a Doctor for Free Now
        </Link>
      </div>
    </div>
  );
};

export default Pkgpage;
