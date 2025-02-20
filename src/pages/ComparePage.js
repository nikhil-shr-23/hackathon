import React, { useState, useEffect } from "react";

function ComparePage() {
  
 
  return (
    
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Feature Coming Soon</h2>
      <p className="text-gray-600 mb-6">We're working hard to bring you this feature. Stay tuned!</p>
      <div className="flex justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    </div>
  </div>
  );
}

export default ComparePage;
