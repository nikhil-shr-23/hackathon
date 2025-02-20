import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const ProtectedRoute2 = ({ element }) => {
  const [showModal, setShowModal] = useState(false);
  const userId = Cookies.get('HBI-T');

  useEffect(() => {
    if (!userId) {
      setShowModal(true);
    }
  }, [userId]);

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-red-500 mb-4">Access Denied</h2>
            <p>Please create a patient portal first.</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {userId && element}
    </>
  );
};

export default ProtectedRoute2;
