import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaArchive } from "react-icons/fa";

export default function EditArchivedModal({ course, onClose, onSave  }) {
const [loading, setLoading] = useState(false);
const [isArchive, setIsArchive] = useState(course?.is_archive ?? true);
useEffect(() => {
    if (course) {
      setIsArchive(course.is_archive ?? true);
    }
  }, [course]);
const handleSave = async () => {
    try {
    setLoading(true);    
    const payload = {
        object_id: course?.id, 
        table_name: "carwash.user",
        data: {
            is_archive: isArchive
        },
    };
    console.log("Update Payload:", payload);
    const res = await axios.post(
        "https://carwashapis.gosmart.ae/Update_record",
        payload
    );
    toast.success("Record updated successfully!");
    console.log("API Response:", res.data);
    const updatedCourse = {
        ...course,
        is_archive: isArchive
    };
    onSave(updatedCourse);
    onClose();
    } catch (err) {
    console.error("Update error:", err.response?.data || err.message);
    toast.error("Failed to update record!");
    } finally {
    setLoading(false);
    }
};

return (
    <div
    className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
    onClick={onClose}
    >
    <div
        className="bg-white rounded-xl p-6 w-full max-w-xs md:max-w-2xl shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
    >
        <button
        onClick={onClose}
        className="absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-2xl"
        >
        &times;
        </button>

        <h2 className="text-2xl font-semibold mb-4">Edit Archived Customer</h2>

        <label className="relative inline-flex items-center cursor-pointer">
            <input
            type="checkbox"
            className="sr-only peer"
            checked={isArchive}
            onChange={(e) => setIsArchive(e.target.checked)}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-sec transition"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
        </label>
        <p className="text-base mt-2 text-gray-500 flex items-center gap-2">
        <FaArchive /> Status:{" "}
        <span className={`font-medium ${isArchive ? "text-red-600" : "text-green-600"}`}>
            {isArchive ? "Archived" : "Active"}
        </span>
        </p>
        <div className="flex justify-end space-x-3">
        <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
        >
            Cancel
        </button>
        <button
            onClick={handleSave}
            disabled={loading}
            className="px-4 py-2 bg-sec hover:bg-hoverSec text-white rounded"
        >
            {loading ? "Saving..." : "Save Changes"}
        </button>
        </div>
    </div>
    </div>
);
}
