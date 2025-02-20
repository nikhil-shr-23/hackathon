import React from 'react';

const AccessDeniedDialog = ({ show, setShow }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center text-red-600">Access Denied</h2>
        <p className="text-center text-gray-600 mb-4">
          Please register or login first to access this page.
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => setShow(false)}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessDeniedDialog;
