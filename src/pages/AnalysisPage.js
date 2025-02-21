import React, { useEffect } from 'react';

const AnalysisPage = () => {

  useEffect(() => {
    // removing zoho bot from app
    try {
      if (window.$zoho && 
          window.$zoho.salesiq && 
          typeof window.$zoho.salesiq.floatbutton !== 'undefined' &&
          typeof window.$zoho.salesiq.floatbutton.visible === 'function') {
        window.$zoho.salesiq.floatbutton.visible('hide');
      }
    } catch (error) {
      console.log('Zoho SalesIQ not available');
    }
    
    const translationWidget = document.querySelector('#google_translate_element');
    if (translationWidget) {
      translationWidget.style.display = 'none';
    }

    
    return () => {
      try {
        if (window.$zoho && 
            window.$zoho.salesiq && 
            typeof window.$zoho.salesiq.floatbutton !== 'undefined' &&
            typeof window.$zoho.salesiq.floatbutton.visible === 'function') {
          window.$zoho.salesiq.floatbutton.visible('show');
        }
      } catch (error) {
        console.log('Zoho SalesIQ not available');
      }
      if (translationWidget) {
        translationWidget.style.display = 'block';
      }
    };
  }, []);

  return (
    <div className="streamlit-container">
      <h1 className="text-3xl text-center font-semibold mb-6">AI Report Analysis</h1>
      <div className="iframe-wrapper">
        <iframe
          src="https://83022d5a-c739-478d-be34-e2788049d9bf-00-26ar5i11l777s.worf.replit.dev/" // yaha pe streamlit waale app ka link daal dena
          width="100%"
          height="800px"
          frameBorder="0"
          title="AI Report Analysis"
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
        />
      </div>
    </div>
  );
};

export default AnalysisPage;
