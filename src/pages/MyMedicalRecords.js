import React, { useState } from "react";

const MyMedicalRecords = () => {
  const [records, setRecords] = useState([]);
  const [category, setCategory] = useState("Report");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = () => {
    if (!file || !date || !title) {
      setError("Please provide a file, date, and title.");
      return;
    }

    if (file.size > 5000000) { // 5MB limit for example
      setError("File size exceeds the limit of 5MB.");
      return;
    }

    setLoading(true);

    // Simulate file upload
    setTimeout(() => {
      const newRecord = {
        id: records.length + 1,
        category,
        date,
        title,
        fileName: file.name,
      };

      setRecords([...records, newRecord]);
      setCategory("Report");
      setDate("");
      setTitle("");
      setFile(null);
      setError("");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full p-6 md:p-8 lg:p-12 rounded-lg shadow-lg bg-sky-50">
      <div className="mb-6">
        <h5 className="text-2xl font-bold mb-4 text-sky-800">
          Upload Medical Records
        </h5>
        <div className="flex flex-wrap -mx-4 mb-4">
          <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-sky-600 text-sm font-semibold mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <select
              id="category"
              className="block w-full bg-white border border-sky-300 text-sky-700 py-3 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="Report">Report</option>
              <option value="Prescription">Prescription</option>
              <option value="Invoice">Invoice</option>
            </select>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-sky-600 text-sm font-semibold mb-2"
              htmlFor="date"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              className="block w-full bg-white border border-sky-300 text-sky-700 py-3 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={date}
              onChange={handleDateChange}
            />
          </div>
          <div className="w-full px-4 mb-6">
            <label
              className="block uppercase tracking-wide text-sky-600 text-sm font-semibold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="block w-full bg-white border border-sky-300 text-sky-700 py-3 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Enter record title"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="w-full px-4">
            <label
              className="block uppercase tracking-wide text-sky-600 text-sm font-semibold mb-2"
              htmlFor="file"
            >
              Upload File
            </label>
            <input
              type="file"
              id="file"
              className="block w-full bg-white border border-sky-300 text-sky-700 py-3 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              onChange={handleFileChange}
            />
          </div>
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="button"
          className={`bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? 'Uploading...' : 'Upload'}
        </button>
      </div>

      <div className="bg-white overflow-x-auto rounded-lg shadow-lg">
        <h5 className="text-2xl font-bold mb-4 text-sky-800">
          Uploaded Records
        </h5>
        <table className="min-w-full divide-y divide-sky-200">
          <thead className="bg-sky-200 text-sky-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                File Name
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-sky-200">
            {records.map((record) => (
              <tr key={record.id} className="hover:bg-sky-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-sky-700">
                  {record.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-sky-700">
                  {record.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-sky-700">
                  {record.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-sky-700">
                  {record.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-sky-700">
                  {record.fileName}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyMedicalRecords;
