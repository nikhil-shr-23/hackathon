import React from "react";

const ToolsPage = () => {
  return (
    <section className="mx-auto max-w-screen-xl py-12 text-blue-700 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mx-auto max-w-2xl">
          <p className="text-sm font-medium text-blue-800">INTRODUCING</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl xl:text-5xl">
            Our Essential Tools
          </h2>
          <hr className="mx-auto mt-4 h-2 w-32 border-none bg-blue-700" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-20 text-center sm:mx-auto sm:max-w-sm md:mt-20 md:max-w-full md:grid-cols-3 md:text-left">
          {/* Visa Help Feature */}
          <div className="flex flex-col items-center text-center md:items-start">
            <img
              className="mx-auto h-56 object-contain md:object-left"
              src="/images/visa-help.png" // Replace with your actual image path
              alt="Visa Help"
            />
            <div className="mt-6">
              <h3 className="text-2xl font-bold">Visa Help</h3>
              <p className="mt-4 text-gray-500">
                Expert assistance with visa applications, requirements, and
                processes.
              </p>
              <button className="mt-4 rounded-lg bg-blue-700 px-6 py-2 text-white transition-transform transform hover:translate-y-1">
                Learn more
              </button>
            </div>
          </div>

          {/* Financial Planning Feature */}
          <div className="flex flex-col items-center text-center md:items-start">
            <img
              className="mx-auto h-56 object-contain md:object-left"
              src="/images/financial-planning.png" // Replace with your actual image path
              alt="Financial Planning"
            />
            <div className="mt-6">
              <h3 className="text-2xl font-bold">Financial Planning</h3>
              <p className="mt-4 text-gray-500">
                Comprehensive financial planning to secure your future.
              </p>
              <button className="mt-4 rounded-lg bg-blue-700 px-6 py-2 text-white transition-transform transform hover:translate-y-1">
                Learn more
              </button>
            </div>
          </div>

          {/* Cost Estimator Feature */}
          <div className="flex flex-col items-center text-center md:items-start">
            <img
              className="mx-auto h-56 object-contain md:object-left"
              src="/images/cost-estimator.png" // Replace with your actual image path
              alt="Cost Estimator"
            />
            <div className="mt-6">
              <h3 className="text-2xl font-bold">Cost Estimator</h3>
              <p className="mt-4 text-gray-500">
                Accurate cost estimation for budgeting and planning.
              </p>
              <button className="mt-4 rounded-lg bg-blue-700 px-6 py-2 text-white transition-transform transform hover:translate-y-1">
                Learn more
              </button>
            </div>
          </div>
          {/* Cost Estimator Feature */}
          <div className="flex flex-col items-center text-center md:items-start">
            <img
              className="mx-auto h-56 object-contain md:object-left"
              src="/images/cost-estimator.png" // Replace with your actual image path
              alt="Cost Estimator"
            />
            <div className="mt-6">
              <h3 className="text-2xl font-bold">Compare Hospitals</h3>
              <p className="mt-4 text-gray-500">Compare between hospitals.</p>
              <button className="mt-4 rounded-lg bg-blue-700 px-6 py-2 text-white transition-transform transform hover:translate-y-1">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsPage;
