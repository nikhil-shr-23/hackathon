import React, { useState } from "react";

const ailmentsList = [
  "Piles",
  "Hernia Treatment",
  "Kidney Stone",
  "Cataract",
  "Circumcision",
  "Lasik",
  "Varicose Veins",
  "Gallstone",
  "Anal Fistula",
  "Gynaecomastia",
  "Anal Fissure",
  "Lipoma Removal",
  "Sebaceous Cyst",
  "Pilonidal Sinus",
  "Lump in Breast",
  "TURP",
  "Hydrocele",
  "Knee Replacement",
  "Hair Transplant",
  "Endometriosis",
  "Prostate Enlargement",
  "Epilepsy Surgery",
  "Hernia Repair",
  "Sleeve Gastrectomy",
  "Gastric Bypass",
  "Liver Transplant",
  "Kidney Transplant",
  "Spinal Surgery",
  "Heart Valve Replacement",
  "Angioplasty",
  "Corneal Transplant",
  "IVF (In Vitro Fertilization)",
  "Surrogacy Services",
  "Reconstructive Surgery",
  "Joint Replacement Surgeries",
  "Spine Surgeries",
  "Complex Fracture Repairs",
  "Heart Bypass Surgery",
  "Angioplasty and Stenting",
  "Valve Replacement Surgeries",
  "Chemotherapy",
  "Radiation Therapy",
  "Surgical Oncology",
  "Advanced Cancer Treatments",
  "Immunotherapy",
  "Brain Surgery",
  "Spinal Cord Surgeries",
  "Parkinson’s Disease Treatments",
  "Kidney Transplants",
  "Liver Transplants",
  "Heart Transplants",
  "Weight Loss Surgery",
  "Plastic Surgeries",
  "Cosmetic Enhancements",
  "Reconstructive Surgeries Post-Trauma or Cancer",
  "Cataract Surgery",
  "LASIK Eye Surgery",
  "Dental Implants",
  "In Vitro Fertilization (IVF)",
  "Surrogacy Services",
  "Treatment for Liver Diseases",
  "Complex Gastrointestinal Surgeries",
  "Management of Autoimmune Diseases",
  "Advanced Treatments for Rheumatoid Arthritis",
];

function App() {
  const [ailment, setAilment] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [filteredAilments, setFilteredAilments] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleAilmentChange = (e) => {
    const value = e.target.value;
    setAilment(value);

    if (value) {
      const filtered = ailmentsList.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredAilments(filtered);
      setShowDropdown(true);
    } else {
      setFilteredAilments([]);
      setShowDropdown(false);
    }
  };

  const handleAilmentSelect = (selectedAilment) => {
    setAilment(selectedAilment);
    setFilteredAilments([]);
    setShowDropdown(false);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Ailment:", ailment);
    console.log("Name:", name);
    console.log("Phone:", phone);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">
        We are expert when it comes to care.
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="bg-white rounded-lg shadow-md p-8 ">
          <h2 className="text-xl font-bold mb-4">Popular Surgeries</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {ailmentsList.slice(0, 10).map((surgery) => (
              <div
                key={surgery}
                className="bg-gray-200 rounded-lg h-24 flex flex-col items-center justify-center w-30"
              >
                <p className="text-gray-600 font-medium">{surgery}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 ">
          <h2 className="text-xl font-bold mb-4">
            Book your consultation today
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <label
                htmlFor="ailment"
                className="block text-gray-700 font-bold mb-2"
              >
                Select Ailment*
              </label>
              <input
                type="text"
                id="ailment"
                placeholder="type here..."
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={ailment}
                onChange={handleAilmentChange}
              />
              {showDropdown && filteredAilments.length > 0 && (
                <ul className="absolute z-10 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg w-full max-h-40 overflow-y-auto">
                  {filteredAilments.map((item) => (
                    <li
                      key={item}
                      className="py-2 px-3 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleAilmentSelect(item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name*
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Number*
              </label>
              <input
                type="tel"
                id="phone"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={phone}
                onChange={handlePhoneChange}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
            >
              Book Appointment
            </button>
            <p className="text-gray-600 text-xs mt-2">
              By submitting the form, you agree to{" "}
              <a href="#" className="text-blue-500 hover:underline">
                T&C
              </a>
            </p>
          </form>
          <div className="mt-6">
            <hr className="my-4 border-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
