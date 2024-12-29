'use client'

import { useState } from "react";
import { updateWatch } from "../server-actions/updateWatch";

export default function EditWatch({ watch }) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    brand: watch.brand,
    model: watch.model,
    referenceNumber: watch.reference_number,
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      {/* Edit Button */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
      >
        Edit
      </button>

      {/* Modal for Editing */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center px-4">
          <div className="modal-content bg-gray-900 p-8 rounded-lg shadow-xl w-full max-w-lg transform transition-all duration-300">
            {/* Close Button */}
            <span
              className="close text-white text-2xl leading-none hover:text-gray-300 cursor-pointer absolute top-4 right-4"
              onClick={() => setShowModal(false)}
            >
              &times;
            </span>

            {/* Form */}
            <form action={updateWatch} onSubmit={() => setShowModal(false)} className="mt-6">
              <input type="hidden" name="id" value={watch.id} />

              {/* Brand Input */}
              <div className="mb-6">
                <label htmlFor="brand" className="block text-gray-300 mb-2 text-lg">Brand</label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Model Input */}
              <div className="mb-6">
                <label htmlFor="model" className="block text-gray-300 mb-2 text-lg">Model</label>
                <input
                  type="text"
                  id="model"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Reference Number Input */}
              <div className="mb-6">
                <label htmlFor="referenceNumber" className="block text-gray-300 mb-2 text-lg">Reference Number</label>
                <input
                  type="text"
                  id="referenceNumber"
                  name="referenceNumber"
                  value={formData.referenceNumber}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
              >
                Update Watch
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
