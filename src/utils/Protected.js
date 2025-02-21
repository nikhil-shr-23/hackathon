import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import AccessDeniedDialog from './DialogBox'; 

const ProtectedRoute = ({ element }) => {
  const token = Cookies.get('token'); 
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

  return element; 
};

export default ProtectedRoute;
