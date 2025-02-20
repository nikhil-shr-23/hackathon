import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import AccessDeniedDialog from './DialogBox'; // Import the dialog box component

const ProtectedRoute = ({ element }) => {
  const token = Cookies.get('token'); // Get the token from cookies
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    if (!token) {
      setShowDialog(true);
    }
  }, [token]);

  if (!token) {
    return (
      <>
        {showDialog && <AccessDeniedDialog show={showDialog} setShow={setShowDialog} />}
       
      </>
    );
  }

  return element; // Return the component to be rendered
};

export default ProtectedRoute;
